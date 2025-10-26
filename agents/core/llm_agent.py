# core/llm_agent.py  (only the chat-completion related parts shown/replace existing)
import os
import httpx
from typing import List, Dict, Optional
from .prompts import SYSTEM_POLICY
from core.memory import get_history, append_message
from core.retrieval import load_problem_context, fetch_chunks_simple
from dotenv import load_dotenv
load_dotenv()

# Ollama configuration
OLLAMA_URL = os.getenv("OLLAMA_URL", "http://localhost:11434")
OLLAMA_MODEL = os.getenv("OLLAMA_MODEL", "llama3.2")
MAX_HISTORY_TURNS = 8

def build_messages_for_ollama(system: str, context: str, history: List[Dict], user_msg: str) -> str:
    """
    Ollama /api/generate expects a single prompt string.
    We'll build a clear prompt that includes system policy, problem context,
    last few messages, and the user's message.
    """
    parts = [system]
    if context:
        parts.append("Problem/context:\n" + context)
    if history:
        parts.append("Conversation history (most recent first):")
        # show as "User: ...\nAssistant: ..." entries
        for turn in history[-(MAX_HISTORY_TURNS*2):]:
            role = turn.get("role", "user")
            content = turn.get("content", "")
            parts.append(f"{role.title()}: {content}")
    parts.append("User: " + user_msg)
    parts.append("\nAssistant:")
    # the trailing "Assistant:" hints to Ollama to continue as assistant
    return "\n\n".join(parts)

def looks_like_code(text: str) -> bool:
    code_markers = ["```", "def ", "class ", "for (", "for(", ";", "{", "}", "=>"]
    if "```" in text:
        return True
    long_line = any(len(line) > 120 for line in text.splitlines())
    suspicious = any(m in text for m in code_markers)
    return suspicious and long_line

def sanitize_codey_bits(text: str) -> str:
    t = text.replace("```", "")
    replacements = [
        (" for (", " for each "),
        (" for(", " for each "),
        ("{", ""),
        ("}", ""),
        (";", "."),
        ("->", " to "),
    ]
    for a,b in replacements:
        t = t.replace(a,b)
    return t

async def chat_complete_ollama(prompt: str, model: Optional[str] = None) -> str:
    """
    Calls Ollama /api/generate and returns the response text.
    """
    model = model or OLLAMA_MODEL
    url = f"{OLLAMA_URL}/api/generate"
    payload = {
        "model": model,
        "prompt": prompt,
        # "stream": False,  # default behavior; change if you handle streaming
        # you can set other options here like "temperature" depending on Ollama model support
    }
    async with httpx.AsyncClient(timeout=120) as client:
        # Ollama accepts application/x-www-form-urlencoded body for curl examples, but JSON works too.
        # Use simple POST with JSON body.
        r = await client.post(url, json=payload)
        r.raise_for_status()
        js = r.json()
        # Ollama's generate response has a "response" or "text" field depending on version.
        # Look for common keys safely:
        if isinstance(js, dict):
            # newest docs: response under 'response' or 'text' or 'choices'
            if "response" in js:
                content = js["response"]
            elif "text" in js:
                content = js["text"]
            elif "choices" in js and isinstance(js["choices"], list) and js["choices"]:
                content = js["choices"][0].get("message") or js["choices"][0].get("text") or ""
            else:
                # fallback: stringify
                content = js.get("output") or str(js)
        else:
            content = str(js)

    if looks_like_code(content):
        content = sanitize_codey_bits(content)
    return content

# main generate_reply function uses chat_complete_ollama
async def generate_reply(conversation_id: str, user_message: str, problem_id: Optional[str]=None, lang: Optional[str]=None, run_summary: Optional[str]=None):
    # 1. load history
    history = await get_history(conversation_id, MAX_HISTORY_TURNS)
    # 2. load problem context + chunks
    context = ""
    if problem_id:
        context = load_problem_context(problem_id)
        chunks = fetch_chunks_simple(problem_id, limit=8)
        if chunks:
            s = "\n".join(f"[{r['role']}] {r['content']}" for r in chunks)
            context = context + "\n\nRelevant notes:\n" + s
    if lang:
        context = (context or "") + f"\n\nUser language: {lang}"
    if run_summary:
        context = (context or "") + f"\n\nLatest run summary:\n{run_summary}"
    # 3. build prompt for Ollama
    prompt = build_messages_for_ollama(SYSTEM_POLICY, context, history, user_message)
    # 4. call Ollama
    reply = await chat_complete_ollama(prompt)
    # 5. persist messages
    await append_message(conversation_id, "user", user_message)
    await append_message(conversation_id, "assistant", reply)
    return reply
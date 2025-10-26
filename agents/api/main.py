import os
import json
import httpx
import traceback
import diskcache as dc
from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel
from dotenv import load_dotenv
from sqlalchemy import create_engine, text
from typing import Optional

# -----------------------------
# Load environment variables
# -----------------------------
load_dotenv()

OLLAMA_BASE_URL = os.getenv("OLLAMA_BASE_URL", "http://localhost:11434")
LLM_MODEL = os.getenv("LLM_MODEL", "qwen2.5:7b-instruct")
PG_DSN = os.getenv("PG_DSN")
MEMORY_PATH = os.getenv("MEMORY_PATH", "./memory/chat_history.json")

# -----------------------------
# Initialize components
# -----------------------------
app = FastAPI(title="LeetCode AI Agent", version="0.1")
cache = dc.Cache("./memory")

engine = None
if PG_DSN:
    engine = create_engine(PG_DSN, echo=False, future=True)

# -----------------------------
# Request Schema
# -----------------------------
class ChatRequest(BaseModel):
    conversation_id: str
    user_message: str
    problem_id: str
    lang: str
    run_summary: Optional[str] = None


# -----------------------------
# Helper: Fetch problem context
# -----------------------------
def get_problem_context(problem_id: str):
    if not engine:
        return "Problem database not connected."
    with engine.connect() as conn:
        res = conn.execute(
            text("SELECT title, difficulty, statement_md as description FROM problems WHERE id = :id"),
            {"id": problem_id},
        ).fetchone()
        if not res:
            return "Problem not found."
        # res keys might differ by SQLAlchemy version; treat generically
        try:
            title = res["title"]
            difficulty = res["difficulty"]
            description = res["description"]
        except Exception:
            # fallback tuple unpack
            title, difficulty, description = res[0], res[1], res[2]
        return f"Problem: {title} ({difficulty})\nDescription:\n{description}"


# -----------------------------
# Helper: Get conversation history
# -----------------------------
def get_chat_history(conversation_id: str):
    return cache.get(conversation_id, [])


def save_chat(conversation_id: str, role: str, message: str):
    history = cache.get(conversation_id, [])
    history.append({"role": role, "message": message})
    cache[conversation_id] = history


# -----------------------------
# Helper: Query Ollama
# -----------------------------
async def query_ollama(prompt: str) -> str:
    async with httpx.AsyncClient(timeout=120) as client:
        resp = await client.post(
            f"{OLLAMA_BASE_URL}/api/generate",
            json={
                "model": LLM_MODEL,
                "prompt": prompt,
                "max_tokens": 512,
                "temperature": 0.7,
            },
        )
        if resp.status_code != 200:
            raise HTTPException(status_code=500, detail=f"Ollama error: {resp.text}")

        # Ollama may return a streamed response; attempt to parse lines as JSON,
        # otherwise fall back to response.text
        text_accum = ""
        try:
            for line in resp.text.splitlines():
                if not line.strip():
                    continue
                try:
                    data = json.loads(line)
                    # prefer 'response' or 'text' keys
                    text_accum += data.get("response", "") or data.get("text", "")
                except Exception:
                    # not JSON — append raw
                    text_accum += line
        except Exception:
            text_accum = resp.text

        return text_accum.strip()


# -----------------------------
# Main chat endpoint
# -----------------------------
@app.post("/chat/")
async def chat(req: ChatRequest):
    try:
        # --- original logic starts ---
        history = get_chat_history(req.conversation_id)
        prev_dialogue = "\n".join([f"{h['role']}: {h['message']}" for h in history])

        problem_context = ""
        if getattr(req, "problem_id", None):
            problem_context = get_problem_context(req.problem_id)

        system_prompt = (
            "You are a helpful AI assistant that helps users debug LeetCode problems. "
            "You can give conceptual hints, debugging strategies, and discuss algorithmic ideas. "
            "Never provide complete code. Respond with clarity and structure.\n\n"
        )

        user_prompt = (
            f"{system_prompt}"
            f"Conversation so far:\n{prev_dialogue}\n\n"
            f"Problem Context:\n{problem_context}\n\n"
            f"Language: {req.lang}\n"
            f"User's last message: {req.user_message}\n"
            f"Latest run summary (if any): {req.run_summary}\n\n"
            f"Provide helpful hints or explanations — not the full code."
        )

        reply = await query_ollama(user_prompt)

        save_chat(req.conversation_id, "user", req.user_message)
        save_chat(req.conversation_id, "assistant", reply)

        return {"reply": reply}
        # --- original logic ends ---
    except Exception as exc:
        tb = traceback.format_exc()
        # print to server console as well
        print("=== DEBUG TRACEBACK ===")
        print(tb)
        print("=== END TRACEBACK ===")
        # return verbose debug payload to client (development only)
        return {
            "error": str(exc),
            "traceback": tb
        }, status.HTTP_500_INTERNAL_SERVER_ERROR
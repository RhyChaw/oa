# api/routes/chat.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional
from core.llm_agent import generate_reply

router = APIRouter()

class ChatIn(BaseModel):
    conversation_id: str
    user_message: str
    problem_id: Optional[str] = None
    lang: Optional[str] = None
    run_summary: Optional[str] = None

class ChatOut(BaseModel):
    reply: str

@router.post("/", response_model=ChatOut)
async def chat_endpoint(payload: ChatIn):
    try:
        reply = await generate_reply(
            payload.conversation_id,
            payload.user_message,
            problem_id=payload.problem_id,
            lang=payload.lang,
            run_summary=payload.run_summary
        )
        return ChatOut(reply=reply)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
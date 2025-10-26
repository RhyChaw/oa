# core/memory.py
# Simple pluggable memory backend: in-memory (dev) + optional Redis
import os
import json
from typing import List, Dict
from dotenv import load_dotenv
load_dotenv()

USE_REDIS = False
REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379/0")
try:
    import redis
    USE_REDIS = True
except Exception:
    USE_REDIS = False

if USE_REDIS:
    _redis = redis.from_url(REDIS_URL, decode_responses=True)

# In-memory fallback
_MEMORY = {}

async def append_message(conv_id: str, role: str, content: str):
    entry = {"role": role, "content": content}
    if USE_REDIS:
        _redis.rpush(f"conv:{conv_id}", json.dumps(entry))
    else:
        _MEMORY.setdefault(conv_id, []).append(entry)

async def get_history(conv_id: str, max_turns: int = 8) -> List[Dict]:
    if USE_REDIS:
        raw = _redis.lrange(f"conv:{conv_id}", -max_turns*2, -1)
        return [json.loads(r) for r in raw]
    else:
        return _MEMORY.get(conv_id, [])[-(max_turns*2):]

async def clear(conv_id: str):
    if USE_REDIS:
        _redis.delete(f"conv:{conv_id}")
    else:
        _MEMORY.pop(conv_id, None)
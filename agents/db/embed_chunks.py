# db/embed_chunks.py  (only embedding related parts shown)
import os
import numpy as np
import httpx
from db.utils import get_conn
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv
load_dotenv()

OLLAMA_URL = os.getenv("OLLAMA_URL", "http://localhost:11434")
OLLAMA_EMBED_MODEL = os.getenv("OLLAMA_EMBED_MODEL", "mxbai-embed-large")
EMBED_DIM = int(os.getenv("EMBED_DIM", "1536"))

def embed_ollama(texts):
    """
    Call Ollama embedding endpoint: POST /api/embed
    The expected request body: {"model":"<name>", "input": ["...","..."]}
    Response: {"data":[{"embedding":[...]}...]}
    """
    url = f"{OLLAMA_URL}/api/embed"
    payload = {"model": OLLAMA_EMBED_MODEL, "input": texts}
    with httpx.Client(timeout=120) as client:
        r = client.post(url, json=payload)
        r.raise_for_status()
        js = r.json()
    # different Ollama versions vary; try to normalise:
    embs = []
    if isinstance(js, dict) and "embeddings" in js:
        # New Ollama format with direct embeddings array
        for embedding in js["embeddings"]:
            vec = np.array(embedding, dtype=np.float32)
            # pad or truncate to EMBED_DIM
            if vec.shape[0] < EMBED_DIM:
                pad = np.zeros(EMBED_DIM - vec.shape[0], dtype=np.float32)
                vec = np.concatenate([vec, pad])
            else:
                vec = vec[:EMBED_DIM]
            embs.append(vec)
    elif isinstance(js, dict) and "data" in js:
        # Old format with data array
        for item in js["data"]:
            vec = np.array(item.get("embedding") or item.get("vector") or item.get("emb"), dtype=np.float32)
            # pad or truncate to EMBED_DIM
            if vec.shape[0] < EMBED_DIM:
                pad = np.zeros(EMBED_DIM - vec.shape[0], dtype=np.float32)
                vec = np.concatenate([vec, pad])
            else:
                vec = vec[:EMBED_DIM]
            embs.append(vec)
    else:
        raise RuntimeError("Unexpected Ollama embed response: " + str(js))
    return embs

def get_chunks(conn, limit=1000):
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute("SELECT id, content FROM problem_chunks WHERE embedding IS NULL LIMIT %s", (limit,))
        return cur.fetchall()

def upsert_embedding(conn, chunk_id, vec):
    with conn.cursor() as cur:
        cur.execute("UPDATE problem_chunks SET embedding = %s WHERE id = %s", (vec.tolist(), chunk_id))

def run_embedding_pass(batch_size=128):
    conn = get_conn()
    try:
        chunks = get_chunks(conn, limit=batch_size)
        if not chunks:
            print("No chunks to embed.")
            return
        texts = [c["content"] for c in chunks]
        vectors = embed_ollama(texts)
        for c, v in zip(chunks, vectors):
            upsert_embedding(conn, c["id"], v)
        conn.commit()
        print(f"Embedded {len(vectors)} chunks.")
    finally:
        conn.close()

if __name__ == "__main__":
    run_embedding_pass()
# core/retrieval.py
from db.utils import get_conn
from psycopg2.extras import RealDictCursor
import numpy as np

# This module assumes embeddings exist in problem_chunks.embedding (pgvector)
# It provides a top_k_chunks(problem_id, query_vec, k) function.
# For the initial MVP we allow retrieving by problem_id only.

def load_problem_context(problem_id: str) -> str:
    with get_conn() as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute("SELECT title, difficulty, statement_md, constraints_md FROM problems WHERE id = %s", (problem_id,))
            r = cur.fetchone()
            if not r:
                return ""
            out = f"Title: {r['title']} ({r['difficulty']})\n\n{r['statement_md']}"
            if r.get("constraints_md"):
                out += f"\n\nConstraints:\n{r['constraints_md']}"
            return out

def top_k_chunks(problem_id: str, k: int = 6):
    with get_conn() as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute("""
                SELECT role, content
                FROM problem_chunks
                WHERE problem_id = %s
                ORDER BY embedding <-> %s
                LIMIT %s
            """, (problem_id, None, k))
            # Note: passing None for query vector requires constructing actual vector param in client.
            # Simpler MVP: fetch role/content and let app do additional filtering.
            rows = cur.fetchall()
    return rows

# Simple helper to fetch chunks (non-semantic fallback)
def fetch_chunks_simple(problem_id: str, limit: int = 10):
    with get_conn() as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute("""
                SELECT role, content FROM problem_chunks
                WHERE problem_id = %s
                LIMIT %s
            """, (problem_id, limit))
            return cur.fetchall()
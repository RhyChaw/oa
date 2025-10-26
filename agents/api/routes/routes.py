# api/routes/problems.py
from fastapi import APIRouter, HTTPException
from typing import Optional
from db.utils import fetchone, fetchall

router = APIRouter()

@router.get("/{slug}")
def get_problem(slug: str):
    row = fetchone("SELECT id, slug, title, difficulty, statement_md, constraints_md, tags FROM problems WHERE slug = %s", (slug,))
    if not row:
        raise HTTPException(status_code=404, detail="Not found")
    return row

@router.get("/{slug}/chunks")
def get_problem_chunks(slug: str):
    q = """
    SELECT pc.role, pc.content
    FROM problem_chunks pc
    JOIN problems p ON p.id = pc.problem_id
    WHERE p.slug = %s
    LIMIT 50
    """
    rows = fetchall(q, (slug,))
    return rows
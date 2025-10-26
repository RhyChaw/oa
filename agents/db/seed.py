#!/usr/bin/env python3
# db/seed.py
import os
import json
import uuid
from db.utils import get_conn
from psycopg2.extras import Json
from dotenv import load_dotenv
load_dotenv()

DATA_PATH = os.path.join(os.path.dirname(__file__), "..", "data", "two_sum.json")

def upsert_problem(conn, p):
    with conn.cursor() as cur:
        cur.execute("""
            INSERT INTO problems (id, slug, title, difficulty, statement_md, input_desc, output_desc,
                                  constraints_md, examples_json, tags, canonical_strategies, pitfalls)
            VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
            ON CONFLICT (slug) DO UPDATE SET
                title=EXCLUDED.title,
                difficulty=EXCLUDED.difficulty,
                statement_md=EXCLUDED.statement_md,
                input_desc=EXCLUDED.input_desc,
                output_desc=EXCLUDED.output_desc,
                constraints_md=EXCLUDED.constraints_md,
                examples_json=EXCLUDED.examples_json,
                tags=EXCLUDED.tags,
                canonical_strategies=EXCLUDED.canonical_strategies,
                pitfalls=EXCLUDED.pitfalls
        """, (
            p["id"], p["slug"], p["title"], p["difficulty"], p["statement_md"],
            p.get("input_desc"), p.get("output_desc"), p.get("constraints_md"),
            Json(p.get("examples_json")), p.get("tags", []),
            Json(p.get("canonical_strategies")), Json(p.get("pitfalls"))
        ))

def upsert_scaffold(conn, pid, sc):
    with conn.cursor() as cur:
        cur.execute("""
            INSERT INTO language_scaffolds (problem_id, lang, starter_md)
            VALUES (%s,%s,%s)
            ON CONFLICT (problem_id, lang) DO UPDATE SET starter_md = EXCLUDED.starter_md
        """, (pid, sc["lang"], sc["starter_md"]))

def insert_test(conn, pid, t, vis):
    with conn.cursor() as cur:
        cur.execute("""
            INSERT INTO test_cases (id, problem_id, visibility, input, expected_output, weight)
            VALUES (%s,%s,%s,%s,%s,%s)
        """, (str(uuid.uuid4()), pid, vis, t["input"], t["expected_output"], t.get("weight",1)))

def insert_chunk(conn, pid, ch):
    with conn.cursor() as cur:
        cur.execute("""
            INSERT INTO problem_chunks (id, problem_id, role, content)
            VALUES (%s,%s,%s,%s)
        """, (str(uuid.uuid4()), pid, ch["role"], ch["content"]))

def main():
    data = json.load(open(DATA_PATH))
    p = data["problem"]
    conn = get_conn()
    try:
        upsert_problem(conn, p)
        for sc in data.get("scaffolds", []):
            upsert_scaffold(conn, p["id"], sc)
        for t in data.get("tests", {}).get("public", []):
            insert_test(conn, p["id"], t, "public")
        for t in data.get("tests", {}).get("private", []):
            insert_test(conn, p["id"], t, "private")
        for ch in data.get("chunks", []):
            insert_chunk(conn, p["id"], ch)
        conn.commit()
        print("Seeded problem:", p["slug"])
    finally:
        conn.close()

if __name__ == "__main__":
    main()
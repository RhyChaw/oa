# db/utils.py
import os
import psycopg2
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv

load_dotenv()

PG_DSN = os.getenv("PG_DSN", "postgresql://leet:coach@localhost:5432/leetcode")

def get_conn():
    return psycopg2.connect(PG_DSN)

def fetchone(query, params=()):
    with get_conn() as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute(query, params)
            return cur.fetchone()

def fetchall(query, params=()):
    with get_conn() as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute(query, params)
            return cur.fetchall()

def execute(query, params=()):
    with get_conn() as conn:
        with conn.cursor() as cur:
            cur.execute(query, params)
        conn.commit()
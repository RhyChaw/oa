.PHONY: up down migrate seed embed run

up:
	docker compose up -d

down:
	docker compose down

migrate:
	docker cp db/init_schema.sql leetcoach-db:/tmp/init_schema.sql
	docker exec leetcoach-db psql -U leet -d leetcode -f /tmp/init_schema.sql

seed:
	source .venv/bin/activate && PYTHONPATH=/Users/mehulgrover/Desktop/oa/agents python db/seed.py

embed:
	source .venv/bin/activate && PYTHONPATH=/Users/mehulgrover/Desktop/oa/agents python db/embed_chunks.py

run:
	source .venv/bin/activate && uvicorn api.main:app --reload --port 8001
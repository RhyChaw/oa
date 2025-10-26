CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE IF NOT EXISTS problems(
  id UUID PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('Easy','Medium','Hard')),
  statement_md TEXT NOT NULL,
  input_desc TEXT,
  output_desc TEXT,
  constraints_md TEXT,
  examples_json JSONB,
  tags TEXT[] DEFAULT '{}',
  canonical_strategies JSONB,
  pitfalls JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS language_scaffolds(
  problem_id UUID REFERENCES problems(id) ON DELETE CASCADE,
  lang TEXT NOT NULL,
  starter_md TEXT NOT NULL,
  PRIMARY KEY (problem_id, lang)
);

CREATE TABLE IF NOT EXISTS problem_chunks(
  id UUID PRIMARY KEY,
  problem_id UUID REFERENCES problems(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('statement','constraint','strategy','pitfall','example')),
  content TEXT NOT NULL,
  embedding vector(1536)
);

CREATE TABLE IF NOT EXISTS test_cases(
  id UUID PRIMARY KEY,
  problem_id UUID REFERENCES problems(id) ON DELETE CASCADE,
  visibility TEXT NOT NULL CHECK (visibility IN ('public','private')),
  input TEXT NOT NULL,
  expected_output TEXT NOT NULL,
  weight INT DEFAULT 1
);

CREATE TABLE IF NOT EXISTS conversations(
  id UUID PRIMARY KEY,
  problem_id UUID REFERENCES problems(id),
  lang TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS messages(
  id UUID PRIMARY KEY,
  conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('user','assistant','system')),
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS problems_tags_gin ON problems USING GIN (tags);
# LeetCode AI Agent

A FastAPI-based AI assistant that helps users debug LeetCode problems using Ollama LLM and PostgreSQL with vector embeddings.

## 🚀 Quick Start

### Prerequisites

- Docker and Docker Compose
- Python 3.8+
- Ollama
- Git

### 1. Clone and Setup

```bash
git clone <your-repo-url>
cd agents
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

### 2. Start All Services

```bash
# Start database and cache
make up

# Run database migrations
make migrate

# Seed database with sample data
make seed

# Generate embeddings (requires Ollama)
make embed

# Start the FastAPI server
make run
```

### 3. Start Ollama (in a separate terminal)

```bash
# Start Ollama server
ollama serve

# Pull required models (if not already downloaded)
ollama pull qwen2.5:7b-instruct
ollama pull mxbai-embed-large
```

## 📋 Available Commands

| Command | Description |
|---------|-------------|
| `make up` | Start PostgreSQL and Redis containers |
| `make down` | Stop all containers |
| `make migrate` | Run database migrations |
| `make seed` | Load sample problem data |
| `make embed` | Generate embeddings for problem chunks |
| `make run` | Start FastAPI server |

## 🌐 API Endpoints

- **API Server**: http://localhost:8001
- **API Documentation**: http://localhost:8001/docs
- **Chat Endpoint**: `POST /chat/`

### Example API Usage

```bash
curl -X POST "http://localhost:8001/chat/" \
  -H "Content-Type: application/json" \
  -d '{
    "conversation_id": "test-conversation",
    "user_message": "I am getting a runtime error in my two sum solution. Can you help me debug it?",
    "problem_id": "8e9c2b58-3c0b-4c7a-8a8f-2f2e7fd0a01a",
    "lang": "python",
    "run_summary": "IndexError: list index out of range"
  }'
```

## 🏗️ Architecture

### Services

- **FastAPI Server** (Port 8001): Main API server
- **PostgreSQL** (Port 5432): Database with pgvector extension
- **Redis** (Port 6379): Caching layer
- **Ollama** (Port 11434): LLM server

### Models

- **qwen2.5:7b-instruct**: Main language model for chat responses
- **mxbai-embed-large**: Embedding model for vector search

### Database Schema

- `problems`: LeetCode problem definitions
- `problem_chunks`: Text chunks with embeddings for retrieval
- `language_scaffolds`: Code templates for different languages
- `test_cases`: Public and private test cases
- `conversations`: Chat history (stored in Redis cache)

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the project root:

```bash
# Database
PG_DSN=postgresql://leet:coach@localhost:5432/leetcode

# Ollama
OLLAMA_BASE_URL=http://localhost:11434
LLM_MODEL=qwen2.5:7b-instruct
OLLAMA_EMBED_MODEL=mxbai-embed-large

# Memory
MEMORY_PATH=./memory/chat_history.json
```

### Docker Services

The `docker-compose.yml` defines:
- PostgreSQL with pgvector extension
- Redis for caching
- Persistent volumes for data

## 🐛 Troubleshooting

### Common Issues

1. **Port conflicts**: Make sure ports 5432, 6379, 8001, and 11434 are available
2. **Ollama not responding**: Ensure Ollama is running with `ollama serve`
3. **Database connection errors**: Check if PostgreSQL container is running with `docker ps`
4. **Missing models**: Pull required models with `ollama pull <model-name>`

### Service Status Check

```bash
# Check all services
curl -s http://localhost:8001/docs > /dev/null && echo "✅ FastAPI Running" || echo "❌ FastAPI Down"
curl -s http://localhost:11434/api/tags > /dev/null && echo "✅ Ollama Running" || echo "❌ Ollama Down"
docker ps | grep leetcoach-db && echo "✅ PostgreSQL Running" || echo "❌ PostgreSQL Down"
docker ps | grep leetcoach-redis && echo "✅ Redis Running" || echo "❌ Redis Down"
```

### Reset Everything

```bash
# Stop all services
make down

# Remove volumes (WARNING: This deletes all data)
docker volume rm agents_dbdata

# Start fresh
make up
make migrate
make seed
make embed
```

## 📁 Project Structure

```
agents/
├── api/                    # FastAPI application
│   ├── main.py            # Main API server
│   └── routes/            # API route handlers
├── core/                  # Core business logic
│   ├── llm_agent.py       # LLM interaction
│   ├── memory.py          # Memory management
│   ├── prompts.py         # Prompt templates
│   └── retrieval.py        # Vector search
├── db/                    # Database utilities
│   ├── init_schema.sql    # Database schema
│   ├── seed.py            # Data seeding
│   ├── embed_chunks.py    # Embedding generation
│   └── utils.py           # DB utilities
├── data/                  # Sample data
│   └── two_sum.json       # Two Sum problem data
├── memory/                # Cache storage
├── docker-compose.yml     # Docker services
├── Makefile              # Build commands
├── requirements.txt      # Python dependencies
└── README.md             # This file
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

[Add your license information here]

## 🆘 Support

For issues and questions:
1. Check the troubleshooting section above
2. Review the API documentation at http://localhost:8001/docs
3. Open an issue in the repository

---

**Happy coding! 🎉**

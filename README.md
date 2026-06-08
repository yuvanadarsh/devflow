# DevFlow

A local-first project management tool for developers. Track projects, write notes, log bugs, PRs, and issues. All of these run on your machine with no cloud dependency.

Built with React + TypeScript + Tailwind on the frontend, FastAPI + Python on the backend, and PostgreSQL as the database. Everything runs in Docker.

### Key Features

- **Zero Cloud Leak:** Your data never leaves your machine.
- **Dockerized Architecture:** Spin up the whole stack with a single command.
- **Interactive Docs:** Built-in Swagger UI sandbox to test backend endpoints.

---

## Requirements

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- That's it. Docker handles everything else.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/devflow.git
cd devflow
```

### 2. Set up your environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

Open `.env` and update the following:

```env
POSTGRES_PASSWORD=yourpassword                                      # choose any password
DATABASE_URL=postgresql://postgres:yourpassword@db:5432/devflow     # repeat the same password here
BACKEND_PORT=8000                                                   # internal/external api container port
VITE_API_URL=http://localhost:8000                                  # keep this unless you change BACKEND_PORT
```

> **Note:** If you change `BACKEND_PORT`, update `VITE_API_URL` to match. For example, if `BACKEND_PORT=9000` then `VITE_API_URL=http://localhost:9000`.

### 3. Start the app

```bash
docker compose up -d
```

This starts three containers:

- `frontend` — Vite dev server at [http://localhost:5173](http://localhost:5173)
- `backend` — FastAPI server at [http://localhost:8000](http://localhost:8000) _(Automatically initializes database tables on first boot)_
- `db` — PostgreSQL database

Visit [http://localhost:5173](http://localhost:5173) to use the app.

### 4. Stop the app

```bash
docker compose down
```

To stop and delete all data (wipes the database volume clean):

```bash
docker compose down -v
```

---

## Project Structure

```
devflow/
  frontend/          # React + TypeScript + Tailwind (Vite)
  backend/           # FastAPI + Python
  docker-compose.yml
  .env               # your local config (never committed)
  .env.example       # template for setup
  .gitignore         # list of all files to git ignore (.env included)
```

---

## API Docs

When the backend is running, FastAPI generates interactive API documentation automatically at:

```
http://localhost:8000/docs
```

You can test all routes directly from the browser here.

---

## Connecting a Database GUI (Optional)

You can connect [TablePlus](https://tableplus.com), pgAdmin, or any Postgres GUI to inspect your live data while Docker is running:

| Field    | Value                              |
| -------- | ---------------------------------- |
| Host     | 127.0.0.1                          |
| Port     | 5432                               |
| User     | postgres                           |
| Password | (your POSTGRES_PASSWORD from .env) |
| Database | devflow                            |

---

## Running Without Docker (Advanced)

_Local Requirements: Node.js v18+ and Python 3.10+_

If you want to run the layers locally on your machine native environment without Docker:

1. Install [PostgreSQL](https://www.postgresql.org/download/) locally and create an empty database named `devflow`

2. Create `backend/.env` with:

   ```env
   DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/devflow
   ```

3. Set up a virtual environment and install dependencies:

   ```bash
   cd backend
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

4. Run the backend:

   ```bash
   uvicorn main:app --reload
   ```

5. In a separate terminal window, run the frontend engine:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

---

## Tech Stack

| Layer    | Technology                            |
| -------- | ------------------------------------- |
| Frontend | React, TypeScript, Tailwind CSS, Vite |
| Backend  | Python, FastAPI, SQLAlchemy           |
| Database | PostgreSQL                            |
| DevOps   | Docker, Docker Compose                |

---

## Contributing

This project is open source and contributions are welcome. If you find a bug or want to suggest a feature, open an issue on GitHub.

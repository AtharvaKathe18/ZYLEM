# Zylem - Gamified Learning (Offline-first)

This repo contains a full scaffold: backend (Node/Express/Postgres), frontend (Vite+React PWA), docker-compose and CI.

## Stepwise setup (local, development)

1. Clone repo to your machine.
2. Install Docker and Docker Compose.
3. From repo root run:
   ```
   docker compose up --build
   ```
   This starts Postgres, backend (port 4000) and frontend (port 3000).
4. Apply DB migrations and seed:
   ```
   docker compose exec db psql -U postgres -d zylem -f /app/backend/src/db/migrations.sql
   docker compose exec db psql -U postgres -d zylem -f /app/backend/seed/seed.sql
   ```
   (If paths differ, run psql from your host using DATABASE_URL)
5. Visit:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:4000

## Production notes
- Configure DATABASE_URL and JWT_SECRET in environment variables.
- Use a managed Postgres for production, and serve the frontend via CDN or static hosting.
- Replace the simple auth with hashed passwords and proper validation.


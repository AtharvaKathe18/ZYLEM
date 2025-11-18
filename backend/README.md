# Backend - zylem-backend

Environment variables:
- DATABASE_URL (postgres connection string)
- JWT_SECRET

To run locally:
1. Ensure Postgres is running and DATABASE_URL is set.
2. Run migrations: psql $DATABASE_URL -f src/db/migrations.sql
3. Seed: psql $DATABASE_URL -f seed/seed.sql
4. npm install
5. npm start

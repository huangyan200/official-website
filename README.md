# official-website

EnergyQuant official website project (React + Rspack + NestJS).

## Requirements

- Node.js >= 22
- npm >= 10

## Install

```bash
npm install
```

## Quick Preview (Windows, frontend-only)

This mode builds and serves static assets without backend/database dependency.

```bash
npm run preview:client:win
```

Open: `http://127.0.0.1:4173`

## Full Local Dev (Windows)

Set required environment variables in `.env`:

- `FORCE_AUTHN_INNERAPI_DOMAIN=http://localhost:3000`
- `SUDA_DATABASE_URL=<your postgres connection string>`

Then run:

```bash
npm run dev:win
```

Open: `http://127.0.0.1:8080`

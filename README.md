# SRF Olympiad Platform

Premium Next.js platform for **Srinivasa Ramanujan Foundation (SRF)** Olympiads.

Stack: **Next.js (App Router) + TypeScript + Tailwind CSS + PostgreSQL + Prisma** with SEO-first architecture and gateway-verified payments.

This project uses a **local PostgreSQL install only**. Docker is not required.

## Features

- Black + gold institutional design system
- Public Olympiad catalogue (SRMO, CVRSO, SEO, AKO, NSRMO, SCO)
- Multi-step registration wizard with Zod validation
- Payment architecture with server-side webhook verification
- Student / School / Admin portal shells
- Hall ticket & certificate verification pages
- XML sitemap, robots.txt, JSON-LD, canonical metadata

## Prerequisites

1. Node.js 20+
2. PostgreSQL installed locally (Windows: [postgresql.org/download/windows](https://www.postgresql.org/download/windows/))
3. Remember the password you set for the `postgres` user during install

## Quick start (Windows)

### 1. Create the database

Open **pgAdmin** or **SQL Shell (psql)** and run:

```sql
CREATE DATABASE srf_olympiad;
```

### 2. Configure `.env`

```powershell
copy .env.example .env
```

Edit `.env` and set your real Postgres password:

```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/srf_olympiad?schema=public"
```

Examples:

```env
DATABASE_URL="postgresql://postgres:mypassword@localhost:5432/srf_olympiad?schema=public"
```

If your Postgres username is not `postgres`, replace that part too.

### 3. Install and push schema

```powershell
npm install
npx prisma generate
npx prisma db push
npm run db:seed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Troubleshooting

### `P1000: Authentication failed`

Postgres is running, but the username/password in `DATABASE_URL` is wrong.

- Use the password you created when installing PostgreSQL
- Default Windows user is usually `postgres`
- Do **not** use `srf` / `srf_secure_password` — those were old Docker-only credentials

### `P1001` / connection refused

PostgreSQL service is not running. Start it from Windows Services (`services.msc`) — look for **postgresql-x64-...** — or restart from pgAdmin.

### Database does not exist

```sql
CREATE DATABASE srf_olympiad;
```

## Environment

See `.env.example` for:

- `DATABASE_URL`
- `AUTH_SECRET`
- `PAYMENT_GATEWAY_KEY_ID` / `PAYMENT_GATEWAY_KEY_SECRET` / `PAYMENT_GATEWAY_WEBHOOK_SECRET`
- SMS / email / analytics keys

Merchant settlement (including organizational UPI) must be configured in the payment gateway dashboard. The frontend never marks payments as successful on its own.

## Content source

Olympiad dates, fees and organisational details are aligned with the existing site [srmoe.com](http://www.srmoe.com) and designed to move fully into PostgreSQL via the admin CMS.

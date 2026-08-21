# SRF Olympiad Platform

Premium Next.js platform for **Srinivasa Ramanujan Foundation (SRF)** Olympiads.

Stack: **Next.js (App Router) + TypeScript + Tailwind CSS + PostgreSQL + Prisma** with SEO-first architecture and gateway-verified payments.

## Features

- Black + gold institutional design system
- Public Olympiad catalogue (SRMO, CVRSO, SEO, AKO, NSRMO, SCO)
- Multi-step registration wizard with Zod validation
- Payment architecture with server-side webhook verification
- Student / School / Admin portal shells
- Hall ticket & certificate verification pages
- XML sitemap, robots.txt, JSON-LD, canonical metadata

## Quick start

```bash
cp .env.example .env
docker compose up -d
npm install
npx prisma generate
npx prisma db push
npm run db:seed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Database setup (important)

Default `DATABASE_URL` expects:

```text
postgresql://srf:srf_secure_password@localhost:5432/srf_olympiad?schema=public
```

**Option A — Docker (recommended)**

```bash
docker compose up -d
npx prisma db push
```

This creates user `srf`, password `srf_secure_password`, database `srf_olympiad`.

If port `5432` is already used by a local Postgres install, either stop that service or change the Docker port mapping (for example `"5433:5432"`) and update `DATABASE_URL` to use `localhost:5433`.

**Option B — Existing local Postgres (common on Windows)**

1. Open `.env` and set credentials that already work on your machine, for example:

```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/srf_olympiad?schema=public"
```

2. Create the database (psql, pgAdmin, or SQL):

```sql
CREATE DATABASE srf_olympiad;
```

3. Then run:

```bash
npx prisma db push
```

**Error `P1000: Authentication failed`** means Postgres is reachable, but the username/password in `DATABASE_URL` do not match your server. Fix the URL — do not keep using `srf` / `srf_secure_password` unless that role actually exists.

## Environment

See `.env.example` for:

- `DATABASE_URL`
- `AUTH_SECRET`
- `PAYMENT_GATEWAY_KEY_ID` / `PAYMENT_GATEWAY_KEY_SECRET` / `PAYMENT_GATEWAY_WEBHOOK_SECRET`
- SMS / email / analytics keys

Merchant settlement (including organizational UPI) must be configured in the payment gateway dashboard. The frontend never marks payments as successful on its own.

## Content source

Olympiad dates, fees and organisational details are aligned with the existing site [srmoe.com](http://www.srmoe.com) and designed to move fully into PostgreSQL via the admin CMS.

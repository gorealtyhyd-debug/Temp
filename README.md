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

## Environment

See `.env.example` for:

- `DATABASE_URL`
- `AUTH_SECRET`
- `PAYMENT_GATEWAY_KEY_ID` / `PAYMENT_GATEWAY_KEY_SECRET` / `PAYMENT_GATEWAY_WEBHOOK_SECRET`
- SMS / email / analytics keys

Merchant settlement (including organizational UPI) must be configured in the payment gateway dashboard. The frontend never marks payments as successful on its own.

## Content source

Olympiad dates, fees and organisational details are aligned with the existing site [srmoe.com](http://www.srmoe.com) and designed to move fully into PostgreSQL via the admin CMS.

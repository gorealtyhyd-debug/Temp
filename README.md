# SRF Olympiad Platform

Premium Next.js platform for **Srinivasa Ramanujan Foundation (SRF)** Olympiads.

Stack: **Next.js (App Router) + TypeScript + Tailwind CSS + SQL Server + Prisma** with SEO-first architecture and gateway-verified payments.

This project uses a **local Microsoft SQL Server install only**. Docker is not required.

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
2. SQL Server Developer or Express installed locally (Windows: [SQL Server downloads](https://www.microsoft.com/sql-server/sql-server-downloads))
3. SQL Server Management Studio (SSMS) or Azure Data Studio
4. A **SQL login** (for example `sa`) and its password — Prisma 7 does **not** support Windows Authentication

Enable **SQL Server and Windows Authentication mode** (mixed mode) in SQL Server properties, then restart the SQL Server service. Enable TCP/IP in SQL Server Configuration Manager if you connect on port `1433`.

## Quick start (Windows)

### 1. Create the database

In **SSMS**, connect to your instance and run:

```sql
CREATE DATABASE srf_olympiad;
```

### 2. Configure `.env`

```powershell
copy .env.example .env
```

Edit `.env` and set your real SQL login password:

```env
DATABASE_URL="sqlserver://localhost:1433;database=srf_olympiad;user=sa;password=YOUR_PASSWORD;encrypt=true;trustServerCertificate=true"
```

SQL Server Express (named instance) example:

```env
DATABASE_URL="sqlserver://localhost\\SQLEXPRESS;database=srf_olympiad;user=sa;password=YOUR_PASSWORD;encrypt=true;trustServerCertificate=true"
```

If the password contains special characters (`@`, `#`, `;`, etc.), wrap it in curly braces:

```env
DATABASE_URL="sqlserver://localhost:1433;database=srf_olympiad;user=sa;password={MyP@ssw0rd};encrypt=true;trustServerCertificate=true"
```

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

### `P1000` / login failed

SQL Server is running, but the username/password in `DATABASE_URL` is wrong, or mixed-mode authentication is off.

- Use a SQL login (`sa` or a user you created), not a Windows account
- Enable mixed mode: SSMS → server Properties → Security → **SQL Server and Windows Authentication mode**
- Restart the **SQL Server** service after changing authentication mode

### `P1001` / connection refused

SQL Server is not listening on the host/port in `DATABASE_URL`.

- Start **SQL Server** from Windows Services (`services.msc`)
- For Express, try `localhost\\SQLEXPRESS` instead of `localhost:1433`
- Enable TCP/IP in SQL Server Configuration Manager and confirm the TCP port (often `1433`)

### Database does not exist

```sql
CREATE DATABASE srf_olympiad;
```

### Certificate / TLS errors

Keep `encrypt=true;trustServerCertificate=true` for a local self-signed SQL Server certificate.

## Environment

See `.env.example` for:

- `DATABASE_URL`
- `AUTH_SECRET`
- `PAYMENT_GATEWAY_KEY_ID` / `PAYMENT_GATEWAY_KEY_SECRET` / `PAYMENT_GATEWAY_WEBHOOK_SECRET`
- SMS / email / analytics keys

Merchant settlement (including organizational UPI) must be configured in the payment gateway dashboard. The frontend never marks payments as successful on its own.

## Content source

Olympiad dates, fees and organisational details are aligned with the existing site [srmoe.com](http://www.srmoe.com) and designed to move fully into SQL Server via the admin CMS.

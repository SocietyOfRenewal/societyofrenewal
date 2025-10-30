# Environment Setup

Create a `.env.local` (or `.env`) in the project root with the following variables:

```env
APP_URL=http://localhost:3000
POSTGRES_URL=postgres://user:pass@host:port/db
EMAIL_PROVIDER_API_KEY=your-resend-or-postmark-key
RESEND_AUDIENCE_ID=optional
TURNSTILE_SECRET=optional
KV_REST_API_URL=optional
KV_REST_API_TOKEN=optional
```

## Variable Notes

- **APP_URL** — Used when generating confirmation links in emails.
- **POSTGRES_URL** (or `DATABASE_URL`) — Connection string for the Kysely client; copy from Vercel Postgres or your local instance.
- **EMAIL_PROVIDER_API_KEY** — Enables double opt-in emails through Resend/Postmark. In development, omit to log confirmation links instead.
- **RESEND_AUDIENCE_ID** — Optional audience syncing.
- **TURNSTILE_SECRET** — Activates Cloudflare Turnstile validation; skip for local prototyping.
- **KV_REST_API_URL / KV_REST_API_TOKEN** — Configure Vercel KV-backed rate limiting. Without these the limiter falls back to an in-memory store suitable only for local development.

## Install & Run

```bash
npm install
npm run db:migrate
npm run dev
```

Visit `http://localhost:3000` and submit the waitlist form to verify email logging behaviour.


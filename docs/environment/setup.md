# Environment Setup

Create a `.env.local` (or `.env`) in the project root with the following variables:

```env
APP_URL=http://localhost:3000
POSTGRES_URL=postgres://user:pass@host:port/db
EMAIL_PROVIDER_API_KEY=your-resend-or-postmark-key
EMAIL_FROM="Society of Renewal <waitlist@societyofrenewal.org>"
RESEND_AUDIENCE_ID=optional
TURNSTILE_SECRET=optional
KV_REST_API_URL=optional
KV_REST_API_TOKEN=optional
```

## Variable Notes

- **APP_URL** — Used when generating confirmation links in emails.
- **POSTGRES_URL** (or `DATABASE_URL`) — Connection string for the Kysely client; copy from Vercel Postgres or your local instance.
- **EMAIL_PROVIDER_API_KEY** — Enables double opt-in emails through Resend/Postmark. In development, omit to log confirmation links instead.
- **EMAIL_FROM** — Verified sender identity (e.g., `waitlist@societyofrenewal.org`). The domain must be added and validated in your email provider (Resend).
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

## Troubleshooting

- **`relation "waitlist" does not exist` / `42P01` errors:** migrations have not been applied to your target database. Re-run `npm run db:migrate` with `POSTGRES_URL` pointing to the correct instance.
- **`Connection terminated unexpectedly`:** verify the Postgres service is running and that credentials, networking rules, and SSL requirements match your `POSTGRES_URL`.

# Society of Renewal – Landing Experience

Production-ready Next.js application for the Society of Renewal waitlist. The page delivers a cinematic droplet intro, persistent ripple CTA, and a fully accessible form that feeds a Postgres-backed queue with double opt-in email confirmation.

## Features

- 🌓 Dark-first visuals with `prefers-reduced-motion` safeguards and Framer Motion micro-interactions
- 💧 Lottie droplet overlay that gracefully skips when motion is reduced
- 🌊 First-hover ripple CTA that persists its final glow and records analytics events
- 📬 Waitlist form (React Hook Form + Zod) with lottery/need paths, rate-limiting, and Turnstile verification hooks
- 🗄️ Kysely schema + migration targeting Vercel Postgres; Vercel KV-based IP throttling fallback to in-memory for local dev
- 📈 Vercel Analytics wired for page and custom event tracking
- 📮 Resend (or compatible provider) double opt-in emails with confirm endpoint
- 🔐 SEO + social primitives (`metadata`, `opengraph-image`, `robots`, `sitemap`)

## Getting Started

```bash
npm install
npm run dev
```

Visit [`http://localhost:3000`](http://localhost:3000) to see the site. Animations react to your OS motion preferences automatically.

### Environment Variables

Create a `.env.local` (or `.env`) file in the project root:

```bash
APP_URL=http://localhost:3000
DATABASE_URL=postgres://...
EMAIL_PROVIDER_API_KEY=your-resend-or-postmark-key
RESEND_AUDIENCE_ID=optional
TURNSTILE_SECRET=optional
KV_REST_API_URL=optional
KV_REST_API_TOKEN=optional
```

- `EMAIL_PROVIDER_API_KEY` accepts any provider supported by Resend’s SDK. Without it the app logs confirmation links to the console during local development.
- `TURNSTILE_SECRET` activates Cloudflare Turnstile verification; omit to skip validation in development.
- `KV_*` enables Vercel KV rate-limiting. Without it, requests fall back to an in-memory store.

#### How to obtain each value

- **Postgres (`POSTGRES_URL`)** – In Vercel, add the Postgres integration and copy the `POSTGRES_URL` from **Settings → Environment Variables**. Locally you can point to your own Postgres instance and place the URI here (or in `DATABASE_URL`).
- **Email (`EMAIL_PROVIDER_API_KEY` / `RESEND_API_KEY`)** – Create an API key in [Resend](https://resend.com/dashboard/api-keys) or Postmark. Paste the secret here; without it the app logs confirmation links instead of sending email.
- **Turnstile (`TURNSTILE_SECRET`)** – Visit [Cloudflare Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile), create a site for your domain, choose Managed or Invisible mode, and copy the secret key. Leaving it unset simply disables verification.
- **Vercel KV (`KV_REST_API_URL`, `KV_REST_API_TOKEN`)** – Vercel KV is a managed, Redis-compatible key-value store. Create one in the Vercel dashboard, then copy the REST URL and token. When absent, the rate limiter automatically falls back to an in-memory Map for development.

### Database Migrations

Run migrations **before hitting any API** with:

```bash
npm run db:migrate
```

The migrator uses `src/db/migrations` and targets the configured `DATABASE_URL`/`POSTGRES_URL`. Seeing errors such as `relation "waitlist" does not exist (42P01)` means migrations haven’t run against that database yet.

### Available Scripts

- `npm run dev` – start the Next.js dev server with Turbopack
- `npm run build` – production build
- `npm run start` – serve the production build
- `npm run lint` – run ESLint
- `npm run format` – validate Prettier + Tailwind class ordering
- `npm run format:write` – auto-format with Prettier
- `npm run db:migrate` – apply all pending Kysely migrations

### Editor Setup

- Install the recommended VS Code/Cursor extensions (ESLint, Prettier, Tailwind CSS) when prompted, or manually from `.vscode/extensions.json`.
- Format and lint on save are preconfigured via `.vscode/settings.json`, so Prettier handles ordering while ESLint fixes actionable rule violations.

## Architecture Notes

- **App Router** with TypeScript, Tailwind v4, shadcn/ui primitives, and Vercel Turbo mode
- **Animations:** Framer Motion (`DropletIntro`, `RippleButton`, form reveals) honoring reduced-motion
- **Data layer:** Kysely + `pg` Postgres dialect with typed schema, confirmation tokens hashed via Node crypto
- **API routes:**
  - `POST /api/waitlist` – stores/updates entries, rate-limits, sends confirmation email
  - `GET /api/waitlist/confirm` – activates pending entries
  - `GET /api/health` – liveness & database reachability report
- **Analytics:** `@vercel/analytics` with custom event hooks for ripple + form states
- **Deploy:** Optimized for Vercel. Remember to run `npm run db:migrate` as a build/deploy step and populate secrets in the Vercel dashboard.

## Documentation

- [`docs/spec/landing-build-spec.md`](docs/spec/landing-build-spec.md) – detailed implementation requirements
- [`docs/content/landing-page.md`](docs/content/landing-page.md) – finalized copy deck for the hero experience
- [`docs/content/README.md`](docs/content/README.md) – consolidated navigation and roadmap
- [Essentia Whitepaper repository](https://github.com/SocietyOfRenewal/essentia) – protocol research archive
- [Charter of Renewal (temporary location)](https://github.com/SocietyOfRenewal/societyofrenewal/blob/main/docs/charter/README.md)
- [Founding Book (temporary location)](https://github.com/SocietyOfRenewal/societyofrenewal/blob/main/docs/founding-book/README.md)

## QA Checklist

- Reduced-motion bypasses droplet and ripple yet keeps final glow
- Waitlist form validates, announces status, and submits via keyboard
- Duplicate emails return a friendly confirmation state
- Links open in new tabs with `rel="noopener"`
- OpenGraph image renders the dark hero card

If you extend the project (e.g., add LMS tooling, build member dashboards), keep the landing light—≤200 KB above the fold without the Lottie asset.

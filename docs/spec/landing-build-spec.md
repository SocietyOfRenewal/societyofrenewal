# Join the Society of Renewal — Landing Build Spec

This specification is written for the Society of Renewal product, design, and engineering teams. It captures the end-to-end requirements for a cinematic, production-ready waitlist landing page and the supporting platform work. All guidance is directed at human collaborators; the reference code snippets are illustrative and not intended as prescriptive scaffolding.

---

## 0. Overview

- **Deliverable:** One-page landing experience at `/` with a waitlist form, deep links to key documents, and a double opt-in confirmation flow backed by Postgres.
- **Team Roles:**
  - **Frontend Engineering:** UI, animation, accessibility.
  - **Platform Engineering:** API route, database schema, email integration, rate limiting.
  - **Design/Brand:** Visual direction, Lottie droplet asset, motion timings.
  - **Content:** Hero copy, supporting links, tone alignment with `docs/content/landing-page.md`.
- **Launch Readiness:** Ship when acceptance criteria in §13 pass, analytics events fire correctly, and environment variables populate in production.
- **Related Docs:** `docs/content/landing-page.md`, `docs/content/outline.md`, `docs/charter/*`, `CONTRIBUTING.md`.

---

## 1. Goals & Non-Goals

### 1.1 Goals

- Dark, cinematic hero with an on-load water droplet sequence that transitions into the page.
- Persistent ripple CTA that glows after the very first hover/focus and remains active thereafter.
- Waitlist form capturing email, invitation path (`lottery` or `need`), and optional context while maintaining full keyboard/screen-reader accessibility.
- Postgres-backed double opt-in with hashed email dedupe, per-IP rate limiting, and optional Cloudflare Turnstile verification.
- Above-the-fold payload ≤200 KB (excluding the Lottie JSON), with graceful handling of `prefers-reduced-motion`.
- Deep links to Charter, Founding Document, and Whitepaper v0.6.0 that open in new tabs.

### 1.2 Non-Goals

- No authenticated dashboards, payment flows, or personalized states.
- No CMS editing layer; copy lives in version-controlled Markdown.
- No additional segmentation beyond lottery/need paths and optional free-text rationale.

---

## 2. Audience, Accessibility, and Motion

- **Audience:** Visitors encountering the Society for the first time. Tone must feel aspirational yet grounded in rigorous systems thinking.
- **Accessibility:** WCAG 2.1 AA target. Provide visible focus indicators, logical tab order, labeled inputs, and ARIA announcements for success/error states.
- **Motion Sensitivity:** Detect `prefers-reduced-motion`. When true, skip the droplet animation and present the CTA ripple in its final glow state. Avoid parallax or continuous motion outside the initial experience.

---

## 3. Experience Flow

1. **Initial Load**
   - Display a fixed black overlay (`z-index: 50`) playing `/droplet.json` once.
   - Hold the final frame momentarily; fade overlay out over ~800 ms while main content fades in over ~600 ms.
   - Reduced-motion users bypass the overlay completely.

2. **Hero & Narrative**
   - Hero block centered at 720 px max width, pulling approved copy from `docs/content/landing-page.md`.
   - Inline links to Charter, Founding Document, and Whitepaper appear as muted, spaced anchors beneath the narrative.

3. **Waitlist Interaction**
   - CTA shows ripple effect on first hover/focus, glow persists for all subsequent interactions.
   - Form collects email, `path`, and optional `reason` (≤800 characters). Validation errors display inline with ARIA support.
   - Submit triggers `/api/waitlist`. Success → “Check your email” status. Error → alert with retry guidance.

4. **Footer**
   - Small ©, contact email (if desired), and optional social icons (muted). Not in scope to expand into full navigation.

5. **Failure & Edge States**
   - Duplicate email returns polite “already confirmed” messaging.
   - Rate limit breaches show a friendly cooldown notice (HTTP 429) without revealing thresholds.
   - Form gracefully handles network failures with accessible alerts.

---

## 4. Visual & Motion Requirements

- **Palette:** Black background (#000/#030711 gradients), glass panels using white/5 % alpha, text in zinc-100/300.
- **Typography:** Self-hosted Geist variable fonts (sans & mono). Base line-height 1.25. Tight heading tracking.
- **Layout:** Hero content padded with `px-6 py-20`; waitlist card uses rounded 2xl corners, translucent background, and subtle border.

### 4.1 Droplet Animation

- Container: `position: fixed; inset: 0; z-index: 50` with solid black background.
- Lottie asset plays once (`loop={false}`) and triggers an overlay fade-out when complete.
- Provide SVG/canvas fallback when JSON fails to load or exceeds 200 KB.
- Reduced motion: `showOverlay=false` on mount; skip animation entirely.

### 4.2 Ripple CTA

- Gradient: radial from center, `rgba(255,255,255,0.12)` at core fading to transparent around 60 % radius.
- On first hover/focus, animate scale from 0.6 → 1.6 and opacity 0 → 0.12 over ~0.9 s; freeze final frame.
- Standard hover: 1 px downward translation + gentle shadow; active press scales to 98 %.
- Persist glow for keyboard focus states as well as pointer interactions.

---

## 5. Content Requirements

- **Title:** `Join the Society of Renewal`
- **Paragraph 1:** Use exact copy from `docs/content/landing-page.md` (compassion as infrastructure).
- **Paragraph 2:** Approved vision paragraph with italicised “Universal Basic Income”.
- **Inline Links:** `[Read the Charter →] [Explore the Founding Document →] [Whitepaper v0.6.0 →]` — open in new tabs with `rel="noopener"`.
- **CTA Text:** `Join the Waitlist`
- **CTA Subtext (metadata/tooltips where useful):** `Lottery or need-based invitations. Always transparent.`

---

## 6. Component Inventory

| Component | Responsibility | Notes |
| --- | --- | --- |
| `DropletIntro` | Wraps page content, manages overlay animation and reduced-motion fallback. | Accepts `children`. Should guard `window` references for SSR. |
| `RippleButton` | Encapsulates CTA ripple behaviour and analytics emission. | Exposes optional `onClick`; first activation triggers `ripple_activated` event. |
| `WaitlistForm` | Handles form inputs via React Hook Form + Zod. | Provides inline validation, accessible alerts, and hidden submit button. |
| `LinkRow` | Renders muted inline links. | Ensure focus states and `rel="noopener"`. |
| `Toast`/`Alert` | Communicates submission status. | May use shadcn/ui alert component. |
| `app/api/waitlist` | Processes submissions, stores data, issues confirmation emails. | Includes rate limit, Turnstile verification, encrypted token issuance. |

---

## 7. Frontend Implementation Guidance

- **Framework:** Next.js App Router (Node 18+ runtime). Use client components only where interaction/motion is required.
- **Styling:** Tailwind CSS v4 with shadcn/ui primitives for input controls. Prettier handles class ordering.
- **Validation:** Zod schema with `react-hook-form` resolver. Enforce max 800 characters on `reason`.
- **Motion:** Framer Motion for ripple and droplet transitions. Guard against SSR issues by feature-detecting `window`.
- **Fonts:** Load Geist variable fonts via `/public/fonts` and `@font-face` with `font-display: swap`.

### 7.1 RippleButton Reference

```tsx
"use client";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function RippleButton({ onClick }: { onClick?: () => void }) {
  const controls = useAnimation();
  const [activated, setActivated] = useState(false);

  async function handleFirstHover() {
    if (activated) return;
    setActivated(true);
    await controls.start({
      scale: [0.6, 1.3, 1.6],
      opacity: [0, 0.18, 0.12],
      transition: { duration: 0.9, ease: "easeOut" },
    });
  }

  return (
    <div className="relative inline-block" onMouseEnter={handleFirstHover}>
      <motion.div
        aria-hidden
        initial={{ scale: 0.6, opacity: 0 }}
        animate={controls}
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 65%)",
        }}
      />
      <Button
        type="button"
        onClick={onClick}
        className="relative z-10 h-12 rounded-2xl border border-white/10 bg-white/10 px-6 text-base font-medium tracking-tight shadow-[0_10px_30px_rgba(255,255,255,0.05)] transition will-change-transform hover:translate-y-[1px] hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40 active:scale-[0.98]"
      >
        Join the Waitlist
      </Button>
    </div>
  );
}
```

### 7.2 DropletIntro Reference

```tsx
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import droplet from "@/public/droplet.json";

export function DropletIntro({ children }: { children: React.ReactNode }) {
  const [showOverlay, setShowOverlay] = useState(true);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const listener = (event: MediaQueryListEvent) => setPrefersReduced(event.matches);
    setPrefersReduced(mq.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (prefersReduced) setShowOverlay(false);
  }, [prefersReduced]);

  return (
    <div className="relative min-h-dvh bg-black text-zinc-100">
      {showOverlay ? (
        <>
          <div className="fixed inset-0 z-50 bg-black" aria-hidden />
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <Lottie
              animationData={droplet}
              loop={false}
              onComplete={() => setTimeout(() => setShowOverlay(false), 300)}
              style={{ width: 480, height: 480 }}
            />
          </div>
        </>
      ) : null}

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: showOverlay ? 0 : 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        {children}
      </motion.main>
    </div>
  );
}
```

### 7.3 WaitlistForm Reference

```tsx
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RippleButton } from "./RippleButton";

const schema = z.object({
  email: z.string().email(),
  path: z.enum(["lottery", "need"]).default("lottery"),
  reason: z.string().max(800).optional(),
});

type FormValues = z.infer<typeof schema>;

export function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setStatus("idle");
    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    setStatus(res.ok ? "ok" : "error");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@domain.com"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
      </div>

      <fieldset className="space-y-2">
        <legend className="text-sm text-zinc-300">
          How should we consider your invite?
        </legend>
        <div className="flex gap-3">
          <label className="inline-flex items-center gap-2">
            <input type="radio" value="lottery" defaultChecked {...register("path")} />
            <span>Lottery</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="radio" value="need" {...register("path")} />
            <span>Need-based</span>
          </label>
        </div>
      </fieldset>

      <div className="space-y-2">
        <Label htmlFor="reason">(Optional) Tell us why you should be next</Label>
        <Textarea
          id="reason"
          rows={4}
          placeholder="Share brief context…"
          {...register("reason")}
        />
      </div>

      <RippleButton />
      <button type="submit" className="sr-only">
        Submit
      </button>

      {status === "ok" && (
        <p role="status" className="text-emerald-400">
          Check your email to confirm. Welcome aboard. ✨
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
```

---

## 8. Page Composition Example

```tsx
// app/page.tsx
import Link from "next/link";
import { DropletIntro } from "@/components/DropletIntro";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function Page() {
  return (
    <DropletIntro>
      <section className="mx-auto max-w-3xl px-6 py-20 text-zinc-200">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Join the Society of Renewal
        </h1>
        <p className="mt-6 text-zinc-300">
          The next world begins with those who choose compassion as
          infrastructure. Each month, new citizens are invited—some by chance,
          some by need—to receive a universal basic income and help build a
          society without laws, only learning. Entry is open to all. The
          selection is fair, transparent, and human.
        </p>
        <p className="mt-4 text-zinc-300">
          The Society is an experiment in harmony—proving that education,
          empathy, and shared purpose can guide humanity better than enforcement
          ever did. Here, <em>Universal Basic Income</em> is not charity, but
          foundation: the space to grow, contribute, and become. Every citizen
          learns and teaches in turn, evolving the Charter of Renewal—a living
          document shaped by open collaboration and reason. Guidance replaces
          punishment. Understanding replaces control.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <WaitlistForm />
        </div>

        <div className="mt-8 flex flex-wrap gap-6 text-sm text-zinc-400">
          <Link
            href="https://renewal.wiki"
            target="_blank"
            rel="noopener"
            className="hover:text-zinc-200"
          >
            Read the Charter →
          </Link>
          <Link
            href="https://societyofrenewal.org/founding-document"
            target="_blank"
            rel="noopener"
            className="hover:text-zinc-200"
          >
            Explore the Founding Document →
          </Link>
          <Link
            href="https://github.com/CloneOfNone/essentia/blob/main/docs/whitepaper.md"
            target="_blank"
            rel="noopener"
            className="hover:text-zinc-200"
          >
            Whitepaper v0.6.0 →
          </Link>
        </div>
      </section>
    </DropletIntro>
  );
}
```

---

## 9. Backend & Data Requirements

### 9.1 API Endpoints

- `POST /api/waitlist`
  - **Request:** `{ "email": string, "path": "lottery" | "need", "reason?": string }`
  - **201 Response:** `{ "status": "pending", "message": "Check your email to confirm." }`
  - **409 Response:** `{ "status": "exists", "message": "You are already confirmed for early access." }`
  - **400/422 Response:** Validation errors with issues array.
  - **Flow:**
    1. Parse JSON and validate with a shared Zod schema.
    2. Normalize email and compute SHA-256 hash.
    3. When `TURNSTILE_SECRET` present, validate the Turnstile token.
    4. Enforce IP rate limit (default 5 requests/minute).
    5. Insert row with `status='pending'`, generated confirmation token, IP, and user agent.
    6. Dispatch double opt-in email with signed confirmation link (`/api/waitlist/confirm?token=...`).

- `GET /api/health`
  - Returns `{ status: "ok" }` when server and database are reachable. Intended for uptime checks.

### 9.2 Database Schema (`waitlist`)

| Column | Type | Notes |
| --- | --- | --- |
| `id` | `serial` | Primary key. |
| `email` | `varchar(320)` | Lowercased and trimmed email. |
| `email_hash` | `char(64)` | SHA-256 digest; unique index. |
| `path` | `varchar(16)` | `lottery` or `need`. |
| `reason` | `text` | Optional rationale. |
| `status` | `varchar(16)` | `pending` (default) or `confirmed`. |
| `token` | `varchar(128)` | Confirmation token. |
| `ip` | `varchar(64)` | Captured for rate limiting. |
| `user_agent` | `varchar(512)` | Raw header string. |
| `created_at` | `timestamptz` | Default `now()`. |
| `confirmed_at` | `timestamptz` | Set on confirmation. |

Indexes: `waitlist_email_hash_idx` (unique) and `waitlist_token_idx` (for confirmation lookup).

### 9.3 Migration Reference

```ts
import type { Kysely } from "kysely";
import { sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("waitlist")
    .addColumn("id", "serial", (col) => col.primaryKey())
    .addColumn("email", "varchar(320)", (col) => col.notNull())
    .addColumn("email_hash", "char(64)", (col) => col.notNull().unique())
    .addColumn("path", "varchar(16)", (col) => col.notNull())
    .addColumn("reason", "text")
    .addColumn("status", "varchar(16)", (col) => col.notNull().defaultTo("pending"))
    .addColumn("token", "varchar(128)", (col) => col.notNull())
    .addColumn("ip", "varchar(64)")
    .addColumn("user_agent", "varchar(512)")
    .addColumn("created_at", "timestamptz", (col) => col.notNull().defaultTo(sql`now()`))
    .addColumn("confirmed_at", "timestamptz")
    .execute();

  await db.schema
    .createIndex("waitlist_email_hash_idx")
    .on("waitlist")
    .column("email_hash")
    .execute();

  await db.schema
    .createIndex("waitlist_token_idx")
    .on("waitlist")
    .column("token")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("waitlist").execute();
}
```

---

## 10. Email Confirmation Flow

1. Generate a secure token (`crypto.randomBytes(32).toString("hex")`) per signup and store it with the row.
2. Confirmation link: `${APP_URL}/api/waitlist/confirm?token=<token>`.
3. Email template (Resend/Postmark):
   - Subject: “Confirm your Society of Renewal waitlist spot”.
   - Body: Welcome paragraph, explanation of lottery/need pathways, primary CTA button linking to confirmation URL, plain-text fallback.
4. Confirmation handler validates token, marks record `confirmed`, sets `confirmed_at`, and optionally logs to analytics.
5. Token expiry (e.g., 48 h) enforced server-side; expired tokens return 410 with guidance to reapply.
6. Development mode (no API key): log confirmation URL with `[waitlist:confirm]` prefix for manual testing.

---

## 11. Environment Variables

Create `.env.local` (or `.env`) with:

```
APP_URL=http://localhost:3000
POSTGRES_URL=postgres://user:pass@host:port/db
EMAIL_PROVIDER_API_KEY=your-resend-or-postmark-key
RESEND_AUDIENCE_ID=optional
TURNSTILE_SECRET=optional
KV_REST_API_URL=optional
KV_REST_API_TOKEN=optional
```

- `APP_URL`: Used for confirmation links.
- `POSTGRES_URL` (or `DATABASE_URL`): Database connection string.
- `EMAIL_PROVIDER_API_KEY`: Required for production email; optional locally (logs to console when missing).
- `RESEND_AUDIENCE_ID`: Optional audience syncing.
- `TURNSTILE_SECRET`: Enables Cloudflare Turnstile; omit to skip verification in dev.
- `KV_REST_API_*`: Configures Vercel KV for distributed rate limiting. Without these, the app falls back to an in-memory store (dev only).

---

## 12. Performance Targets

- Above-the-fold bundle ≤200 KB excluding Lottie asset.
- Lazy load the Lottie JSON; provide static fallback if load fails or motion is reduced.
- Preload Geist fonts using `link rel="preload"` and `font-display: swap` to avoid layout shift.
- Reserve space for hero, form, and link row to minimise cumulative layout shift.
- Monitor Core Web Vitals via Lighthouse and Vercel Analytics.

---

## 13. Acceptance Criteria / QA Checklist

- [ ] Droplet animation plays exactly once, fades smoothly, and is bypassed when `prefers-reduced-motion` is active.
- [ ] Ripple CTA permanently glows after first hover/focus and responds to keyboard interactions.
- [ ] Form validates and announces errors via ARIA; Enter key submission works from any field.
- [ ] Duplicate email attempts yield a friendly message without exposing stored data.
- [ ] Rate limiting enforces 5 requests/min/IP (configurable) and surfaces an accessible cooldown notice.
- [ ] Confirmation emails send (prod) or log (dev) with valid tokens and expiry handling.
- [ ] External links open in new tabs with `rel="noopener"` and retain accessible focus states.
- [ ] Analytics events fire for `page_view`, `ripple_activated`, `waitlist_submit_attempt`, `waitlist_submit_success`, `waitlist_submit_error`.
- [ ] Page passes automated (axe, Lighthouse) and manual keyboard accessibility checks.

---

## 14. Analytics & Telemetry

- Enable Vercel Analytics on the page.
- Emit custom events listed in §13 via the client (use `@vercel/analytics` or custom logging).
- Consider server-side logging for waitlist submissions (anonymised IP/hash) to audit rate limiting.

---

## 15. Future Enhancements (Optional)

- Add inline guidance for `reason` field length or suggested prompts.
- Introduce locale switching and i18n infrastructure.
- Provide an opt-in checkbox for Charter update notifications.
- Surface aggregate waitlist stats (e.g., lottery vs need mix) internally via dashboard.

---

## 16. Deployment Checklist

- Deploy to Vercel (Node 18+).
- Run `npm run db:migrate` during build/deploy to ensure schema alignment.
- Configure environment variables (`APP_URL`, database, email keys, Turnstile, KV) for production and preview environments.
- Register Cloudflare Turnstile for production domain when enabling verification.
- Set up uptime monitoring on `/api/health`.

**Definition of Done:** Animations meet spec, the waitlist API processes double opt-in correctly, analytics events fire, accessibility/performance targets are met, and production deployment verifies all environment variables.

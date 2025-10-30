import Link from "next/link";

import { env } from "@/lib/env";

type ConfirmResponse = {
  status?: "confirmed" | "already_confirmed";
  message?: string;
};

type ConfirmState =
  | {
      kind: "missing" | "invalid" | "error";
      title: string;
      body: string;
    }
  | {
      kind: "confirmed" | "already";
      title: string;
      body: string;
    };

async function resolveConfirmation(
  token: string | undefined,
): Promise<ConfirmState> {
  if (!token) {
    return {
      kind: "missing",
      title: "Confirmation link incomplete",
      body: "Follow the link from your email to confirm your invitation.",
    } satisfies ConfirmState;
  }

  const confirmationUrl = new URL("/api/waitlist/confirm", env.APP_URL);
  confirmationUrl.searchParams.set("token", token);

  try {
    const response = await fetch(confirmationUrl.toString(), {
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
    });
    const data = (await response.json().catch(() => ({}))) as ConfirmResponse;

    if (response.ok && data.status === "confirmed") {
      return {
        kind: "confirmed",
        title: "You're in",
        body: "Thank you for confirming. We'll reach out when the next invitations are released.",
      } satisfies ConfirmState;
    }

    if (response.ok && data.status === "already_confirmed") {
      return {
        kind: "already",
        title: "Already confirmed",
        body: "You're all set. Watch your inbox for Society of Renewal updates.",
      } satisfies ConfirmState;
    }

    if (response.status === 404) {
      return {
        kind: "invalid",
        title: "Link expired or invalid",
        body: "Request a new confirmation email from the waitlist form and try again.",
      } satisfies ConfirmState;
    }

    return {
      kind: "error",
      title: "We couldn't confirm your spot",
      body: data.message ?? "Please try again in a moment.",
    } satisfies ConfirmState;
  } catch (error) {
    console.error("[waitlist-confirm-page] error", error);
    return {
      kind: "error",
      title: "We couldn't reach the waitlist",
      body: "Check your connection and try again a little later.",
    } satisfies ConfirmState;
  }
}

export default async function ConfirmPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;
  const state = await resolveConfirmation(token);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#030711] px-6 py-24 text-zinc-100">
      <div className="w-full max-w-xl space-y-8 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_20px_60px_rgba(15,23,42,0.45)]">
        <header className="space-y-3">
          <p className="text-sm tracking-[0.35em] text-slate-400 uppercase">
            Society of Renewal
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-100">
            {state.title}
          </h1>
        </header>
        <p className="text-base leading-relaxed text-slate-300">{state.body}</p>

        <div className="flex flex-wrap gap-3 text-sm text-slate-400">
          <Link
            href="/"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-slate-100 transition hover:bg-white/10"
          >
            Return to the waitlist
          </Link>
          <Link
            href="mailto:care@societyofrenewal.org"
            className="rounded-full border border-transparent px-4 py-2 font-medium text-slate-300 transition hover:text-slate-100"
          >
            Need help? Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}

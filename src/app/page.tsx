"use client";

import { motion, useReducedMotion } from "framer-motion";

import DropletIntro from "@/components/DropletIntro";
import LinkRow from "@/components/LinkRow";
import WaitlistForm from "@/components/WaitlistForm";

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const staggerChildren = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export default function Page() {
  const shouldReduceMotion = useReducedMotion();

  const howItWorks = [
    {
      title: "Identity you own",
      description:
        "You receive a portable digital ID that no state or corporation can silently revoke.",
    },
    {
      title: "Votes you can verify",
      description:
        "Decisions use ranked-choice and revocable delegation; ballots stay private and outcomes are provable.",
    },
    {
      title: "UBI as infrastructure",
      description:
        "A Freedom Floor so food, shelter, and connection stay stable—because desperation fuels harm.",
    },
    {
      title: "Education over punishment",
      description:
        "We intervene with guidance and repair first. Minimum necessary force only to stop immediate harm.",
    },
    {
      title: "Borderless membership",
      description:
        "Join from any country. Keep your other affiliations. We spread by service, not coercion.",
    },
  ];

  const whatYouReceive = [
    "A self-sovereign civic identity—your portable key to everything below.",
    "A vote and a voice in a transparent, auditable process.",
    "Access to Universal Prevention Education—free, practical learning that reduces harm before it happens.",
    "A Community Safety Network that de-escalates first and repairs what breaks.",
    "As rollouts expand, a Universal Basic Income (UBI) delivered reliably—our Freedom Floor.",
  ];

  const miniFaq = [
    {
      question: "Is this a political movement?",
      answer:
        "Yes—post-national and borderless. It’s governance you opt into, grounded in evidence and compassion.",
    },
    {
      question: "Do I have to move?",
      answer: "No. Join from anywhere.",
    },
    {
      question: "Do I have to pay?",
      answer:
        "No fees to be recognized or to vote. Contributions are optional and rewarded when they produce verifiable public good.",
    },
    {
      question: "What if I don’t get UBI right away?",
      answer:
        "You still get your civic identity, voice, and access to learning. UBI waves expand as capacity grows.",
    },
    {
      question: "What keeps this honest?",
      answer:
        "Public rules, auditable funding, private ballots with verifiable outcomes, and a living Charter you can amend.",
    },
  ];

  return (
    <DropletIntro>
      <main className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(94,234,212,0.12)_0%,_rgba(2,6,23,0)_60%)]"
        />
        <div className="absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-black via-black/70 to-transparent" />

        <section className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-16 px-6 pt-32 pb-24 sm:pt-40">
          <motion.div
            variants={staggerChildren}
            initial={shouldReduceMotion ? undefined : "hidden"}
            animate={shouldReduceMotion ? undefined : "show"}
            className="space-y-8"
          >
            <motion.div variants={heroVariants} className="space-y-6">
              <p className="text-sm tracking-[0.4em] text-slate-400 uppercase">
                Society of Renewal
              </p>
              <h1 className="text-4xl leading-tight font-semibold text-slate-50 sm:text-5xl">
                The Society of Renewal
              </h1>
            </motion.div>

            <motion.div
              variants={heroVariants}
              className="space-y-5 text-lg leading-relaxed text-slate-300"
            >
              <p>
                A global, borderless civic society: education over punishment,
                dignity over domination, and a guaranteed Freedom Floor for all.
                Short version: We’re building a new kind of government you can
                join from anywhere. It runs on education, not fear; on
                verifiable votes, not backroom deals; and on a universal basic
                income (UBI) that treats material security as public
                infrastructure. Membership is open to everyone, regardless of
                nationality.
              </p>
            </motion.div>

            <motion.div variants={heroVariants}>
              <LinkRow />
            </motion.div>
          </motion.div>

          <motion.div
            variants={heroVariants}
            initial={shouldReduceMotion ? undefined : "hidden"}
            animate={shouldReduceMotion ? undefined : "show"}
            transition={{ delay: shouldReduceMotion ? 0 : 0.6, duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 shadow-[0_32px_120px_rgba(2,6,23,0.55)] backdrop-blur-2xl"
          >
            <div className="border-b border-white/10 px-6 pt-6 pb-6 sm:px-8">
              <h2 className="text-xl font-semibold text-slate-100">
                Be first in line
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Confirmed members receive a double opt-in email before
                activation.
              </p>
            </div>
            <div className="px-6 py-8 sm:px-8">
              <WaitlistForm />
            </div>
          </motion.div>

          <div className="space-y-12 text-slate-300">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-100">
                What this is
              </h2>
              <p className="text-base leading-relaxed text-slate-300">
                The Society of Renewal is a global, opt-in civic society—a
                “borderless government.” It doesn’t replace your passport or
                require you to renounce anything. It gives you a portable civic
                identity, a voice in decisions, access to open education, and
                (as pilots expand) a guaranteed baseline income so survival
                isn’t a daily emergency. We coordinate using open-source tools
                and a public civic ledger. Our government is a living Charter,
                updated by members as evidence improves. Think of it as
                democracy that learns.
              </p>
            </section>

            <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-2xl font-semibold text-slate-100">
                How it works (in one breath)
              </h2>
              <ul className="space-y-3 text-base leading-relaxed text-slate-300">
                {howItWorks.map((item) => (
                  <li key={item.title}>
                    <span className="font-semibold text-slate-100">
                      {item.title}:
                    </span>{" "}
                    {item.description}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-100">
                Who can join
              </h2>
              <p className="text-base leading-relaxed text-slate-300">
                Anyone. Membership is open worldwide. You keep your current
                citizenships, jobs, and communities. Our society is in addition
                to the countries you live in, not against them.
              </p>
            </section>

            <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-2xl font-semibold text-slate-100">
                What you receive as a citizen
              </h2>
              <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-slate-300">
                {whatYouReceive.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-100">
                “Lottery? Huh?”
              </h2>
              <p className="text-base leading-relaxed text-slate-300">
                We’re scaling benefits in waves. When more people want to enroll
                than the current pilot can serve, we use two fair on-ramps:
              </p>
              <ol className="list-decimal space-y-2 pl-6 text-base leading-relaxed text-slate-300">
                <li>A Need Path for urgent cases, and</li>
                <li>
                  a provably random Lottery Path so access isn’t about
                  connections or clout.
                </li>
              </ol>
              <p className="text-base leading-relaxed text-slate-300">
                Membership itself is open; the lottery only governs who gets
                activated for benefits in the next wave when capacity is
                limited.
              </p>
            </section>

            <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-2xl font-semibold text-slate-100">
                Where the money comes from
              </h2>
              <p className="text-base leading-relaxed text-slate-300">
                Not from your paycheck and not from taxes. The Society runs on
                Essentia, our public civic ledger and value rails:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-slate-300">
                <li>
                  <strong className="text-slate-100">Essent (ℰ):</strong> a
                  normal, transferable token minted for validated contributions
                  to the commons (open code, research, teaching, care work,
                  verified impact).
                </li>
                <li>
                  <strong className="text-slate-100">
                    Essential Units (𝒰):
                  </strong>{" "}
                  a non-transferable, expiring basic-needs instrument used to
                  deliver UBI and keep purchasing power stable for essentials.
                </li>
              </ul>
              <p className="text-base leading-relaxed text-slate-300">
                In short: we mint new funds for real work that helps people, and
                we deliver the Freedom Floor using a purpose-built instrument
                that tracks the real cost of essentials. Budgets and rules are
                published; flows are traceable. You don’t “contribute your
                money” to join. You contribute ideas, effort, and care if you
                want to earn Essent—and you receive UBI as a right when your
                wave is active.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-100">
                Is this legal?
              </h2>
              <p className="text-base leading-relaxed text-slate-300">
                Yes. We’re a voluntary civic society that coexists with local
                law. We don’t tell members to break laws. We document conflicts
                with dignity, seek lawful accommodations, and work in the open
                to change harmful policies through service, persuasion, and
                proof.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-100">
                Safety without domination
              </h2>
              <p className="text-base leading-relaxed text-slate-300">
                We prevent most harm with education and material stability. When
                someone is in crisis, we use de-escalation, temporary protective
                separation (only if needed, time-limited), and restorative paths
                that make the harmed whole and help the person who caused harm
                learn and return. Force is a last resort, only to stop immediate
                danger, and it sunsets fast.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-100">
                Why do this now?
              </h2>
              <p className="text-base leading-relaxed text-slate-300">
                Because the old mix of scarcity, punishment, and secrecy isn’t
                working. We’re choosing dignity as the hard boundary, education
                as the default response, verification over vibes, and material
                security as cognitive infrastructure. Civilization should feel
                like care that scales.
              </p>
            </section>

            <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-2xl font-semibold text-slate-100">
                How to get involved today
              </h2>
              <ol className="list-decimal space-y-2 pl-6 text-base leading-relaxed text-slate-300">
                <li>
                  Join the waitlist with your email (we’ll guide you through
                  creating your civic ID).
                </li>
                <li>
                  Read the Charter (human-readable, with a public edit history).
                </li>
                <li>
                  Contribute to pilots: teaching, software, research,
                  translation, mediation, or local mutual-aid nodes.
                </li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-100">
                Straight answers (mini-FAQ)
              </h2>
              <div className="space-y-4">
                {miniFaq.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <h3 className="text-base font-semibold text-slate-100">
                      {item.question}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-3 rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-6 text-slate-100">
              <h2 className="text-2xl font-semibold">The promise</h2>
              <p className="text-base leading-relaxed text-slate-100/90">
                Votes you can verify. Budgets you can trace. Learning you can
                access. Safety that calms, not conquers. A Freedom Floor you can
                count on. This is a government built from dignity outward—and
                you can help shape it.
              </p>
            </section>
          </div>

          <footer className="pb-6 text-xs text-slate-500">
            <p>
              Crafted for those who believe empathy can be governance. We honor
              privacy, accessibility, and your pace—animations adapt to
              reduced-motion preferences.
            </p>
          </footer>
        </section>
      </main>
    </DropletIntro>
  );
}

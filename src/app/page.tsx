'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

import DropletIntro from '@/components/DropletIntro';
import LinkRow from '@/components/LinkRow';
import WaitlistForm from '@/components/WaitlistForm';

import type { ReactNode } from 'react';

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

type MiniFaqItem = {
  question: string;
  answer: string | ReactNode;
};

export default function Page() {
  const shouldReduceMotion = useReducedMotion();

  const miniFaq: MiniFaqItem[] = [
    {
      question: 'Is this a political movement?',
      answer:
        'Yes—post-national and borderless. It’s governance you opt into, grounded in evidence and compassion.',
    },
    {
      question: 'Do I have to move?',
      answer: 'No. Join from anywhere.',
    },
    {
      question: 'Do I have to pay?',
      answer:
        'No fees to be recognized or to vote. Contributions are optional and rewarded when they produce verifiable public good.',
    },
    {
      question: 'What if I don’t get UBI right away?',
      answer:
        'You still get your civic identity, voice, and access to learning. UBI waves expand as capacity grows.',
    },
    {
      question: 'What keeps this honest?',
      answer:
        'Public rules, auditable funding, private ballots with verifiable outcomes, and a living Charter you can amend.',
    },
    {
      question: '“You can’t just create money out of thin air!”',
      answer: (
        <span>
          Short answer: all money is created. The real questions are who creates
          it, how, and with what guardrails. Read the{' '}
          <Link
            href="/faq#money-creation"
            className="text-slate-200 underline decoration-slate-500 underline-offset-4 hover:text-slate-100"
          >
            money creation explainer
          </Link>{' '}
          for the full breakdown.
        </span>
      ),
    },
  ];

  return (
    <DropletIntro>
      <main className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(94,234,212,0.12)_0%,_rgba(2,6,23,0)_100vh)]"
        />
        <div className="absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-black via-black/70 to-transparent" />

        <section className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-16 px-6 pt-32 pb-24 sm:pt-40">
          <motion.div
            variants={staggerChildren}
            initial={shouldReduceMotion ? undefined : 'hidden'}
            animate={shouldReduceMotion ? undefined : 'show'}
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
                The next world begins with those who choose compassion as
                infrastructure. Each month, new citizens are invited—some by
                chance, some by need—to receive a universal basic income and
                help build a society without laws, only learning. Entry is open
                to all. The selection is fair, transparent, and human.
              </p>
              <p>
                The Society is an experiment in harmony—proving that education,
                empathy, and shared purpose can guide humanity better than
                enforcement ever did. Here, <em>Universal Basic Income</em> is
                not charity, but foundation: the space to grow, contribute, and
                become. Every citizen learns and teaches in turn, evolving the
                Charter of Renewal—a living document shaped by open
                collaboration and reason. Guidance replaces punishment.
                Understanding replaces control. Our new currency, Essent (ℰ),
                keeps that promise verifiable.
              </p>
              <p className="text-sm text-slate-400">
                Explore the{' '}
                <Link
                  href="/faq"
                  className="text-slate-200 underline decoration-slate-500 underline-offset-4 hover:text-slate-100"
                >
                  detailed FAQ
                </Link>{' '}
                to see how membership, the Freedom Floor, and Essent work
                together.
              </p>
            </motion.div>

            <motion.div variants={heroVariants}>
              <LinkRow />
            </motion.div>
          </motion.div>

          <motion.div
            variants={heroVariants}
            initial={shouldReduceMotion ? undefined : 'hidden'}
            animate={shouldReduceMotion ? undefined : 'show'}
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
                  </strong>{' '}
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

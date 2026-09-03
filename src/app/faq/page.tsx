import Link from 'next/link';

import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Project FAQ — Society of Renewal',
  description:
    'A clear account of what the Society of Renewal is exploring, what exists today, and how people can take part.',
  alternates: { canonical: '/faq' },
};

interface FaqItem {
  question: string;
  answer: Array<ReactNode | ReactNode[]>;
  id?: string;
}

const faqs: FaqItem[] = [
  {
    question: 'What is the Society of Renewal?',
    answer: [
      'The Society of Renewal is an early-stage civic project exploring how care, learning, material security, and democratic participation could be supported by durable public institutions. It is not currently a government, public authority, benefit program, or operating monetary system.',
      <span key="artifacts">
        The work is public so people can understand it, question it, and help
        improve it. The starting points are the{' '}
        <Link href="/manifesto" className="underline hover:text-white">
          manifesto
        </Link>
        , the draft Charter, the Academy beta, and the Essentia prototype.
      </span>,
    ],
  },
  {
    question: 'What exists today?',
    answer: [
      [
        'This public website and an email-confirmed waitlist.',
        'A complete manifesto and a draft, unratified Charter of Renewal.',
        'A live Academy beta with guardian authentication and learner-profile foundations.',
        'Essentia v0.1.0: runnable research software for a narrow civic-ledger prototype.',
        'Essentia whitepaper v0.7.0: a proposed protocol design, not a deployed mainnet.',
      ],
    ],
  },
  {
    question: 'What does the manifesto mean by “the machine”?',
    answer: [
      'The manifesto uses “the machine” as shorthand for a pattern, not a secret organization or a single villain. Some suffering is inherent to life; its concern is the suffering that human systems create, deepen, or leave unanswered when people could reduce it together. It does not argue that institutions are inherently evil or that any means are justified in changing them. It asks how we can respond through compassion, understanding, personal responsibility, democratic cooperation, and the patient work of building better choices.',
      <span key="summary">
        <strong className="font-semibold text-white">In short:</strong> The
        “machine” is the web of economic, political, bureaucratic, and cultural
        systems that turn human beings into workers, consumers, patients,
        tenants, statistics, and problems to be managed. It survives by
        isolating us, convincing us that structural failures are personal
        failures, exhausting us, and making cooperation feel impossible. Raging
        against it does not mean blind anger or destroying institutions. It
        means preserving our inner freedom, refusing cruelty and dehumanization,
        building solidarity, and organizing around shared human needs. Personal
        responsibility still matters, but real freedom requires real choices.
        Change happens when isolated people compare notes, protect one another,
        organize, withdraw cooperation from harmful systems, and build better
        ones. The machine does not fear our anger nearly as much as it fears our
        coordination.
      </span>,
    ],
  },
  {
    question: 'Is this a political movement or a government?',
    answer: [
      'Its aims are political in the broad sense: it concerns power, institutions, rights, public goods, and how people make binding decisions together. It is not affiliated with a political party.',
      'The Society is not presently a government and has no legal authority. “Civic society” describes the project’s intended direction, not a current jurisdiction or recognized status.',
    ],
  },
  {
    question: 'Can I join? Do I have to relocate or give up citizenship?',
    answer: [
      'You can join the waitlist from anywhere. That does not yet create formal Society membership, a civic identity, voting rights, or access to benefits.',
      'Nothing in the proposal asks people to give up an existing citizenship or violate local law. Any future participation is intended to be voluntary and additive.',
    ],
  },
  {
    question: 'Is the Freedom Floor or UBI available now?',
    answer: [
      'No. There is no active Society of Renewal UBI program and no announced date for one.',
      'The Freedom Floor is a policy proposal for reliable access to essentials. The Charter and Essentia whitepaper describe possible mechanisms, but funding, legal structure, identity safeguards, vendors, pilot regions, and public rules would all need to exist before a real pilot could begin.',
    ],
  },
  {
    question: 'What are Essent and Essential Units?',
    answer: [
      'They are proposed instruments in the Essentia design:',
      [
        'Essent (ℰ) is designed as a transferable unit for exchange, settlement, grants, and contribution rewards.',
        'Essential Units (𝒰) are designed as non-transferable, expiring units restricted to essentials and redeemable by approved vendors under public rules.',
      ],
      'Neither instrument is currently issued to the public. There are no Society on-ramps, exchanges, vendor network, reserves, or live clearing rates today.',
    ],
  },
  {
    question: 'How complete is Essentia?',
    answer: [
      <span key="prototype">
        The{' '}
        <Link
          href="https://github.com/SocietyOfRenewal/essentia"
          target="_blank"
          rel="noopener"
          className="underline hover:text-white"
        >
          v0.1.0 repository
          <span className="sr-only"> (opens in a new tab)</span>
        </Link>{' '}
        contains a working Rust prototype with signed accounts, replicated
        nodes, budget-capped contribution claims, two prototype asset types, and
        public-signal governance.
      </span>,
      'Its documented limits matter: it uses Ed25519 rather than the proposed post-quantum signature path, rotating proposers rather than HotStuff finality, JSON snapshots rather than production storage, and public signals rather than private binding ballots.',
    ],
  },
  {
    question: 'How would decisions be made?',
    answer: [
      'The proposed design calls for one-person-one-voice governance, private binding ballots with public verification, optional revocable delegation, transparent budgets, and higher thresholds for higher-impact changes.',
      'That system is not implemented. Essentia v0.1.0 supports public-signal proposals and votes only; it does not implement private binding elections.',
    ],
  },
  {
    question: 'How do the Need and Lottery paths work?',
    answer: [
      'The draft Charter proposes a Need Path for urgent hardship and a provably random Lottery Path when future pilot capacity is limited.',
      'No draw is currently running, no randomness procedure has been published for production use, and joining the waitlist is not an application for a current benefit. The form records which future path is relevant to you.',
    ],
  },
  {
    question: 'What is the Academy?',
    answer: [
      <span key="academy">
        The{' '}
        <Link
          href="https://academy.societyofrenewal.org/"
          target="_blank"
          rel="noopener"
          className="underline hover:text-white"
        >
          Society of Renewal Academy beta
          <span className="sr-only"> (opens in a new tab)</span>
        </Link>{' '}
        is a separate Next.js application for guardian-led learning journeys.
      </span>,
      'Guardian sign-up, passkey authentication, and learner-profile foundations exist. Device pairing, the desktop launcher flow, world distribution, progress dashboards, billing, and admin tooling remain on the product roadmap or are incomplete.',
    ],
  },
  {
    question: 'What is the privacy position?',
    answer: [
      'The principle is data minimization: personal privacy should increase with vulnerability, while institutional transparency should increase with power.',
      'The Academy specification limits learner data to a nickname, age or grade band, and settings. The Essentia design keeps raw biometrics, government-ID images, home addresses, health data, and recovery secrets off-chain. These are design constraints; they still require implementation review and independent security testing.',
    ],
  },
  {
    question: 'How does safety work without defaulting to punishment?',
    answer: [
      'The Charter prioritizes prevention, material stability, education, de-escalation, restorative repair, and minimum necessary force. It does not claim that every active threat can be handled without intervention.',
      'No Society-operated safety network exists today. In an emergency, use the legitimate services and resources available where you live.',
    ],
  },
  {
    id: 'money-creation',
    question:
      'How is money created today, and what does that mean for Essentia?',
    answer: [
      'The narrow factual point is that modern money is created under rules: commercial-bank lending creates deposits, while central-bank operations create or transform central-bank liabilities. Creation is constrained by regulation, capital, monetary policy, demand, and trust; it does not create real resources by itself.',
      <span key="boe">
        The{' '}
        <Link
          href="https://www.bankofengland.co.uk/quarterly-bulletin/2014/q1/money-creation-in-the-modern-economy"
          target="_blank"
          rel="noopener"
          className="underline hover:text-white"
        >
          Bank of England explains commercial-bank money creation
          <span className="sr-only"> (opens in a new tab)</span>
        </Link>
        . The{' '}
        <Link
          href="https://www.federalreserve.gov/econres/notes/feds-notes/understanding-bank-deposit-growth-during-the-covid-19-pandemic-20220603.html"
          target="_blank"
          rel="noopener"
          className="underline hover:text-white"
        >
          Federal Reserve describes deposit creation by lending and asset
          purchases
          <span className="sr-only"> (opens in a new tab)</span>
        </Link>
        .
      </span>,
      'That observation does not prove that Essentia’s monetary proposal will work. A credible pilot would still need legal analysis, public parameters, fraud controls, reserve and redemption design, economic modeling, audits, and evidence from real use.',
    ],
  },
  {
    question: 'Is Essent money or legal tender?',
    answer: [
      'Not today. No public Essent currency exists, and the Society cannot declare legal tender. “Legal tender” is a status defined by applicable law, not by a project calling an instrument money.',
      'The whitepaper proposes Essent as a transferable medium of exchange within a future network. Whether it could legally operate, be accepted, convert to national currency, or create tax obligations would depend on jurisdiction, implementation, and regulated partners.',
    ],
  },
  {
    question: 'How can I contribute right now?',
    answer: [
      [
        'Read the manifesto and share what resonates, what is unclear, and what needs more care.',
        'Review the draft Charter and Essentia whitepaper in GitHub.',
        'Test the public Academy beta without entering information you do not want stored.',
        'Join the waitlist for project updates and future pilot invitations.',
      ],
      'There is no public contribution-reward program, vendor-onboarding program, or formal governance process yet.',
    ],
  },
  {
    question: 'What is the timeline?',
    answer: [
      'There is no responsible date to promise yet. The next meaningful milestones are smaller: keep the public documents internally consistent, complete the Academy product path, publish independent verification and stress tests for Essentia, and design any pilot through legal, security, economic, and community review.',
      'Progress will be shared through inspectable artifacts, tested systems, lessons learned, and honest revision.',
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-[#030711] text-slate-100">
      <SiteHeader />
      <main>
        <header className="border-b border-white/10">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="font-mono text-xs tracking-[0.24em] text-cyan-200/75 uppercase">
              Project FAQ · September 2026
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl leading-[0.98] font-semibold tracking-[-0.055em] text-balance text-white sm:text-7xl">
              What exists today, what we are exploring, and how you can take
              part.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300">
              Clear distinctions between public ideas, working software, and
              live civic services help people understand the project, question
              its assumptions, and participate without having to guess.
            </p>
          </div>
        </header>

        <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-20">
          <div className="border-t border-white/15">
            {faqs.map((faq, index) => (
              <article
                id={faq.id}
                key={faq.question}
                className="grid scroll-mt-8 gap-5 border-b border-white/15 py-9 md:grid-cols-[3rem_0.8fr_1.2fr] md:gap-8"
              >
                <span className="font-mono text-xs text-cyan-200/60">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="text-xl leading-snug font-semibold text-white">
                  {faq.question}
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-slate-300">
                  {faq.answer.map((block, blockIndex) =>
                    Array.isArray(block) ? (
                      <ul
                        key={`${faq.question}-list-${blockIndex}`}
                        className="list-disc space-y-2 pl-5 marker:text-cyan-200/60"
                      >
                        {block.map((item, itemIndex) => (
                          <li
                            key={`${faq.question}-${blockIndex}-${itemIndex}`}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p key={`${faq.question}-paragraph-${blockIndex}`}>
                        {block}
                      </p>
                    ),
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-6 border border-cyan-200/20 bg-cyan-950/25 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-cyan-200/70 uppercase">
                Begin with shared purpose
              </p>
              <p className="mt-2 text-xl font-semibold text-white">
                Read or listen to the manifesto, then explore the design.
              </p>
            </div>
            <Link
              href="/manifesto#listen"
              className="inline-flex min-h-11 items-center justify-center bg-cyan-100 px-5 text-sm font-semibold text-slate-950 hover:bg-white"
            >
              Read or listen&nbsp;→
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

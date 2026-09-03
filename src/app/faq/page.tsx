import Link from 'next/link';

import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Project FAQ | Society of Renewal',
  description:
    'Principles, current work, future design, and practical ways to take part in the Society of Renewal.',
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
      'The Society of Renewal is an open civic project exploring how to build institutions around dignity, interdependence, education, material security, and democratic participation. It begins from a testable claim: sustained security, knowledge, and compassionate guidance can reduce the need for coercion by addressing harm closer to its roots.',
      <span key="artifacts">
        Today it is a public body of work rather than a government or operating
        benefit system. Its starting points are the{' '}
        <Link href="/manifesto" className="underline hover:text-white">
          manifesto
        </Link>
        , the draft Charter, the Founding Book, the Academy beta, and the
        Essentia prototype.
      </span>,
    ],
  },
  {
    question: 'What exists today?',
    answer: [
      [
        'This public website and an email-confirmed waitlist.',
        'A published manifesto, a draft Charter of Renewal, and Part A of the Founding Book.',
        'A live Academy beta with guardian authentication and learner-profile foundations.',
        'Essentia v0.1.0: runnable research software for a narrow civic-ledger prototype.',
        'Essentia whitepaper v0.7.0: a proposed protocol design, not a deployed mainnet.',
      ],
    ],
  },
  {
    question: 'How do the manifesto, Founding Book, and Charter differ?',
    answer: [
      [
        'The manifesto is the public diagnosis of systems that isolate us and the call to coordinated action. It is published in full.',
        'The Founding Book develops the philosophical and scientific reasoning behind the Society. Part A is drafted; most of the evidence, architecture, safeguards, and case studies remain in development.',
        'The Charter is the proposed constitutional framework: principles, rights, institutions, safeguards, and operating rules. It is a draft and has not been ratified.',
      ],
    ],
  },
  {
    question: 'What is the Dignity Constraint?',
    answer: [
      "It is the Society's first boundary on power: no policy, process, tool, or tactic may demean, dehumanize, or erase any conscious being.",
      'In practice, proposals should be necessary, proportionate, reversible, and accountable. People affected by a system should be able to understand it, contest it, and trigger review.',
    ],
  },
  {
    question: 'What does the manifesto mean by "the machine"?',
    answer: [
      'The manifesto uses "the machine" as shorthand for a pattern, not a secret organization or a single villain. Some suffering is inherent to life; its concern is the suffering that human systems create, deepen, or leave unanswered when people could reduce it together. It does not argue that institutions are inherently evil or that any means are justified in changing them. It asks how we can respond through compassion, understanding, personal responsibility, democratic cooperation, and the patient work of building better institutions and real alternatives.',
      <span key="summary">
        <strong className="font-semibold text-white">In short:</strong> The
        "machine" is the web of economic, political, bureaucratic, and cultural
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
      'The Society has no governmental or legal authority today. The Charter describes a possible civic society, not a jurisdiction or government that already exists.',
    ],
  },
  {
    question: 'Can I join? Do I have to relocate or give up citizenship?',
    answer: [
      'You can follow the work, join the email waitlist, test public software, and contribute through the public repositories from anywhere. Formal Society membership, civic identity, voting rights, and benefits are not live yet.',
      'Any future membership is intended to be voluntary, additive, and compatible with existing citizenship and local law.',
    ],
  },
  {
    question: 'Is the Freedom Floor or UBI available now?',
    answer: [
      'No. The Freedom Floor is the proposed guarantee of reliable access to food, shelter, basic healthcare, communication, and safety. UBI is one proposed mechanism for sustaining it.',
      'There is no active Society UBI program or announced launch date. Funding, legal structure, identity safeguards, vendors, public rules, and accountable pilot design would all need to exist first.',
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
    question: 'How are the Need and Lottery paths intended to work?',
    answer: [
      'The draft Charter proposes a Need Path for urgent hardship and a provably random Lottery Path when future pilot capacity is limited.',
      'No draw is currently running, no randomness procedure has been published for production use, and joining the waitlist is not an application for a current benefit. The form only records whether either path may be relevant in the future.',
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
      'The guiding rule is simple: institutions should become more transparent as their power increases, while personal privacy should become stronger as vulnerability increases. Public rules should be inspectable; private lives should not be.',
      'The Academy specification limits learner data to a nickname, age or grade band, and settings. The Essentia design keeps raw biometrics, government-ID images, home addresses, health data, and recovery secrets off-chain. These are design constraints; they still require implementation review and independent security testing.',
    ],
  },
  {
    question: 'How does safety work without defaulting to punishment?',
    answer: [
      'The Charter starts with dignity, immediate safety, and the least restrictive effective response. It prioritizes prevention, material stability, education, de-escalation, review, and repair. It does not pretend every active threat can be handled without intervention or minimum necessary force.',
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
      "That observation does not prove that Essentia's monetary proposal will work. A credible pilot would still need legal analysis, public parameters, fraud controls, reserve and redemption design, economic modeling, audits, and evidence from real use.",
    ],
  },
  {
    question: 'Is Essent money or legal tender?',
    answer: [
      'Not today. No public Essent currency exists, and the Society cannot declare legal tender. "Legal tender" is a status defined by applicable law, not by a project calling an instrument money.',
      'The whitepaper proposes Essent as a transferable medium of exchange within a future network. Whether it could legally operate, be accepted, convert to national currency, or create tax obligations would depend on jurisdiction, implementation, and regulated partners.',
    ],
  },
  {
    question: 'How can I contribute right now?',
    answer: [
      [
        'Read the manifesto and say what resonates, what is unclear, or where the argument needs more care.',
        'Review the draft Charter, Founding Book, and Essentia whitepaper in GitHub.',
        'Test the Academy beta or Essentia prototype and report what you find.',
        'Share relevant research, lived experience, translation, design, or technical work.',
        'Join the waitlist for project updates and future opportunities to participate.',
      ],
      'There is no public contribution-reward program, vendor-onboarding program, or formal governance process yet.',
    ],
  },
  {
    question: 'What is the timeline?',
    answer: [
      'There is no responsible date to promise yet. The next meaningful milestones are smaller: keep the public documents internally consistent, develop the Academy learning path, publish independent verification and stress tests for Essentia, and design any pilot through legal, security, economic, and community review.',
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
              The Society is being built in public. These answers separate
              current work from future design, explain the principles behind it,
              and show where participation is possible now.
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
                Begin with the common ground
              </p>
              <p className="mt-2 text-xl font-semibold text-white">
                Read the manifesto, then examine the drafts and prototypes.
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

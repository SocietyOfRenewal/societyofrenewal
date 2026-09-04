import Link from 'next/link';

import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Project FAQ | Society of Renewal',
  description:
    'Principles, current work, evidence, economic design, and practical ways to take part in the Society of Renewal.',
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
      'The Society of Renewal is an open civic project exploring how to build institutions around dignity, interdependence, education, material security, ecological continuity, and democratic participation. It begins with a testable hypothesis: sustained security, knowledge, and compassionate guidance can reduce some forms of suffering and coercion by addressing harm closer to its roots.',
      <span key="artifacts">
        Today it is a public body of work rather than a government, currency, or
        operating benefit system. Its starting points are the{' '}
        <Link href="/manifesto" className="underline hover:text-white">
          manifesto
        </Link>
        , the Founding Book, the draft Charter, the Academy beta, and the
        Essentia research prototype.
      </span>,
    ],
  },
  {
    question: 'What exists today?',
    answer: [
      [
        'This public website and an email-confirmed waitlist.',
        'A published manifesto that remains unchanged.',
        'Part A and Part B of the Founding Book as complete working drafts.',
        'A draft Charter of Renewal derived from the research in Part B.',
        'A live Academy beta with guardian authentication and learner-profile foundations.',
        'Essentia v0.1.0: runnable research software that tests a narrow ledger model but does not implement the current architecture.',
        'Essentia v0.9.0: the current monetary and civic research architecture, not an implemented network.',
      ],
    ],
  },
  {
    question: 'How do the manifesto, Founding Book, and Charter differ?',
    answer: [
      [
        'The manifesto is the public diagnosis of systems that isolate us and the call to coordinated action.',
        'Part A of the Founding Book states the moral covenant: dignity, interdependence, agency, care, accountability, and ecological continuity.',
        'Part B examines the evidence, uncertainty, economic mechanisms, failure modes, and research gates. It does not claim the Society has already been scientifically proven.',
        'The Charter is the proposed constitutional framework. Its mechanisms derive from Part B and must satisfy its evidence, dignity, capacity, privacy, and failure constraints before ratification.',
      ],
    ],
  },
  {
    question: 'What is the Dignity Constraint?',
    answer: [
      "It is the Society's first boundary on power: no policy, process, tool, or tactic may demean, dehumanize, or erase any conscious being.",
      'In practice, consequential proposals must be necessary, proportionate, reversible where possible, and accountable. People affected by a system should be able to understand it, contest it, and obtain review.',
    ],
  },
  {
    question: 'What does the manifesto mean by "the machine"?',
    answer: [
      'The manifesto uses "the machine" as shorthand for a pattern, not a secret organization or a single villain. Its concern is the suffering that economic, political, bureaucratic, and cultural systems create, deepen, or leave unanswered when people could reduce it together. It does not argue that institutions are inherently evil or that any means are justified in changing them.',
      <span key="summary">
        <strong className="font-semibold text-white">In short:</strong> The
        machine turns human beings into workers, consumers, patients, tenants,
        statistics, and problems to be managed. It survives by isolating us,
        treating structural failures as personal failures, exhausting us, and
        making cooperation feel impossible. Raging against it means preserving
        inner freedom, refusing cruelty and dehumanization, building solidarity,
        coordinating around shared needs, and constructing better institutions.
        The machine does not fear our anger nearly as much as it fears our
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
      'You can follow the work, join the email waitlist, test public software, and contribute through public repositories from anywhere. Formal Society membership, civic identity, voting rights, and benefits are not live yet.',
      'Any future membership is intended to be voluntary, additive, and compatible with existing citizenship and local law.',
    ],
  },
  {
    question: 'Is the Freedom Floor or UBI available now?',
    answer: [
      'No. The Freedom Floor is the proposed guarantee of reliable access to food, shelter, basic healthcare, communication, safety, and enough unrestricted purchasing power for ordinary human choice. The core monetary hypothesis is that each person receives an indexed 𝒰 entitlement that can be activated through ℛ and settled into enough ℰ to function as a real UBI.',
      'There is no active Society UBI program or launch date. Making that promise real requires coordinated acceptance of ℰ, adequate production and provider capacity, supply finance, transparent issuance and monetary control, reliable identity and governance, and an External Liquidity Bridge for costs that still leave the network. Those mechanisms must be built and tested together rather than treating reserves as the source of all value.',
    ],
  },
  {
    question: 'What are ℰ, 𝒰, and ℛ?',
    answer: [
      [
        '𝒰, or Essential Unit, is the indexed real unit and the periodic entitlement held by a person. It measures the intended cost-of-living floor rather than a fixed quantity of another currency.',
        'ℛ, or Essential Settlement Receivable, is the short-lived bridge claim created when 𝒰 is activated. Its beneficiary may be a provider, the member requesting unrestricted conversion, or an authorized payment agent.',
        'ℰ, or Essent, is the proposed common money. It may enter circulation through equal outside civic issuance as well as mutual, producer, and public credit.',
      ],
      'The intended flow is 𝒰 -> ℛ -> ℰ. 𝒰 fixes the real claim, ℛ preserves it while settlement occurs, and ℰ is the money people can use. None of these instruments is currently issued.',
    ],
  },
  {
    question: 'Can software assign 𝒰 enough real-world value to function as UBI?',
    answer: [
      'Yes, conceivably. Money has value because people expect other people and institutions to accept it. Bitcoin demonstrated that a cryptographic object without a sovereign redemption promise can acquire substantial exchange value. Laboratory monetary experiments have also shown intrinsically worthless tokens becoming useful media of exchange inside a shared system.',
      'Essentia is designed to do more than print a balance. Software can make issuance predictable, prevent counterfeiting, create common knowledge about acceptance, coordinate a founding market, discover closed trade loops, route credit toward shortages, and help unused capacity become real production. The hypothesis is that those mechanisms can make ℰ valuable enough for an indexed 𝒰 entitlement to become a real UBI. That has to be tested, but the absence of a traditional liability does not make it impossible.',
    ],
  },
  {
    question: 'What happens if ℰ becomes nearly valueless?',
    answer: [
      'A very large number of ℰ is not automatically a very large real issue. If prices, wages, balances, and contracts are all expressed in equally large numbers, the problem may be denomination and can be repaired with a neutral rebase. The protocol must distinguish that from a real loss of purchasing power.',
      'If ℰ actually buys less inside the network, the internal ℰ-per-𝒰 rate rises and the current 𝒰 claim settles into more ℰ. That indexed conversion is a core part of the design, not an optional feature reserved for a mature reserve fund. The danger is not the integer itself. The danger is activating more real claims than production can meet, or losing confidence so quickly that people no longer want to hold or accept ℰ. Essentia must respond by coordinating supply, financing bottlenecks, strengthening useful demand, changing issuance, and rebasing when only the denomination is broken. External cash-out remains a separate market-liquidity question.',
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
        is runnable research software with signed accounts, replicated nodes,
        budget-capped contribution claims, two prototype asset types, and
        public-signal governance.
      </span>,
      'It does not implement the v0.9.0 target. Missing work includes the 𝒰 index, ℛ activation and settlement, outside civic issuance, mutual and producer credit, internal purchasing-power measurement, founding-market coordination, supply finance, external exchange, plural identity and recovery, binding private elections, durable public logs, and independent validation.',
    ],
  },
  {
    question: 'Why not start by building a new blockchain?',
    answer: [
      'A blockchain is useful only when multiple parties need shared state, do not fully trust one operator, and can verify enough of the system independently. It does not solve false price data, bad eligibility decisions, provider default, reserve insolvency, coercive governance, or poor accounting.',
      'The current research sequence starts with double-entry accounting, deterministic simulation, signed append-only transparency logs, and independent witnesses. Federation or Byzantine-fault-tolerant consensus comes later only if the trust model and operational evidence justify the cost.',
    ],
  },
  {
    question: 'How would decisions be made?',
    answer: [
      'No single voting rule is the universal default. Constitutional amendments, elected roles, budgets, technical changes, emergency actions, and scientific findings are different decisions and need different procedures.',
      'The current design combines political equality with methods selected by decision type: deliberation, direct or representative voting, sortition, expert review, operational delegation, public verification, appeal, and protected rights that a majority cannot simply vote away. Ranked-choice and liquid democracy remain options to test, not constitutional truths.',
    ],
  },
  {
    question: 'How are the Need and Lottery paths intended to work?',
    answer: [
      'The draft Charter proposes a Need Path for urgent hardship and a provably random Lottery Path when future pilot capacity is limited.',
      'No draw is running, no production randomness procedure has been approved, and joining the waitlist is not an application for a current benefit. The form only records whether either path may be relevant in the future.',
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
        is a separate application for guardian-led learning journeys.
      </span>,
      'Guardian sign-up, passkey authentication, and learner-profile foundations exist. Device pairing, the desktop launcher flow, world distribution, progress dashboards, billing, and administration remain incomplete or on the roadmap.',
    ],
  },
  {
    question: 'What is the privacy and identity position?',
    answer: [
      'Institutions should become more transparent as their power increases, while personal privacy should become stronger as vulnerability increases. Public rules, budgets, issuance, settlement claims, coverage, and official actions should be inspectable. Private lives should not be.',
      'Identity should be plural and purpose-bound rather than collapsed into one permanent public identifier, with selective disclosure, recovery, assisted access, anti-fraud review, and appeal. No proof-of-personhood method is treated as solved.',
    ],
  },
  {
    question: 'How does safety work without defaulting to punishment?',
    answer: [
      'The Charter starts with dignity, immediate safety, and the least restrictive effective response. It prioritizes prevention, material stability, education, de-escalation, review, and repair. Evidence supports some interventions in some contexts; it does not justify claiming education or restoration can replace every emergency response, investigation, protective separation, or necessary use of force.',
      'No Society-operated safety network exists today. Any future system would require professional standards, due process, victim consent, alternatives to restorative participation, independent review, and clear stop conditions.',
    ],
  },
  {
    id: 'money-creation',
    question: 'How is money created, and what did Bitcoin actually prove?',
    answer: [
      'Money is a coordination technology. Bank deposits are liabilities, but that is not the only possible monetary form. Irredeemable fiat base money and bearer tokens can function as outside money because people expect continued acceptance and because prices, contracts, institutions, and other users coordinate around the same unit.',
      'Bitcoin demonstrated that a non-sovereign cryptographic asset with no redemption promise can acquire substantial value through credible rules, transferability, scarcity, network effects, liquidity, and expectations. It also demonstrated that a monetary network can exist before established institutions agree that it should.',
      'Essentia takes the next problem seriously: deliberately create a more useful and equitable monetary equilibrium, distribute civic issuance equally, measure the real floor in 𝒰, settle it through ℛ into ℰ, and finance the production needed to keep that income usable. Bitcoin is precedent for possibility, not a template for the final design.',
    ],
  },
  {
    question: 'Is Essent money or legal tender?',
    answer: [
      'Not today. No public ℰ currency exists, and the Society cannot declare legal tender. Legal-tender status is defined by applicable law.',
      'The v0.9.0 architecture proposes ℰ as a common currency with two broad creation paths: outside civic issuance distributed under public equal rules, and inside credit issued against reciprocal trade or productive capacity. Whether it becomes widely accepted money depends on actual use, adoption, governance, providers, and law. It is not legal tender today.',
    ],
  },
  {
    question: 'How can I contribute right now?',
    answer: [
      [
        'Read the manifesto and say what resonates, what is unclear, or where the argument needs more care.',
        'Review Part A, Part B, the draft Charter, and the Essentia v0.9.0 research architecture and monetary model.',
        'Challenge assumptions, find counterevidence, and propose better experiments or stop conditions.',
        'Test the Academy beta or Essentia v0.1.0 prototype and report what you find.',
        'Share relevant research, lived experience, translation, design, legal, economic, safety, accessibility, or technical work.',
        'Join the waitlist for project updates and future opportunities to participate.',
      ],
      'There is no public contribution-reward program, vendor-onboarding program, or formal governance process yet.',
    ],
  },
  {
    question: 'What is the timeline?',
    answer: [
      'There is no responsible launch date to promise. The sequence begins with formal models, open research, a coordinated founding market, shadow accounting, and small experiments in outside ℰ issuance, acceptance, and price formation.',
      'Direct 𝒰 -> ℛ -> ℰ conversion belongs in the early monetary experiments because it is the central hypothesis, not a feature to postpone until conventional reserves can fund it. Later stages add producer credit, external exchange, and recurring allocations large enough to affect ordinary life. Dependency grows only as continuity, privacy, appeal, and operational protection improve.',
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
              Project FAQ · Founding research
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl leading-[0.98] font-semibold tracking-[-0.055em] text-balance text-white sm:text-7xl">
              What exists, what the evidence supports, and what still has to be
              proven.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300">
              The Society is being built in public. These answers separate moral
              commitments, evidence, working software, research architecture,
              and live services so no one has to infer what has or has not been
              proven.
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
                Read the manifesto, then examine Part A, Part B, and the architecture.
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

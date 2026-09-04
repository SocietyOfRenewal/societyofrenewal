import Image from 'next/image';
import Link from 'next/link';

import DropletIntro from '@/components/DropletIntro';
import Reveal from '@/components/Reveal';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import WaitlistForm from '@/components/WaitlistForm';

const currentWork = [
  {
    name: 'Manifesto',
    state: 'Published',
    detail:
      'The public diagnosis of systems that isolate us, and a call to coordinated action.',
    href: '/manifesto',
  },
  {
    name: 'Founding Book',
    state: 'Parts A-B drafted',
    detail:
      'The moral covenant, scientific basis, economic architecture, and research gates for the Society.',
    href: 'https://github.com/SocietyOfRenewal/societyofrenewal/tree/main/docs/founding-book',
    external: true,
  },
  {
    name: 'Charter of Renewal',
    state: 'Draft',
    detail:
      'A proposed constitutional framework derived from the evidence and constraints in Part B.',
    href: 'https://github.com/SocietyOfRenewal/societyofrenewal/tree/main/docs/charter',
    external: true,
  },
  {
    name: 'Essentia',
    state: 'v0.8.0 research design',
    detail:
      'The economic and technical architecture derived from Part B. The runnable v0.1.0 code is a separate narrow research prototype.',
    href: 'https://github.com/SocietyOfRenewal/essentia',
    external: true,
  },
  {
    name: 'Academy',
    state: 'Early beta',
    detail:
      'Guardian accounts and learner profiles are live. The broader learning environment remains in development.',
    href: 'https://academy.societyofrenewal.org/',
    external: true,
  },
];

const commitments = [
  'Dignity is inherent. It does not depend on wealth, health, status, conformity, or usefulness.',
  'Interdependence should be organized through reciprocity and care, not domination.',
  'Education, material security, and compassionate guidance should function as infrastructure for freedom.',
  'Power should be understandable, contestable, reversible, and accountable to the people it affects.',
];

export default function Page() {
  return (
    <DropletIntro>
      <main className="relative overflow-hidden bg-[#030711] text-slate-100">
        <section className="relative isolate flex min-h-svh flex-col overflow-hidden border-b border-white/10">
          <Image
            src="/images/coordination-ripples.webp"
            alt="Concentric ripples meeting across dark water"
            fill
            priority
            sizes="100vw"
            className="-z-30 object-cover object-[68%_center]"
          />
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(1,5,12,0.97)_0%,rgba(1,5,12,0.86)_42%,rgba(1,5,12,0.2)_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.26),rgba(0,0,0,0.02)_55%,rgba(0,0,0,0.82))]" />

          <SiteHeader overlay />

          <Reveal
            immediate
            className="mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pt-28 pb-12 sm:px-8 sm:pt-32 lg:px-12"
          >
            <div className="max-w-5xl">
              <p className="font-mono text-xs tracking-[0.28em] text-cyan-100/80 uppercase sm:text-sm">
                An open civic project
              </p>
              <h1 className="mt-6 max-w-[21ch] text-[clamp(3rem,6.2vw,7rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-balance text-white">
                Building a society
                <br /> on dignity, not fear.
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-xl">
                The Society of Renewal is testing a difficult claim in public:
                care, knowledge, material security, and accountable
                institutions can reduce suffering and coercion that we have
                learned to treat as inevitable. We are developing the
                principles, evidence, tools, and institutions in the open so
                they can be inspected, challenged, and improved.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="#work"
                  className="inline-flex min-h-12 items-center justify-center bg-cyan-100 px-5 text-sm font-semibold text-slate-950 transition hover:bg-white focus-visible:bg-white"
                >
                  Explore the work&nbsp;→
                </Link>
                <Link
                  href="/manifesto"
                  className="inline-flex min-h-12 items-center justify-center border border-cyan-100/40 bg-cyan-950/30 px-5 text-sm font-semibold text-cyan-50 backdrop-blur-sm transition hover:border-cyan-50/70 hover:bg-cyan-900/40 focus-visible:border-cyan-50/70 focus-visible:bg-cyan-900/40"
                >
                  Read the manifesto
                </Link>
                <Link
                  href="#join"
                  className="inline-flex min-h-12 items-center justify-center border border-white/30 bg-black/20 px-5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/10 focus-visible:border-white/60 focus-visible:bg-white/10"
                >
                  Follow the work
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="mx-auto grid w-full max-w-7xl gap-3 border-t border-white/10 px-5 py-5 text-xs text-slate-300 sm:grid-cols-[auto_1fr] sm:items-center sm:px-8 lg:px-12">
            <span className="font-mono tracking-[0.2em] text-cyan-100/80 uppercase">
              Current state
            </span>
            <span>
              The Society is still in formation. Its public documents and
              prototypes are real; formal membership, civic identity, voting,
              currency, and the Freedom Floor are not live yet.
            </span>
          </div>
        </section>

        <section id="work" className="scroll-mt-8 border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:py-28">
            <Reveal>
              <p className="font-mono text-xs tracking-[0.24em] text-cyan-200/75 uppercase">
                Current work
              </p>
              <h2 className="mt-4 max-w-lg text-4xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                We will be judged by practice, not poetry.
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-slate-300">
                Large claims deserve public scrutiny. We publish the Society's
                principles, evidence, prototypes, and open questions so people
                can inspect the work, challenge its assumptions, and help
                improve it.
              </p>
            </Reveal>

            <div className="border-t border-white/15">
              {currentWork.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener' : undefined}
                  className="group grid gap-2 border-b border-white/15 py-6 transition-colors hover:bg-white/[0.025] sm:grid-cols-[10rem_10rem_1fr_auto] sm:items-baseline sm:gap-5"
                >
                  <span className="font-semibold text-white">{item.name}</span>
                  <span className="font-mono text-xs tracking-wide text-cyan-200/75 uppercase">
                    {item.state}
                  </span>
                  <span className="text-sm leading-relaxed text-slate-400">
                    {item.detail}
                  </span>
                  <span
                    aria-hidden
                    className="text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-white"
                  >
                    →
                  </span>
                  {item.external ? (
                    <span className="sr-only">Opens in a new tab</span>
                  ) : null}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-b border-white/10 bg-cyan-950/20">
          <div
            aria-hidden
            className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.12),_transparent_65%)]"
          />
          <Reveal className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
            <p className="font-mono text-xs tracking-[0.24em] text-cyan-200/75 uppercase">
              From the manifesto
            </p>
            <blockquote className="mt-8 max-w-5xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-balance text-white sm:text-6xl lg:text-7xl">
              The individual still has to make the choice. But other people can
              keep the door visible long enough for the choice to become
              possible.
            </blockquote>
            <Link
              href="/manifesto"
              className="mt-10 inline-flex border-b border-cyan-200/50 pb-1 text-sm font-semibold text-cyan-100 transition hover:border-white hover:text-white"
            >
              Continue reading&nbsp;→
            </Link>
          </Reveal>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-28">
            <div>
              <p className="font-mono text-xs tracking-[0.24em] text-cyan-200/75 uppercase">
                The common ground
              </p>
              <h2 className="mt-4 max-w-xl text-4xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Dignity is the boundary. Interdependence is the beginning.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                We are interdependent with one another, our tools, and the
                living world. The Society is being built to make that
                interdependence safe, honest, and generative: care reliable,
                power accountable, knowledge usable, and basic security a
                condition of freedom rather than a reward for compliance.
              </p>
            </div>
            <ol className="border-t border-white/15">
              {commitments.map((commitment, index) => (
                <li
                  key={commitment}
                  className="grid grid-cols-[2.5rem_1fr] gap-5 border-b border-white/15 py-7"
                >
                  <span className="font-mono text-sm text-cyan-200/70">
                    0{index + 1}
                  </span>
                  <span className="text-lg leading-relaxed text-slate-200">
                    {commitment}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="join" className="scroll-mt-8 border-b border-white/10">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-28">
            <div>
              <p className="font-mono text-xs tracking-[0.24em] text-cyan-200/75 uppercase">
                Follow the work
              </p>
              <h2 className="mt-4 text-4xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Stay close as the Society takes shape.
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-slate-300">
                Confirm your email for project updates, new public drafts, and
                future opportunities to participate. The waitlist is not formal
                membership and does not create a civic identity, voting rights,
                or a promise of benefits.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-slate-400">
                You can also share whether a future need-based or
                random-selection pilot would be relevant to you. That helps us
                understand possible demand; no pilot selection is active today.
              </p>
            </div>
            <div className="border border-white/15 bg-white/[0.035] p-6 shadow-[0_28px_100px_rgba(0,0,0,0.35)] sm:p-8">
              <WaitlistForm />
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[0.7fr_1.3fr] lg:px-12">
            <h2 className="text-xl font-semibold text-white">
              Explore the work
            </h2>
            <div className="grid gap-x-8 gap-y-5 text-sm sm:grid-cols-2">
              <Link
                href="/manifesto"
                className="text-slate-300 hover:text-white"
              >
                The manifesto →
              </Link>
              <Link href="/faq" className="text-slate-300 hover:text-white">
                Project FAQ →
              </Link>
              <Link
                href="https://github.com/SocietyOfRenewal/societyofrenewal/tree/main/docs/charter"
                target="_blank"
                rel="noopener"
                className="text-slate-300 hover:text-white"
              >
                Draft Charter →
              </Link>
              <Link
                href="https://github.com/SocietyOfRenewal/societyofrenewal/tree/main/docs/founding-book"
                target="_blank"
                rel="noopener"
                className="text-slate-300 hover:text-white"
              >
                Founding Book →
              </Link>
              <Link
                href="https://github.com/SocietyOfRenewal/societyofrenewal/blob/main/docs/founding-book/Part%20B.md"
                target="_blank"
                rel="noopener"
                className="text-slate-300 hover:text-white"
              >
                Part B: The Science of Renewal →
              </Link>
              <Link
                href="https://github.com/SocietyOfRenewal/essentia"
                target="_blank"
                rel="noopener"
                className="text-slate-300 hover:text-white"
              >
                Essentia v0.8.0 research architecture →
              </Link>
              <Link
                href="https://academy.societyofrenewal.org/"
                target="_blank"
                rel="noopener"
                className="text-slate-300 hover:text-white"
              >
                Academy beta →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </DropletIntro>
  );
}

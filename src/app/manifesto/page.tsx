import { readFile } from 'node:fs/promises';
import path from 'node:path';

import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Manifesto | Society of Renewal',
  description:
    'The machine does not fear your anger. It fears your coordination. Read or listen to the Society of Renewal manifesto.',
  alternates: { canonical: '/manifesto' },
  openGraph: {
    title: 'The Machine Does Not Fear Your Anger. It Fears Your Coordination.',
    description: 'The Society of Renewal manifesto.',
    url: '/manifesto',
    type: 'article',
  },
};

export default async function ManifestoPage() {
  const source = await readFile(
    path.join(process.cwd(), 'docs', 'manifesto.md'),
    'utf8',
  );

  return (
    <div className="min-h-screen bg-[#030711] text-slate-100">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,_rgba(34,211,238,0.12),_transparent_38%),linear-gradient(180deg,_rgba(255,255,255,0.035),_transparent)]"
          />
          <div className="relative mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
            <p className="font-mono text-xs tracking-[0.24em] text-cyan-200/80 uppercase">
              The Society of Renewal manifesto
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              A diagnosis of the systems that isolate us, and an argument for
              solidarity, coordination, and the patient work of building better
              institutions.
            </p>

            <section
              id="listen"
              aria-labelledby="listen-heading"
              className="mt-10 scroll-mt-6 border border-white/15 bg-black/30 p-5 backdrop-blur-sm sm:p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-xs tracking-[0.2em] text-cyan-200/75 uppercase">
                    Audio edition · 23 minutes
                  </p>
                  <h2
                    id="listen-heading"
                    className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-white"
                  >
                    Listen to the manifesto
                  </h2>
                  <p
                    id="audio-description"
                    className="mt-2 text-sm text-slate-400"
                  >
                    Play it here or save the MP3 for later. The complete text
                    follows below.
                  </p>
                </div>
                <a
                  href="/audio/manifesto.mp3"
                  download
                  className="w-fit border-b border-cyan-200/50 pb-1 text-sm font-semibold text-cyan-100 transition hover:border-white hover:text-white focus-visible:border-white focus-visible:text-white"
                >
                  Download MP3 · 16 MB
                </a>
              </div>
              <audio
                controls
                preload="metadata"
                aria-label="Audio recording of the Society of Renewal manifesto"
                aria-describedby="audio-description"
                className="mt-5 w-full [color-scheme:dark]"
              >
                <source src="/audio/manifesto.mp3" type="audio/mpeg" />
                Your browser does not support embedded audio. You can{' '}
                <a href="/audio/manifesto.mp3">download the MP3 instead</a>.
              </audio>
            </section>
          </div>
        </section>

        <article className="manifesto-copy mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
          <ReactMarkdown>{source}</ReactMarkdown>
        </article>

        <section className="border-t border-white/10 bg-cyan-950/20">
          <div className="mx-auto flex max-w-4xl flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-mono text-xs tracking-[0.24em] text-cyan-200/80 uppercase">
                From argument to practice
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Read the drafts. Test the ideas. Help build what works.
              </h2>
            </div>
            <Link
              href="/#join"
              className="inline-flex min-h-11 shrink-0 items-center justify-center border border-cyan-200/40 bg-cyan-100 px-5 text-sm font-semibold text-slate-950 transition hover:bg-white focus-visible:bg-white"
            >
              Follow the work
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

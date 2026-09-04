import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 text-sm text-slate-400 sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:px-12">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold tracking-[0.28em] text-slate-200 uppercase">
            Society of Renewal
          </p>
          <p className="leading-relaxed">
            An open civic project testing whether care, knowledge, material
            security, and accountable institutions can reduce avoidable
            suffering. The Founding Book and Charter are drafts. Essentia
            v0.1.0 is a prototype; v0.8.0 is a research architecture.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <Link href="/manifesto" className="hover:text-white">
            Manifesto
          </Link>
          <Link href="/faq" className="hover:text-white">
            FAQ
          </Link>
          <Link
            href="https://github.com/SocietyOfRenewal/societyofrenewal/tree/main/docs/founding-book"
            target="_blank"
            rel="noopener"
            className="hover:text-white"
          >
            Founding Book
            <span className="sr-only"> (opens in a new tab)</span>
          </Link>
          <Link
            href="https://github.com/SocietyOfRenewal/societyofrenewal/tree/main/docs/charter"
            target="_blank"
            rel="noopener"
            className="hover:text-white"
          >
            Draft Charter
            <span className="sr-only"> (opens in a new tab)</span>
          </Link>
          <Link
            href="https://github.com/SocietyOfRenewal"
            target="_blank"
            rel="noopener"
            className="hover:text-white"
          >
            GitHub<span className="sr-only"> (opens in a new tab)</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

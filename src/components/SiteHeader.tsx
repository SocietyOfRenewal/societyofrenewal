import Link from 'next/link';

const primaryLinks = [
  { href: '/manifesto', label: 'Manifesto' },
  { href: '/faq', label: 'FAQ' },
  {
    href: 'https://github.com/SocietyOfRenewal/societyofrenewal/tree/main/docs/charter',
    label: 'Charter',
    external: true,
  },
  {
    href: 'https://academy.societyofrenewal.org/',
    label: 'Academy beta',
    external: true,
  },
];

export default function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  return (
    <header
      className={
        overlay
          ? 'absolute inset-x-0 top-0 z-30 border-b border-white/10 bg-black/10 backdrop-blur-sm'
          : 'border-b border-white/10 bg-[#030711]/95 backdrop-blur-sm'
      }
    >
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-6 px-5 py-3 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="text-xs font-semibold tracking-[0.28em] text-slate-100 uppercase transition-colors hover:text-cyan-100 focus-visible:text-cyan-100"
        >
          Society of Renewal
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-xs font-medium text-slate-300 sm:gap-x-7 sm:text-sm">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener' : undefined}
                  className="transition-colors hover:text-white focus-visible:text-white"
                >
                  {link.label}
                  {link.external ? (
                    <span className="sr-only"> (opens in a new tab)</span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

import { Analytics } from '@vercel/analytics/react';

import { Toaster } from '@/components/ui/sonner';

import type { Metadata, Viewport } from 'next';
import './globals.css';

const title = 'Society of Renewal — Coordination in Public';
const description =
  'Read the Society of Renewal manifesto and inspect the public Charter, Academy beta, and Essentia prototype.';
const absoluteUrl = 'https://www.societyofrenewal.org';

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl),
  title,
  description,
  keywords: [
    'Society of Renewal',
    'Civic Coordination',
    'Mutual Aid',
    'Democratic Institutions',
    'Public Infrastructure',
  ],
  authors: [{ name: 'Society of Renewal' }],
  creator: 'Society of Renewal',
  alternates: {
    canonical: absoluteUrl,
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl,
    siteName: 'Society of Renewal',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#030711',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#030711] text-zinc-100 antialiased">
        {children}
        <Analytics />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}

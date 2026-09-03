import { Analytics } from '@vercel/analytics/react';

import { Toaster } from '@/components/ui/sonner';

import type { Metadata, Viewport } from 'next';
import './globals.css';

const title = 'Society of Renewal | Building on dignity, not fear';
const description =
  'An open civic project testing whether care, knowledge, and material security can scale better than fear.';
const absoluteUrl = 'https://www.societyofrenewal.org';

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl),
  title,
  description,
  keywords: [
    'Society of Renewal',
    'Dignity Constraint',
    'Interdependence',
    'Civic Education',
    'Material Security',
    'Restorative Justice',
    'Democratic Institutions',
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

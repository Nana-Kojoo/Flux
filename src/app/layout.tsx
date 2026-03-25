import type { Metadata } from 'next';
import { Manrope, Syne } from 'next/font/google';
import type { ReactNode } from 'react';
import { Suspense } from 'react';

import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { PageTransitionLoader } from '@/components/ui/PageTransitionLoader';

import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Flux — Software Development & QA',
  description: 'Lean software development and QA support for startups and growing teams.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${manrope.variable}`}>
        <Suspense fallback={null}>
          <PageTransitionLoader />
        </Suspense>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

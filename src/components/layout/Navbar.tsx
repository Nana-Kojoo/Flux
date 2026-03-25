'use client';

import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/Button';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-gray-200 bg-brand-white/90 backdrop-blur">
      <nav className="mx-auto flex h-17 max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="font-display text-xl font-extrabold tracking-tight text-brand-black">
          Flux
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-brand-gray-600 transition hover:text-brand-black">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href="/contact" size="md">
            Start a project
          </Button>
        </div>

        <button
          aria-label="Toggle navigation menu"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          <span className="h-0.5 w-6 bg-brand-black" />
          <span className="h-0.5 w-6 bg-brand-black" />
          <span className="h-0.5 w-6 bg-brand-black" />
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-brand-gray-200 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-brand-gray-600" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Button href="/contact">Start a project</Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

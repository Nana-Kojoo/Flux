import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  {
    href: 'https://www.linkedin.com/company/Flux',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'https://x.com/Flux',
    label: 'X',
    icon: Twitter,
  },
  {
    href: 'https://github.com/Flux',
    label: 'GitHub',
    icon: Github,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-gray-200 bg-brand-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-[1.5fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-2xl font-bold text-brand-black">Flux</p>
          <p className="mt-3 max-w-xl text-sm text-brand-gray-600">
            Product-minded software development and QA support for ambitious founders and growing teams.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center border border-brand-gray-200 bg-brand-gray-100 text-brand-gray-600 transition hover:border-brand-black hover:bg-brand-black hover:text-brand-white"
              >
                <Icon size={16} strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 text-sm text-brand-gray-600 lg:items-end">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-brand-black">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-brand-gray-200 px-6 py-4 text-center text-xs text-brand-gray-400 lg:px-8">
        © {new Date().getFullYear()} Flux. Built for focused startup execution.
      </div>
    </footer>
  );
}

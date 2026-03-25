import Link from 'next/link';

import { team } from '@/data/team';

export function TeamGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <h2 className="font-display text-3xl font-bold tracking-tight text-brand-black">Core team</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {team.map((member) => (
          <article key={member.name} className="border border-brand-gray-200 bg-brand-white p-6">
            <div className="aspect-square bg-brand-gray-100" />
            <h3 className="mt-5 font-display text-2xl font-bold text-brand-black">
              {member.portfolioUrl.startsWith('http') ? (
                <a
                  href={member.portfolioUrl}
                  className="transition hover:text-brand-gray-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  {member.name}
                </a>
              ) : (
                <Link href={member.portfolioUrl} className="transition hover:text-brand-gray-600">
                  {member.name}
                </Link>
              )}
            </h3>
            <p className="mt-1 text-sm font-medium text-brand-gray-400">{member.role}</p>
            <p className="mt-4 text-sm text-brand-gray-600">{member.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

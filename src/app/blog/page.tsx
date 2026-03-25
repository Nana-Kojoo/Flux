import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Label } from '@/components/ui/Label';

export const metadata: Metadata = {
  title: 'Blog — Flux',
  description: 'Stories and lessons from building Flux.',
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <Label>Blog</Label>

      <div className="mt-4">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-brand-black lg:text-5xl">Stories from our journey</h1>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <Link
          href="/blog/our-journey"
          className="group flex h-full flex-col overflow-hidden border border-brand-gray-200 bg-brand-white transition hover:-translate-y-1 hover:border-brand-black"
        >
          <div className="relative aspect-[16/10] border-b border-brand-gray-200 bg-[radial-gradient(circle_at_20%_20%,rgba(10,10,10,0.12),transparent_45%),linear-gradient(135deg,#f2f2f2,#e8e8e8)]">
            <span className="absolute left-4 top-4 border border-brand-white/50 bg-brand-black/60 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-brand-white">
              Founder story
            </span>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-gray-400">March 13, 2026 · 6 min read</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-brand-black">
              How Flux went from scattered gigs to a focused startup delivery studio
            </h2>
            <p className="mt-3 flex-1 text-sm text-brand-gray-600">
              We didn’t start with a perfect brand or playbook. We started with messy sprints, hard lessons, and a decision to build with
              clarity.
            </p>

            <p className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-black transition-all group-hover:gap-3">
              Read story <ArrowRight size={14} />
            </p>
          </div>
        </Link>

        <article className="flex h-full flex-col overflow-hidden border border-brand-gray-200 bg-brand-white opacity-90">
          <div className="relative aspect-[16/10] border-b border-brand-gray-200 bg-brand-gray-100">
            <span className="absolute left-4 top-4 border border-brand-gray-300 bg-brand-white px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-brand-gray-500">
              Coming soon
            </span>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-gray-400">Founder notes</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-brand-black">The sprint that changed how we handle QA forever</h2>
            <p className="mt-3 flex-1 text-sm text-brand-gray-600">
              A behind-the-scenes story on the release week that pushed us to redesign our QA workflow from scratch.
            </p>

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.12em] text-brand-gray-400">Story in progress</p>
          </div>
        </article>

        <article className="flex h-full flex-col overflow-hidden border border-brand-gray-200 bg-brand-white opacity-90">
          <div className="relative aspect-[16/10] border-b border-brand-gray-200 bg-brand-gray-100">
            <span className="absolute left-4 top-4 border border-brand-gray-300 bg-brand-white px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-brand-gray-500">
              Coming soon
            </span>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-gray-400">Studio growth</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-brand-black">From freelancer mindset to studio systems</h2>
            <p className="mt-3 flex-1 text-sm text-brand-gray-600">
              What we had to unlearn to move from ad-hoc execution into a repeatable delivery model for startups.
            </p>

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.12em] text-brand-gray-400">Story in progress</p>
          </div>
        </article>

        <article className="flex h-full flex-col overflow-hidden border border-brand-gray-200 bg-brand-white opacity-90">
          <div className="relative aspect-[16/10] border-b border-brand-gray-200 bg-brand-gray-100">
            <span className="absolute left-4 top-4 border border-brand-gray-300 bg-brand-white px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-brand-gray-500">
              Coming soon
            </span>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-gray-400">Product journey</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-brand-black">Why we started building internal products alongside client work</h2>
            <p className="mt-3 flex-1 text-sm text-brand-gray-600">
              The practical reason API, Flowdesk, and Trackform became part of our long-term studio strategy.
            </p>

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.12em] text-brand-gray-400">Story in progress</p>
          </div>
        </article>
      </div>
    </section>
  );
}

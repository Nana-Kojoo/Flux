import type { Metadata } from 'next';
import Link from 'next/link';

import { Label } from '@/components/ui/Label';

export const metadata: Metadata = {
  title: 'Our Journey — Flux Blog',
  description: 'How Flux evolved from scattered gigs to a focused delivery studio.',
};

export default function OurJourneyPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <Label>Blog</Label>
        <Link href="/blog" className="text-sm font-semibold text-brand-gray-500 transition hover:text-brand-black">
          Back to blog
        </Link>
      </div>

      <header className="mt-4 border border-brand-gray-200 bg-brand-white p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gray-400">March 13, 2026 · Founder story</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-brand-black lg:text-5xl">
          How Flux went from scattered gigs to a focused startup delivery studio
        </h1>
        <p className="mt-5 text-brand-gray-600">
          We didn’t start with a perfect brand, a playbook, or a big team. We started with late-night builds, too many context switches,
          and one clear goal: help founders ship with less chaos.
        </p>
      </header>

      <article className="mt-10 space-y-8 text-[1.02rem] leading-8 text-brand-gray-700">
        <p>
          In the early days, we said yes to almost everything. One week we were fixing a broken checkout flow for a small commerce app,
          the next week we were cleaning up a database migration for another team. The work was honest and it paid the bills, but the
          delivery process felt reactive. We were always busy, but not always effective.
        </p>

        <figure className="overflow-hidden border border-dashed border-brand-gray-300 bg-brand-gray-100">
          <div className="flex aspect-[16/9] items-center justify-center px-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-brand-gray-500">
            Image slot 1 — First working setup / early team workspace
          </div>
          <figcaption className="border-t border-brand-gray-200 bg-brand-white px-4 py-3 text-xs text-brand-gray-500">
            Suggested photo: your first desk setup, whiteboard, or early sprint board.
          </figcaption>
        </figure>

        <p>
          The turning point came after a difficult product release with a client. Nothing dramatic failed, but the team was exhausted.
          Tasks were scattered across chat threads, QA was happening too late, and nobody had a clean view of what was actually
          release-ready. After that sprint, we made a decision: Flux would be built around delivery clarity, not just code output.
        </p>

        <p>
          We tightened our service scope, standardized communication, and built lightweight internal tools to support our own process.
          That’s where products like API and Flowdesk started — not as side projects, but as systems born from real friction in live
          delivery cycles. Our product arm became a way to solve repeat problems once, then reuse those solutions across engagements.
        </p>

        <figure className="overflow-hidden border border-dashed border-brand-gray-300 bg-brand-gray-100">
          <div className="flex aspect-[16/9] items-center justify-center px-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-brand-gray-500">
            Image slot 2 — Team planning session / project milestone moment
          </div>
          <figcaption className="border-t border-brand-gray-200 bg-brand-white px-4 py-3 text-xs text-brand-gray-500">
            Suggested photo: a planning meeting, review call, or milestone delivery screenshot.
          </figcaption>
        </figure>

        <p>
          Over time, this changed the way clients experienced us. Instead of only hearing technical updates, they got confidence in the
          process itself: clearer status, better QA discipline, and fewer last-minute surprises. We still move fast, but now with structure
          that protects quality.
        </p>

        <p>
          Today, Flux has two connected tracks: client delivery work and in-house product development. They feed each other. Client
          work keeps us grounded in real-world urgency. Product work helps us compound what we learn. That balance is now part of our
          identity.
        </p>

        <figure className="overflow-hidden border border-dashed border-brand-gray-300 bg-brand-gray-100">
          <div className="flex aspect-[16/9] items-center justify-center px-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-brand-gray-500">
            Image slot 3 — Present-day team or shipped project collage
          </div>
          <figcaption className="border-t border-brand-gray-200 bg-brand-white px-4 py-3 text-xs text-brand-gray-500">
            Suggested photo: current team, shipped interfaces, or before/after process snapshot.
          </figcaption>
        </figure>

        <p>
          If there’s one lesson from the journey, it’s this: growth is less about doing more and more about becoming intentional. We still
          iterate every month, but now every iteration serves the same mission — helping founders and teams ship reliably without losing
          momentum.
        </p>
      </article>
    </section>
  );
}

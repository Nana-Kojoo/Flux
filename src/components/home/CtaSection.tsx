import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function CtaSection() {
  return (
    <section className="bg-brand-black py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gray-400">Ready to move</p>
            <h2 className="mt-4 max-w-2xl font-display text-5xl font-extrabold tracking-tight text-brand-white">
              Got a product to build or a delivery problem to fix?
            </h2>
            <p className="mt-6 max-w-xl text-brand-gray-400">
              Tell us what you are building, where things are stuck, and we will figure out the clearest path forward together.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
            <Button href="/contact" size="lg">
              Book a discovery call
            </Button>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 border border-brand-gray-600 px-7 py-4 font-display text-sm font-semibold text-brand-gray-400 transition hover:border-brand-white hover:text-brand-white"
            >
              Browse our work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

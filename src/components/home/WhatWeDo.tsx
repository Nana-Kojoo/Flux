import { services } from '@/data/services';

import { Label } from '@/components/ui/Label';

export function WhatWeDo() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <Label>What we do</Label>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight text-brand-black">Execution support across build, scale, and quality.</h2>
        <p className="max-w-xl text-brand-gray-600">
          We focus on the work that helps early-stage teams move with confidence: product development, delivery structure, and release quality.
        </p>
      </div>
      <div className="mt-12 grid gap-px border border-brand-gray-200 bg-brand-gray-200 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.slug} className="bg-brand-white p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gray-400">{service.category}</p>
            <h3 className="mt-4 font-display text-2xl font-bold text-brand-black">{service.title}</h3>
            <p className="mt-4 text-sm text-brand-gray-600">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

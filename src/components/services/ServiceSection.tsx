import { ReactNode } from 'react';

import { Label } from '@/components/ui/Label';

export function ServiceSection({
  id,
  eyebrow,
  title,
  description,
  muted = false,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  muted?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`mx-auto grid max-w-6xl gap-10 border-x border-brand-gray-200 px-6 py-16 lg:grid-cols-[0.75fr_1.25fr] lg:px-8 ${
        muted ? 'bg-brand-gray-100' : 'bg-brand-white'
      }`}
    >
      <div>
        <Label>{eyebrow}</Label>
        <h2 className="font-display text-3xl font-bold tracking-tight text-brand-black">{title}</h2>
        <p className="mt-4 text-brand-gray-600">{description}</p>
      </div>
      <div className="grid gap-4">{children}</div>
    </section>
  );
}

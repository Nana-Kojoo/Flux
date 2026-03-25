import { Label } from '@/components/ui/Label';

const steps = [
  {
    title: 'Discover the gap',
    description: 'We start by clarifying product goals, bottlenecks, and what success should look like in the next release cycle.',
  },
  {
    title: 'Design the lean path',
    description: 'We define the right feature scope, technical approach, and delivery rhythm instead of overbuilding too early.',
  },
  {
    title: 'Build and validate',
    description: 'We ship working increments, tighten quality, and keep the project grounded in practical outcomes.',
  },
];

export function HowItWorks() {
  return (
    <section className="bg-brand-gray-100 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Label>How it works</Label>
        <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight text-brand-black">Simple process. Clear communication. Useful outcomes.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="border border-brand-gray-200 bg-brand-white p-8">
              <span className="text-sm font-bold text-brand-gray-400">0{index + 1}</span>
              <h3 className="mt-4 font-display text-2xl font-bold text-brand-black">{step.title}</h3>
              <p className="mt-4 text-sm text-brand-gray-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Label } from '@/components/ui/Label';

const principles = [
  {
    title: 'Talent over credentials',
    description: 'We look for curiosity, care, and craft — not just certificates. The best contributors often come from unexpected places.',
  },
  {
    title: 'Learn while you build',
    description: 'Emerging contributors grow fastest when they work on real problems with real stakes. We create the structure that makes that possible.',
  },
  {
    title: 'Quality stays non-negotiable',
    description: 'Guided talent does not mean compromised output. Every contributor works within a clear process that protects the end result.',
  },
];

export function StudentNetwork() {
  return (
    <section className="border-y border-brand-gray-200 bg-brand-gray-100 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">

          <div>
            <Label>Our network</Label>
            <h2 className="font-display text-4xl font-bold tracking-tight text-brand-black">
              Built with a student-powered network mindset.
            </h2>
            <p className="mt-6 text-brand-gray-600">
              We believe emerging talent, when guided well, can contribute meaningfully to product delivery and quality. That mindset shapes how we grow, hire, and collaborate — giving the next generation real experience while delivering real value to clients.
            </p>
            <div className="mt-8 border-l-2 border-brand-black pl-5">
              <p className="text-sm italic text-brand-gray-600">
                &ldquo;The best way to build a great studio is to grow great people inside it.&rdquo;
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-brand-gray-400">— Flux</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {principles.map((p) => (
              <div key={p.title} className="border border-brand-gray-200 bg-brand-white p-6">
                <h3 className="font-display text-lg font-bold text-brand-black">{p.title}</h3>
                <p className="mt-2 text-sm text-brand-gray-600">{p.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

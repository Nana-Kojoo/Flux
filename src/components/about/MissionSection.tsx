import { Label } from '@/components/ui/Label';

const pillars = [
  {
    number: '01',
    title: 'Thoughtful execution',
    description:
      'We focus on shipping the right things in the right order — not just moving fast, but moving clearly.',
  },
  {
    number: '02',
    title: 'Reliable quality',
    description:
      'Quality is built into the delivery process, not bolted on at the end. Testing and clarity come standard.',
  },
  {
    number: '03',
    title: 'Early-stage empathy',
    description:
      'We understand the constraints founders operate under — limited time, limited budget, high stakes.',
  },
];

const stats = [
  { value: '12+', label: 'Projects delivered' },
  { value: '3', label: 'Service tracks' },
  { value: '100%', label: 'Remote-friendly' },
  { value: '2', label: 'Co-founders' },
];

export function MissionSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <Label>Mission</Label>
          <h2 className="font-display text-4xl font-bold tracking-tight text-brand-black lg:text-5xl">
            Help ambitious teams build useful products with more structure and less waste.
          </h2>
          <p className="mt-6 text-brand-gray-600">
            Flux exists to support founders who need thoughtful execution, reliable quality practices, and a partner who understands early-stage constraints. We are not a big agency — we are a lean partner that moves with you.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-px border border-brand-gray-200 bg-brand-gray-200">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-brand-white px-6 py-5">
                <span className="block font-display text-3xl font-extrabold tracking-tight text-brand-black">{stat.value}</span>
                <span className="mt-1 block text-xs font-medium uppercase tracking-[0.14em] text-brand-gray-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div className="flex flex-col gap-4">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="border border-brand-gray-200 bg-brand-gray-100 p-6">
              <span className="text-xs font-bold text-brand-gray-400">{pillar.number}</span>
              <h3 className="mt-2 font-display text-xl font-bold text-brand-black">{pillar.title}</h3>
              <p className="mt-2 text-sm text-brand-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

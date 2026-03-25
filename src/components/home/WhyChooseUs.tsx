import { Zap, RefreshCw, Compass, Users } from 'lucide-react';
import { Label } from '@/components/ui/Label';

const points = [
  { icon: Zap, text: 'Lean execution without agency bloat' },
  { icon: RefreshCw, text: 'Product and QA thinking in the same delivery loop' },
  { icon: Compass, text: 'Comfortable working with early-stage ambiguity' },
  { icon: Users, text: 'Clear collaboration with founders and small teams' },
];

export function WhyChooseUs() {
  return (
    <section className="bg-brand-black py-24 text-brand-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Label>Why choose us</Label>
        <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight">A thoughtful partner for teams that need clarity and momentum.</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {points.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-4 border border-brand-gray-800 px-6 py-5">
              <Icon size={18} className="mt-0.5 shrink-0 text-brand-gray-400" />
              <span className="text-sm text-brand-gray-100">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

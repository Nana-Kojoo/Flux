import { Button } from '@/components/ui/Button';
import { Label } from '@/components/ui/Label';
import { ClientsBanner } from '@/components/home/ClientsBanner';

export function Hero() {
  return (
    <section className="relative flex h-[calc(100vh-68px)] flex-col overflow-hidden border-b border-brand-gray-200 bg-brand-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(10,10,10,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,10,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="relative mx-auto flex-1 grid max-w-6xl gap-16 px-6 py-16 lg:grid-cols-[1.3fr_0.7fr] lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <Label>Software development & QA</Label>
          <h1 className="max-w-4xl font-display text-5xl font-extrabold tracking-[-0.04em] text-brand-black sm:text-6xl lg:text-7xl">
            We build products startups rely on.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-brand-gray-600">
              Flux partners with founders to turn ideas into practical digital products, then strengthen delivery with thoughtful QA systems.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">
              Start a project
            </Button>
            <Button href="/projects" size="lg" variant="secondary">
              View our work
            </Button>
          </div>

                  <div className="mt-8 flex items-center gap-3">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                    <p className="text-sm text-brand-gray-600">
                      Now in beta:{' '}
                      <a href="#products" className="font-semibold text-brand-black underline-offset-2 hover:underline">
                          API
                      </a>{' '}
                      — our QA workflow tool for lean teams.
                    </p>
                  </div>
        </div>

        <div className="grid content-center gap-6 border-l border-brand-gray-200 pl-0 lg:pl-10">
          <div>
            <span className="block font-display text-4xl font-extrabold text-brand-black">12+</span>
            <span className="text-sm uppercase tracking-[0.18em] text-brand-gray-400">Projects supported</span>
          </div>
          <div>
            <span className="block font-display text-4xl font-extrabold text-brand-black">3</span>
            <span className="text-sm uppercase tracking-[0.18em] text-brand-gray-400">Core service tracks</span>
          </div>
          <div>
            <span className="block font-display text-4xl font-extrabold text-brand-black">1</span>
            <span className="text-sm uppercase tracking-[0.18em] text-brand-gray-400">Lean partner for delivery</span>
          </div>
        </div>
      </div>
      <ClientsBanner />
    </section>
  );
}

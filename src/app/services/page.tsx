import { Button } from '@/components/ui/Button';
import { DetailCard } from '@/components/services/DetailCard';
import { ServiceSection } from '@/components/services/ServiceSection';
import { services } from '@/data/services';

const bulletDescriptions: Record<string, string> = {
  'Landing pages and MVPs': 'Lean, conversion-focused products designed to validate ideas quickly and support fast iteration.',
  'Internal dashboards': 'Operational tools that simplify internal workflows and provide clear visibility into key metrics.',
  'Performance-focused frontends': 'Frontend experiences optimized for speed, reliability, and high user retention.',
  'Cross-platform delivery': 'Consistent user experience across iOS and Android while maintaining efficient development cycles.',
  'UX-driven iterations': 'Structured testing and feedback loops that improve usability and product adoption over time.',
  'Product analytics readiness': 'Tracking foundations and event strategy to support informed product decisions.',
  'Test planning': 'Clear testing scope and release criteria aligned with business risk and engineering velocity.',
  'Regression coverage': 'Reliable verification routines that reduce repeat bugs and protect critical user flows.',
  'Automation foundations': 'Practical automation setup for repetitive checks so teams can ship with greater confidence.',
  'Product strategy sessions': 'Focused advisory sessions that sharpen priorities and reduce roadmap uncertainty.',
  'Technical architecture guidance': 'Early architecture direction that avoids expensive rewrites and scales cleanly.',
  'Delivery planning and team workflows': 'Execution systems that improve communication, predictability, and release rhythm.',
};

const deliverySteps = [
  {
    title: 'Discovery and scope',
    description: 'We align on goals, constraints, and what success looks like for the next delivery cycle.',
  },
  {
    title: 'Build and validate',
    description: 'We ship practical increments, maintain quality guardrails, and gather fast feedback.',
  },
  {
    title: 'Handover and momentum',
    description: 'We document decisions, tighten workflows, and leave your team with stronger delivery systems.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-brand-gray-200 bg-brand-black py-24 text-brand-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gray-400">Services</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
            Focused product, engineering, and QA support for startup teams.
          </h1>
          <p className="mt-6 max-w-2xl text-brand-gray-400">
            We help founders build useful software, improve delivery quality, and make better technical decisions without adding unnecessary process.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">
              Start a project
            </Button>
            <Button href="/projects" size="lg" variant="secondary">
              View recent work
            </Button>
          </div>
        </div>
      </section>

      <div className="border-y border-brand-gray-200 py-10">
        {services.map((service, index) => (
          <ServiceSection
            key={service.slug}
            id={service.slug}
            eyebrow={service.category}
            title={service.title}
            description={service.summary}
            muted={index % 2 === 1}
          >
            {service.bullets.map((bullet) => (
              <DetailCard key={bullet} title={bullet} description={bulletDescriptions[bullet] ?? service.description} />
            ))}
          </ServiceSection>
        ))}
      </div>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-4 border border-brand-gray-200 bg-brand-gray-100 p-8 md:grid-cols-3">
          {deliverySteps.map((step, index) => (
            <article key={step.title} className="border border-brand-gray-200 bg-brand-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-gray-400">Step 0{index + 1}</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-brand-black">{step.title}</h3>
              <p className="mt-3 text-sm text-brand-gray-600">{step.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-brand-gray-200 pt-10 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-brand-gray-600">
            Need a custom combination of these services? We can shape a lean engagement model around your current stage and team needs.
          </p>
          <Button href="/contact" size="lg">
            Book discovery call
          </Button>
        </div>
      </section>
    </>
  );
}

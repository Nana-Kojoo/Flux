import { projects } from '@/data/projects';

import { Button } from '@/components/ui/Button';
import { Label } from '@/components/ui/Label';
import { ProjectCard } from '@/components/projects/ProjectCard';

export function ProjectsShowcase() {
  const projectCount = projects.length;
  const categoryCount = new Set(projects.map((project) => project.category)).size;

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div className="grid gap-8 border border-brand-gray-200 bg-brand-gray-100 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:p-10">
        <div>
          <Label>Selected work</Label>
          <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight text-brand-black">Client projects grounded in real startup needs.</h2>
          <p className="mt-4 max-w-2xl text-brand-gray-600">
            From MVP interfaces to QA systems, we ship practical outcomes that help client teams move faster with less release risk.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-px border border-brand-gray-200 bg-brand-gray-200">
          <div className="bg-brand-white px-6 py-5">
            <p className="font-display text-3xl font-extrabold text-brand-black">{projectCount}</p>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-gray-400">Featured projects</p>
          </div>
          <div className="bg-brand-white px-6 py-5">
            <p className="font-display text-3xl font-extrabold text-brand-black">{categoryCount}</p>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-gray-400">Delivery tracks</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <Button href="/projects" variant="secondary">
          Browse projects
        </Button>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

'use client';

import { FilterBar } from '@/components/projects/FilterBar';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { Label } from '@/components/ui/Label';
import { useFilteredProjects } from '@/hooks/useFilteredProjects';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  const { activeFilter, filteredProjects, setActiveFilter } = useFilteredProjects();
  const webCount = projects.filter((project) => project.category === 'Web').length;
  const mobileCount = projects.filter((project) => project.category === 'Mobile').length;
  const qaCount = projects.filter((project) => project.category === 'QA').length;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <Label>Projects</Label>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand-black">Selected client delivery work.</h1>
          <p className="mt-4 max-w-2xl text-brand-gray-600">
            Explore examples of projects we execute for external teams across web, mobile, and quality assurance.
          </p>
        </div>
        <FilterBar activeFilter={activeFilter} onChange={setActiveFilter} />
      </div>

      <div className="mt-10 grid gap-px border border-brand-gray-200 bg-brand-gray-200 sm:grid-cols-4">
        <div className="bg-brand-white px-5 py-4">
          <p className="font-display text-3xl font-extrabold text-brand-black">{projects.length}</p>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-gray-400">All</p>
        </div>
        <div className="bg-brand-white px-5 py-4">
          <p className="font-display text-3xl font-extrabold text-brand-black">{webCount}</p>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-gray-400">Web</p>
        </div>
        <div className="bg-brand-white px-5 py-4">
          <p className="font-display text-3xl font-extrabold text-brand-black">{mobileCount}</p>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-gray-400">Mobile</p>
        </div>
        <div className="bg-brand-white px-5 py-4">
          <p className="font-display text-3xl font-extrabold text-brand-black">{qaCount}</p>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-gray-400">QA</p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

import Link from 'next/link';
import { Project } from '@/types/project';

import { Tag } from '@/components/ui/Tag';

export function ProjectCard({ project }: { project: Project }) {
  const hasImage = Boolean(project.image);

  return (
    <article id={project.slug} className="group flex h-full flex-col overflow-hidden border border-brand-gray-200 bg-brand-white transition hover:-translate-y-1 hover:border-brand-black">
      <div
        className={`relative aspect-[16/10] w-full overflow-hidden border-b border-brand-gray-200 bg-brand-gray-100 bg-cover bg-center ${
          hasImage ? '' : 'bg-[radial-gradient(circle_at_20%_20%,rgba(10,10,10,0.12),transparent_45%),linear-gradient(135deg,#f2f2f2,#e8e8e8)]'
        }`}
        style={hasImage ? { backgroundImage: `url(${project.image})` } : undefined}
      >
        {hasImage ? <div className="absolute inset-0 bg-gradient-to-t from-brand-black/55 via-brand-black/15 to-transparent" /> : null}
        <span className="absolute left-4 top-4 border border-brand-white/50 bg-brand-black/60 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-brand-white">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-display text-2xl font-bold text-brand-black">{project.title}</h3>
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-gray-400">Case study</span>
      </div>
      <p className="mt-3 text-sm text-brand-gray-600">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span key={item} className="border border-brand-gray-200 px-2 py-1 text-xs text-brand-gray-400">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 border-t border-brand-gray-200 pt-5">
        {project.href ? (
          <Link
            href={project.href}
            target={project.href.startsWith('http') ? '_blank' : undefined}
            rel={project.href.startsWith('http') ? 'noreferrer noopener' : undefined}
            className="text-sm font-bold text-brand-black underline-offset-2 transition hover:underline"
          >
            View case study
          </Link>
        ) : (
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-gray-400">Details available on request</p>
        )}
      </div>
      </div>
    </article>
  );
}

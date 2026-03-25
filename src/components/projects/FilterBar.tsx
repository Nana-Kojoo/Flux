'use client';

import { ProjectFilter } from '@/hooks/useFilteredProjects';

const filters: ProjectFilter[] = ['All', 'Web', 'Mobile', 'QA'];

export function FilterBar({ activeFilter, onChange }: { activeFilter: ProjectFilter; onChange: (filter: ProjectFilter) => void }) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          className={[
            'rounded-full border px-4 py-2 text-sm transition',
            activeFilter === filter
              ? 'border-brand-black bg-brand-black text-brand-white'
              : 'border-brand-gray-200 bg-brand-white text-brand-gray-600 hover:border-brand-black hover:text-brand-black',
          ].join(' ')}
          onClick={() => onChange(filter)}
          type="button"
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

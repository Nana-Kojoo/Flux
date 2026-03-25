'use client';

import { useMemo, useState } from 'react';

import { projects } from '@/data/projects';

export type ProjectFilter = 'All' | 'Web' | 'Mobile' | 'QA';

export function useFilteredProjects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return {
    activeFilter,
    filteredProjects,
    setActiveFilter,
  };
}

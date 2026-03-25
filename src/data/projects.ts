import { Project } from '@/types/project';

const caseStudyProjects: Project[] = [
  {
    slug: 'inventoryos',
    title: 'InventoryOS',
    category: 'Web',
    summary: 'A lean inventory dashboard for small operations teams.',
    description: 'InventoryOS centralizes stock updates, supplier tracking, and reporting into one clean interface.',
    tags: ['Operations', 'Dashboard'],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
    image: '/images/projects/inventoryos.svg',
  },
  {
    slug: 'trackit',
    title: 'TrackIt',
    category: 'Mobile',
    summary: 'A mobile-first field activity tracker for distributed teams.',
    description: 'TrackIt helps supervisors monitor daily tasks, progress, and blockers without heavy admin overhead.',
    tags: ['Mobile', 'Productivity'],
    tech: ['React Native', 'Node.js', 'Supabase'],
    image: '/images/projects/trackit.svg',
  },
  {
    slug: 'qa-pipeline',
    title: 'QA Pipeline',
    category: 'QA',
    summary: 'A test automation rollout for a fast-growing SaaS team.',
    description: 'The QA Pipeline engagement improved release confidence with structured regression coverage and CI checks.',
    tags: ['QA', 'Automation'],
    tech: ['Playwright', 'GitHub Actions', 'TypeScript'],
    image: '/images/projects/qa-pipeline.svg',
  },
];

export const projects: Project[] = caseStudyProjects;

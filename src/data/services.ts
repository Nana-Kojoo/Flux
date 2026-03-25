import { Service } from '@/types/service';

export const services: Service[] = [
  {
    slug: 'web-products',
    title: 'Web Product Development',
    category: 'Build',
    summary: 'Launch modern web products without bloated delivery cycles.',
    description: 'We design and build clean, scalable web apps tailored to startups that need traction quickly.',
    bullets: ['Landing pages and MVPs', 'Internal dashboards', 'Performance-focused frontends'],
  },
  {
    slug: 'mobile-experiences',
    title: 'Mobile Experiences',
    category: 'Scale',
    summary: 'Create mobile products users actually want to keep using.',
    description: 'From prototypes to polished releases, we help teams shape useful mobile workflows and interfaces.',
    bullets: ['Cross-platform delivery', 'UX-driven iterations', 'Product analytics readiness'],
  },
  {
    slug: 'quality-assurance',
    title: 'Quality Assurance',
    category: 'Validate',
    summary: 'Reduce release risk with practical quality systems.',
    description: 'We support manual testing, regression planning, and automation strategy to improve release confidence.',
    bullets: ['Test planning', 'Regression coverage', 'Automation foundations'],
  },
  {
    slug: 'consultancy',
    title: 'Consultancy',
    category: 'Build',
    summary: 'Get strategic product and technical guidance for smarter decisions.',
    description: 'We advise founders and teams on roadmap direction, architecture tradeoffs, delivery process, and execution priorities.',
    bullets: ['Product strategy sessions', 'Technical architecture guidance', 'Delivery planning and team workflows'],
  },
];

export type ProductStatus = 'Live' | 'Beta' | 'Coming soon';

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  tags: string[];
  url?: string;
}

export const products: Product[] = [
  {
    slug: 'api',
    name: 'OneKey',
    tagline: 'Universal API Directory · by Flux',
    description:
      'Discover APIs with the context developers need. Search, compare, and shortlist APIs with ratings, package info, difficulty scores, and AI-assisted code examples built into the workflow.',
    status: 'Live',
    tags: ['API discovery', 'Developer tools', 'Directory'],
    url: 'https://onekey1.vercel.app',
  },
  {
    slug: 'flowdesk',
    name: 'Flowdesk',
    tagline: 'Delivery clarity for startup founders.',
    description:
      'A focused delivery dashboard that gives founders visibility into sprint progress, blockers, and release health — without the noise of full-blown project management tools.',
    status: 'Coming soon',
    tags: ['Productivity', 'Dashboard', 'SaaS'],
  },
  {
    slug: 'trackform',
    name: 'Trackform',
    tagline: 'Collect feedback. Close the loop.',
    description:
      'An embeddable feedback and bug triage widget that captures user reports and routes them directly into your delivery workflow.',
    status: 'Coming soon',
    tags: ['Feedback', 'Widget', 'Integration'],
  },
];

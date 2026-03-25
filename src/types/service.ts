export interface Service {
  slug: string;
  title: string;
  category: 'Build' | 'Scale' | 'Validate';
  summary: string;
  description: string;
  bullets: string[];
}

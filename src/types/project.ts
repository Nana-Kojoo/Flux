export interface Project {
  slug: string;
  title: string;
  category: 'Web' | 'Mobile' | 'QA';
  summary: string;
  description: string;
  tags: string[];
  tech: string[];
  image?: string;
  href?: string;
}

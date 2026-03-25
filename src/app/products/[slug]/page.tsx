import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Button } from '@/components/ui/Button';
import { Label } from '@/components/ui/Label';
import { products } from '@/data/products';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    return {
      title: 'Product | Flux',
    };
  }

  return {
    title: `${product.name} | Flux`,
    description: product.description,
  };
}

const statusStyles = {
  Live: 'border border-green-500/40 bg-green-500/10 text-green-400',
  Beta: 'border border-amber-500/40 bg-amber-500/10 text-amber-400',
  'Coming soon': 'border border-brand-gray-600 bg-brand-gray-800 text-brand-gray-400',
} as const;

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <Label>Product</Label>
        <Link href="/#products" className="text-sm font-semibold text-brand-gray-500 transition hover:text-brand-black">
          Back to products
        </Link>
      </div>

      <article className="mt-4 border border-brand-gray-200 bg-brand-white p-8 lg:p-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gray-400">Software</p>
            <h1 className="mt-3 font-display text-5xl font-extrabold tracking-tight text-brand-black">{product.name}</h1>
            <p className="mt-3 text-sm font-medium text-brand-gray-500">{product.tagline}</p>
          </div>
          <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[product.status]}`}>
            {product.status}
          </span>
        </div>

        <p className="mt-8 max-w-3xl text-brand-gray-600">{product.description}</p>

        <div className="mt-7 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span key={tag} className="border border-brand-gray-200 px-3 py-1 text-xs text-brand-gray-500">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4 border-t border-brand-gray-200 pt-7">
          <Button href="/contact" size="lg">
            Request access
          </Button>
          <Button href="/projects" size="lg" variant="secondary">
            View related work
          </Button>
        </div>
      </article>
    </section>
  );
}

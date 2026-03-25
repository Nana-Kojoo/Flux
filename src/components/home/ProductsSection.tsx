import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products, type ProductStatus } from '@/data/products';
import { Label } from '@/components/ui/Label';

const statusStyles: Record<ProductStatus, string> = {
  Live: 'border border-green-500/40 bg-green-500/10 text-green-400',
  Beta: 'border border-amber-500/40 bg-amber-500/10 text-amber-400',
  'Coming soon': 'border border-brand-gray-600 bg-brand-gray-800 text-brand-gray-400',
};

export function ProductsSection() {
  return (
    <section id="products" className="border-t border-brand-gray-200 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Label>Our products</Label>
            <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight text-brand-black">
              Tools we build and use ourselves.
            </h2>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.15em] text-brand-gray-400">
              Live public access is currently available for OneKey only.
            </p>
          </div>
          <p className="max-w-sm text-brand-gray-600">
            These are internal products operated as a separate product arm of the studio, including ownership of subscriptions, payments, and ongoing product operations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article key={product.slug} className="flex flex-col overflow-hidden border border-brand-gray-200">
              {/* Dark header */}
              <div className="bg-brand-black p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-extrabold text-brand-white">{product.name}</h3>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[product.status]}`}
                  >
                    {product.status}
                  </span>
                </div>
                <p className="mt-2 text-sm text-brand-gray-400">{product.tagline}</p>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-8">
                <p className="flex-1 text-sm text-brand-gray-600">{product.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span key={tag} className="border border-brand-gray-200 px-3 py-1 text-xs text-brand-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 border-t border-brand-gray-200 pt-6">
                  {product.url ? (
                    <Link
                      href={product.url}
                      target={product.url.startsWith('http') ? '_blank' : undefined}
                      rel={product.url.startsWith('http') ? 'noreferrer noopener' : undefined}
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand-black transition-all hover:gap-3"
                    >
                      Visit <ArrowRight size={14} />
                    </Link>
                  ) : (
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-gray-400">In development</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

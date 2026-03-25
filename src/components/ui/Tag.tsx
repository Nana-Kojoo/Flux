import { ReactNode } from 'react';

export function Tag({ children }: { children: ReactNode }) {
  return <span className="inline-flex rounded-full bg-brand-gray-100 px-3 py-1 text-xs font-medium text-brand-gray-600">{children}</span>;
}

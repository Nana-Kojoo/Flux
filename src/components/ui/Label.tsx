import { ReactNode } from 'react';

export function Label({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 text-xs font-display font-bold uppercase tracking-[0.2em] text-brand-gray-400">
      <span className="h-px w-8 bg-brand-gray-400" />
      <span>{children}</span>
    </div>
  );
}

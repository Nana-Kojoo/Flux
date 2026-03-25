interface BrandLoaderProps {
  label?: string;
  fullscreen?: boolean;
}

export function BrandLoader({ label = 'Loading next page', fullscreen = false }: BrandLoaderProps) {
  const containerClasses = fullscreen
    ? 'fixed inset-0 z-[70] flex items-center justify-center bg-brand-white/92 backdrop-blur-sm'
    : 'flex items-center justify-center';

  return (
    <div className={containerClasses} aria-live="polite" aria-busy="true" role="status">
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="brand-loader-shell">
          <div className="brand-loader-ring brand-loader-ring--outer" />
          <div className="brand-loader-ring brand-loader-ring--inner" />
          <div className="brand-loader-core">
            <span className="brand-loader-dot" />
            <span className="brand-loader-dot brand-loader-dot--delay-1" />
            <span className="brand-loader-dot brand-loader-dot--delay-2" />
          </div>
        </div>

        <div>
          <p className="font-display text-base font-bold tracking-[0.16em] text-brand-black uppercase">Flux loading</p>
          <p className="mt-2 max-w-xs text-sm text-brand-gray-500">{label}</p>
        </div>
      </div>
    </div>
  );
}
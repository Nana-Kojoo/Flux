export function DetailCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="group border border-brand-gray-200 bg-brand-white p-6 transition hover:-translate-y-0.5 hover:border-brand-black">
      <div className="flex items-start gap-3">
        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-black" />
        <div>
          <h3 className="font-display text-xl font-bold text-brand-black">{title}</h3>
          <p className="mt-3 text-sm text-brand-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

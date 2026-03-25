const clientLogos = [
  { name: 'KinKan', href: 'https://kinkan.org/' },
  { name: 'SHIKA' },
  { name: 'SwiftMed' },
  { name: 'NexaRetail' },
];

export function ClientsBanner() {
  return (
    <section className="border-y border-brand-gray-200 bg-brand-gray-100 py-8">
      <div className="mx-auto max-w-6xl px-6 lg:px-8" aria-label="Client logos banner">
        <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-brand-gray-400">Clients & collaborators</p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {clientLogos.map((client) => (
            client.href ? (
              <a
                key={client.name}
                href={client.href}
                className="clients-logo-item transition hover:border-brand-black hover:text-brand-black"
                target="_blank"
                rel="noreferrer"
              >
                <span className="clients-logo-dot" />
                <span>{client.name}</span>
              </a>
            ) : (
              <span key={client.name} className="clients-logo-item cursor-default">
                <span className="clients-logo-dot" />
                <span>{client.name}</span>
              </span>
            )
          ))}
        </div>
      </div>
    </section>
  );
}

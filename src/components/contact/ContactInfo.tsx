import { Clock, Github, Linkedin, Mail, MapPin, MessageCircle, Twitter } from 'lucide-react';

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/Flux',
    icon: Linkedin,
    handle: '@Flux',
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com/Flux',
    icon: Twitter,
    handle: '@Flux',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Flux',
    icon: Github,
    handle: 'Flux',
  },
];

export function ContactInfo() {
  return (
    <aside className="flex flex-col gap-0 divide-y divide-brand-gray-200 border border-brand-gray-200 bg-brand-white">

      {/* Intro */}
      <div className="bg-brand-black p-8">
        <p className="font-display text-2xl font-bold text-brand-white">Let's talk</p>
        <p className="mt-2 text-sm text-brand-gray-400">
          We typically respond within one business day. No pushy sales calls — just a focused conversation about your project.
        </p>
      </div>

      {/* Email */}
      <div className="flex items-start gap-4 p-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-brand-gray-200 bg-brand-gray-100">
          <Mail size={16} strokeWidth={1.5} className="text-brand-black" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gray-400">Email</p>
          <a href="mailto:hello@Flux.com" className="mt-1 block text-sm font-semibold text-brand-black transition hover:text-brand-gray-600">
            hello@Flux.com
          </a>
        </div>
      </div>

      {/* Response time */}
      <div className="flex items-start gap-4 p-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-brand-gray-200 bg-brand-gray-100">
          <MessageCircle size={16} strokeWidth={1.5} className="text-brand-black" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gray-400">Response time</p>
          <p className="mt-1 text-sm text-brand-gray-600">Within 24 hours on business days</p>
        </div>
      </div>

      {/* Hours */}
      <div className="flex items-start gap-4 p-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-brand-gray-200 bg-brand-gray-100">
          <Clock size={16} strokeWidth={1.5} className="text-brand-black" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gray-400">Hours</p>
          <p className="mt-1 text-sm text-brand-gray-600">Mon – Fri, 9:00 AM – 5:00 PM GMT</p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-start gap-4 p-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-brand-gray-200 bg-brand-gray-100">
          <MapPin size={16} strokeWidth={1.5} className="text-brand-black" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gray-400">Based in</p>
          <p className="mt-1 text-sm text-brand-gray-600">Accra, Ghana · Remote-friendly</p>
        </div>
      </div>

      {/* Social */}
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gray-400">Follow us</p>
        <div className="mt-4 flex flex-col gap-3">
          {socials.map(({ label, href, icon: Icon, handle }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border border-brand-gray-200 bg-brand-gray-100 px-4 py-3 transition hover:border-brand-black hover:bg-brand-black"
            >
              <div className="flex items-center gap-3">
                <Icon size={16} strokeWidth={1.5} className="text-brand-black transition group-hover:text-brand-white" />
                <span className="text-sm font-semibold text-brand-black transition group-hover:text-brand-white">{label}</span>
              </div>
              <span className="text-xs text-brand-gray-400 transition group-hover:text-brand-gray-200">{handle}</span>
            </a>
          ))}
        </div>
      </div>

    </aside>
  );
}

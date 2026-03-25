import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { Label } from '@/components/ui/Label';

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <Label>Contact</Label>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h1 className="font-display text-5xl font-extrabold tracking-tight text-brand-black">Tell us what you are building.</h1>
          <p className="mt-4 max-w-2xl text-brand-gray-600">
            Share your product goals, timeline, and the kind of support you need. We will respond with the next best step.
          </p>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
        <ContactInfo />
      </div>
    </section>
  );
}

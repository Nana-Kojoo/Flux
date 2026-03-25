'use client';

import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';

import { services } from '@/data/services';
import { ContactPayload } from '@/types/contact';

import { Button } from '@/components/ui/Button';

const initialState: ContactPayload = {
  name: '',
  email: '',
  company: '',
  service: services[0]?.title ?? '',
  description: '',
  budget: '',
  timeline: '',
};

export function ContactForm() {
  const [formData, setFormData] = useState<ContactPayload>(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Unable to submit the form.');
      }

      setStatus('success');
      setMessage('Thanks — your request has been received.');
      setFormData(initialState);
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong.');
    }
  }

  function updateField<Key extends keyof ContactPayload>(field: Key, value: ContactPayload[Key]) {
    setFormData((current) => ({ ...current, [field]: value }));
  }

  function handleInputChange<Key extends keyof ContactPayload>(field: Key) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      updateField(field, event.target.value as ContactPayload[Key]);
    };
  }

  return (
    <form className="grid gap-5 border border-brand-gray-200 bg-brand-white p-8" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-brand-gray-600">
          Name
          <input className="border border-brand-gray-200 px-4 py-3 outline-none focus:border-brand-black" value={formData.name} onChange={handleInputChange('name')} />
        </label>
        <label className="grid gap-2 text-sm text-brand-gray-600">
          Email
          <input className="border border-brand-gray-200 px-4 py-3 outline-none focus:border-brand-black" type="email" value={formData.email} onChange={handleInputChange('email')} />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-brand-gray-600">
          Company
          <input className="border border-brand-gray-200 px-4 py-3 outline-none focus:border-brand-black" value={formData.company} onChange={handleInputChange('company')} />
        </label>
        <label className="grid gap-2 text-sm text-brand-gray-600">
          Service
          <select className="border border-brand-gray-200 px-4 py-3 outline-none focus:border-brand-black" value={formData.service} onChange={handleInputChange('service')}>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-brand-gray-600">
          Budget
          <input className="border border-brand-gray-200 px-4 py-3 outline-none focus:border-brand-black" value={formData.budget} onChange={handleInputChange('budget')} />
        </label>
        <label className="grid gap-2 text-sm text-brand-gray-600">
          Timeline
          <input className="border border-brand-gray-200 px-4 py-3 outline-none focus:border-brand-black" value={formData.timeline} onChange={handleInputChange('timeline')} />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-brand-gray-600">
        Project details
        <textarea className="min-h-40 border border-brand-gray-200 px-4 py-3 outline-none focus:border-brand-black" value={formData.description} onChange={handleInputChange('description')} />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button disabled={status === 'submitting'} type="submit">
          {status === 'submitting' ? 'Sending...' : 'Send request'}
        </Button>
        {message ? <p className={status === 'error' ? 'text-sm text-red-600' : 'text-sm text-green-600'}>{message}</p> : null}
      </div>
    </form>
  );
}

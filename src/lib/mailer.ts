import { Resend } from 'resend';

import { ContactInput } from '@/lib/validations';

type MailResult =
  | { sent: true }
  | {
      sent: false;
      reason: string;
    };

export async function sendContactNotification(payload: ContactInput): Promise<MailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFICATION_EMAIL;

  if (!apiKey || !to) {
    return { sent: false, reason: 'Email settings not configured.' };
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from: 'Flux <onboarding@resend.dev>',
    to,
    subject: `New contact request from ${payload.name}`,
    replyTo: payload.email,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Company: ${payload.company || 'N/A'}`,
      `Service: ${payload.service}`,
      `Budget: ${payload.budget || 'N/A'}`,
      `Timeline: ${payload.timeline || 'N/A'}`,
      '',
      payload.description,
    ].join('\n'),
  });

  return { sent: true };
}

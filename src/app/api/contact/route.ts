import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

import { db } from '@/lib/db';
import { sendContactNotification } from '@/lib/mailer';
import { contactSchema } from '@/lib/validations';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = contactSchema.parse(body);

    if (process.env.DATABASE_URL) {
      await db.contactRequest.create({
        data: {
          name: payload.name,
          email: payload.email,
          company: payload.company || null,
          service: payload.service,
          description: payload.description,
          budget: payload.budget || null,
          timeline: payload.timeline || null,
        },
      });
    }

    const mailResult = await sendContactNotification(payload);
    if (!mailResult.sent) {
      return NextResponse.json({ error: mailResult.reason }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: 'Invalid form input.', details: error.flatten() }, { status: 422 });
    }

    return NextResponse.json({ error: 'Unable to process request.' }, { status: 500 });
  }
}

import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  email: z.string().email('A valid email is required.'),
  company: z.string().optional().or(z.literal('')),
  service: z.string().min(2, 'Please select a service.'),
  description: z.string().min(10, 'Tell us a bit more about your project.'),
  budget: z.string().optional().or(z.literal('')),
  timeline: z.string().optional().or(z.literal('')),
});

export type ContactInput = z.infer<typeof contactSchema>;

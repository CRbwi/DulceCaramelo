'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContactForm(formData: {
  name: string;
  email: string;
  message: string;
}) {
  const parsed = contactSchema.safeParse(formData);

  if (!parsed.success) {
    return { success: false, message: 'Datos inválidos.' };
  }

  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log it and simulate a success response.
  console.log('New contact form submission:', parsed.data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, message: '¡Mensaje recibido!' };
}

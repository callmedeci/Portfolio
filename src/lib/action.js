'use server';

import { contactSchema, emailAddressFormSchema } from '@/validation/validation';

export async function sendContactMessage(prevState, formData) {
  try {
    const formObj = Object.fromEntries([...formData]);

    const validatedFileds = contactSchema.safeParse(formObj);

    if (!validatedFileds.success)
      return {
        ...prevState,
        data: { ...prevState, ...formObj },
        zodErrors: validatedFileds.error.flatten(),
      };

    const payload = {
      content: `**New Contact Form Submission**\n\n**Name:** ${formObj.name}\n**Email:** ${formObj.email}\n**Message:**\n${formData.message}`,
    };

    const response = await fetch(process.env.DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response) throw new Error('Failed to send your message');
  } catch (error) {
    throw error;
  }
}

export async function sendEmailAddress(prevState, formData) {
  try {
    const formObj = Object.fromEntries([...formData]);

    const validatedFields = emailAddressFormSchema.safeParse(formObj);

    if (!validatedFields.success)
      return {
        ...prevState,
        data: { ...prevState, formObj },
        zodErrors: validatedFields.error.flatten(),
      };

    const payload = {
      content: `**New Email Address**\n\n**email:** ${formObj.email}`,
    };

    const response = await fetch(process.env.DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response) throw new Error('Failed to send your message');
  } catch (error) {
    throw error;
  }
}

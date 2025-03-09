'use server';

export async function sendContactMessage(formData) {
  try {
    const payload = {
      content: `**New Contact Form Submission**\n\n**Name:** ${formData.get(
        'name'
      )}\n**Email:** ${formData.get('email')}\n**Message:**\n${formData.get(
        'message'
      )}`,
    };

    await fetch(process.env.DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    throw error;
  }
}

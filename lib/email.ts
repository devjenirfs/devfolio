// Email configuration for Resend
// 1. Go to https://resend.com
// 2. Sign up and get your API key
// 3. Add to .env.local: RESEND_API_KEY=your_api_key_here

export async function sendEmailWithResend(data: {
  name: string;
  email: string;
  message: string;
}) {
  // Check if API key is configured
  if (!process.env.RESEND_API_KEY) {
    console.log("RESEND_API_KEY not configured. Email not sent.");
    console.log("Contact form data:", data);
    return { success: true }; // Simulate success for development
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Change this to your domain
      to: ['jenifferap@gmail.com'], // Your email
      subject: `New contact from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to send email');
  }

  return response.json();
}

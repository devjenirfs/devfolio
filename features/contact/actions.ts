"use server";

import { contactFormSchema, type ContactFormData } from "./schema";

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate the form data
    const validatedData = contactFormSchema.parse(data);
    
    // Here you would typically:
    // 1. Send email using a service like Resend, SendGrid, or Nodemailer
    // 2. Save to database
    // 3. Send notification to admin
    
    // For now, we'll just log the data
    console.log("Contact form submission:", validatedData);
    
    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Contact form error:", error);
    
    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again.",
    };
  }
}

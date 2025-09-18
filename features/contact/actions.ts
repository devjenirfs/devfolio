"use server";

import { contactFormSchema, type ContactFormData } from "./schema";
import { sendEmailWithResend } from "@/lib/email";

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate the form data
    const validatedData = contactFormSchema.parse(data);
    
    // Send email using Resend (you can change this to EmailJS or Nodemailer)
    await sendEmailWithResend(validatedData);
    
    // Log successful submission
    console.log("Contact form submission:", validatedData);
    
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

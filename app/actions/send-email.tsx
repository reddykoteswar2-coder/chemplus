"use server"

import { Resend } from "resend"
import { config } from "@/lib/config"
import {
  type ContactFormData,
  generateContactEmailTemplate,
  generateContactEmailSubject,
  getEmailConfig,
} from "@/lib/email"

export async function sendContactEmail(data: ContactFormData) {
  try {
    if (!config.resendApiKey) {
      console.error("RESEND_API_KEY is not configured")
      return { success: false, error: "Email service is not configured" }
    }
    // Created per request so a missing key doesn't crash the build or module load
    const resend = new Resend(config.resendApiKey)
    const emailConfig = getEmailConfig()
    
    // This will send from configured email, and replies go to the visitor's email
    const result = await resend.emails.send({
      from: emailConfig.from,
      to: emailConfig.to,
      replyTo: data.email,
      subject: generateContactEmailSubject(data.fullName),
      html: generateContactEmailTemplate(data),
    })

    if (result.error) {
      console.error("Resend error:", result.error)
      return { success: false, error: "Failed to send email" }
    }

    return { success: true, data: result.data }
  } catch (error) {
    console.error("Email error:", error)
    return { success: false, error: "An error occurred while sending the email" }
  }
}

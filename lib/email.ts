/**
 * Email utility module
 * Centralizes email-related functionality
 */

import { config } from './config'

export interface ContactFormData {
  fullName: string
  email: string
  phone: string
  message: string
}

/**
 * Generate HTML email template for contact form submissions
 */
export function generateContactEmailTemplate(data: ContactFormData): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1E40AF;">New Contact Form Submission</h2>
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${escapeHtml(data.fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 4px;">${escapeHtml(data.message)}</p>
      </div>
      <p style="color: #666; font-size: 12px; margin-top: 20px;">
        This is an automated message from ChemPlus Pharma website contact form.
      </p>
    </div>
  `
}

/**
 * Generate email subject for contact form
 */
export function generateContactEmailSubject(fullName: string): string {
  return `New Contact Form Submission from ${fullName}`
}

/**
 * Escape HTML to prevent XSS attacks
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

/**
 * Get email configuration
 */
export function getEmailConfig() {
  return {
    from: config.email.from,
    to: config.email.to,
  }
}

/**
 * Application configuration module
 * Centralizes environment variable access and validation
 */

interface AppConfig {
  // Server configuration
  nodeEnv: string
  port: number
  hostname: string
  
  // API Keys
  resendApiKey: string
  
  // Email configuration
  email: {
    from: string
    to: string
  }
  
  // Application URLs
  appUrl: string
  publicAppUrl: string
}

function getEnvVar(key: string, defaultValue?: string): string {
  const value = process.env[key]
  if (!value && !defaultValue) {
    throw new Error(`Missing required environment variable: ${key}`)
  }
  return value || defaultValue || ''
}

function getEnvVarNumber(key: string, defaultValue: number): number {
  const value = process.env[key]
  if (!value) return defaultValue
  const parsed = parseInt(value, 10)
  if (isNaN(parsed)) {
    console.warn(`Invalid number for ${key}, using default: ${defaultValue}`)
    return defaultValue
  }
  return parsed
}

export const config: AppConfig = {
  nodeEnv: getEnvVar('NODE_ENV', 'development'),
  port: getEnvVarNumber('PORT', 3000),
  hostname: getEnvVar('HOSTNAME', '0.0.0.0'),
  
  resendApiKey: process.env.RESEND_API_KEY || '',
  
  email: {
    from: getEnvVar('EMAIL_FROM', 'onboarding@resend.dev'),
    to: getEnvVar('EMAIL_TO', 'admin@chempluspharma.com'),
  },
  
  appUrl: getEnvVar('APP_URL', 'http://localhost:3000'),
  publicAppUrl: getEnvVar('NEXT_PUBLIC_APP_URL', 'http://localhost:3000'),
}

// Warn (don't throw) so builds without secrets still succeed; send-email handles a missing key
if (config.nodeEnv === 'production' && !config.resendApiKey) {
  console.warn('RESEND_API_KEY is not set; contact form emails will fail')
}

export default config

/**
 * Application constants
 * Centralizes application-wide constants
 */

export const APP_NAME = 'ChemPlus Pharma'
export const APP_DESCRIPTION = 'Wholesale Pharmaceutical Trading | Hyderabad'

// Routes
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PRODUCTS: '/products',
  SERVICES: '/services',
  CONTACT: '/contact',
} as const

// Contact form configuration
export const CONTACT_FORM = {
  MAX_MESSAGE_LENGTH: 5000,
  MAX_NAME_LENGTH: 100,
  MAX_EMAIL_LENGTH: 255,
  MAX_PHONE_LENGTH: 20,
} as const

// API endpoints
export const API_ENDPOINTS = {
  HEALTH: '/api/health',
} as const

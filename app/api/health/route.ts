import { NextResponse } from 'next/server'

/**
 * Health check endpoint for Docker and load balancers
 */
export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'chemplus-pharma',
    },
    { status: 200 }
  )
}

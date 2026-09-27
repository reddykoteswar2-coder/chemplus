/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Standalone output is only needed for Docker/Firebase; Vercel uses its own output
  ...(process.env.VERCEL ? {} : { output: 'standalone' }),
}

export default nextConfig

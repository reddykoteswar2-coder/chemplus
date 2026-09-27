'use client'

import { useEffect, useRef, useState } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
}

interface BokehParticlesProps {
  particleCount?: number
  intensity?: 'low' | 'medium' | 'high'
  className?: string
}

const colors = [
  'rgba(6, 182, 212, 0.4)',   // cyan
  'rgba(20, 184, 166, 0.4)',  // teal
  'rgba(59, 130, 246, 0.3)',  // blue
  'rgba(139, 92, 246, 0.3)',  // purple
  'rgba(168, 85, 247, 0.3)',  // violet
]

export function BokehParticles({ 
  particleCount = 15,
  intensity = 'medium',
  className = ''
}: BokehParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number | null>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const getParticleCount = () => {
    switch (intensity) {
      case 'low': return Math.floor(particleCount * 0.6)
      case 'high': return Math.floor(particleCount * 1.5)
      default: return particleCount
    }
  }

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        const width = window.innerWidth
        const height = window.innerHeight
        setDimensions({ width, height })
        canvasRef.current.width = width
        canvasRef.current.height = height
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const count = getParticleCount()
    const speed = intensity === 'high' ? 0.5 : intensity === 'medium' ? 0.3 : 0.2

    // Initialize particles
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: Math.random() * 120 + 40, // 40-160px
      speedX: (Math.random() - 0.5) * speed,
      speedY: (Math.random() - 0.5) * speed,
      opacity: Math.random() * 0.5 + 0.2, // 0.2-0.7
      color: colors[Math.floor(Math.random() * colors.length)],
    }))

    const animate = () => {
      if (!ctx) return

      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(10, 10, 15, 0.1)'
      ctx.fillRect(0, 0, dimensions.width, dimensions.height)

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > dimensions.width) {
          particle.speedX *= -1
        }
        if (particle.y < 0 || particle.y > dimensions.height) {
          particle.speedY *= -1
        }

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(dimensions.width, particle.x))
        particle.y = Math.max(0, Math.min(dimensions.height, particle.y))

        // Create bokeh effect with radial gradient
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size / 2
        )
        gradient.addColorStop(0, particle.color.replace('0.4', String(particle.opacity)))
        gradient.addColorStop(0.5, particle.color.replace('0.4', String(particle.opacity * 0.5)))
        gradient.addColorStop(1, particle.color.replace('0.4', '0'))

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size / 2, 0, Math.PI * 2)
        ctx.fill()

        // Add glow effect
        ctx.shadowBlur = particle.size * 0.5
        ctx.shadowColor = particle.color
        ctx.fill()
        ctx.shadowBlur = 0
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [dimensions, intensity, particleCount])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ mixBlendMode: 'screen', opacity: 0.6 }}
    />
  )
}


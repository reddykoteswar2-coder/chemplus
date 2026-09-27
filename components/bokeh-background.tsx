"use client"

import { useEffect, useRef } from "react"

interface BokehParticle {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  opacity: number
  baseOpacity: number
  color: string
  blur: number
}

export function BokehBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const particlesRef = useRef<BokehParticle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Color palette for glass bubbles (cyan, teal, blue tones)
    const colors = [
      "rgba(6, 182, 212, 0.15)", // cyan-500
      "rgba(20, 184, 166, 0.15)", // teal-500
      "rgba(14, 165, 233, 0.12)", // sky-500
      "rgba(59, 130, 246, 0.1)",  // blue-500
      "rgba(139, 92, 246, 0.1)",  // violet-500
    ]

    // Create particles
    const createParticles = () => {
      const particles: BokehParticle[] = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000) // Adaptive count

      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 80 + 20 // 20-100px
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const speed = Math.random() * 0.3 + 0.1 // Slow movement
        const angle = Math.random() * Math.PI * 2
        const opacity = Math.random() * 0.3 + 0.1 // 0.1-0.4
        const blur = radius * 0.5 // Blur proportional to size

        particles.push({
          x,
          y,
          radius,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          opacity,
          baseOpacity: opacity,
          color: colors[Math.floor(Math.random() * colors.length)],
          blur,
        })
      }

      particlesRef.current = particles
    }

    createParticles()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < -particle.radius) particle.x = canvas.width + particle.radius
        if (particle.x > canvas.width + particle.radius) particle.x = -particle.radius
        if (particle.y < -particle.radius) particle.y = canvas.height + particle.radius
        if (particle.y > canvas.height + particle.radius) particle.y = -particle.radius

        // Subtle opacity variation for breathing effect
        particle.opacity = particle.baseOpacity + Math.sin(Date.now() * 0.001 + particle.x * 0.01) * 0.05

        // Draw bokeh orb with glow
        ctx.save()

        // Create gradient for the orb
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius
        )

        // Center is brighter, edges fade
        const centerColor = particle.color.replace("0.15", String(particle.opacity * 0.8))
        const edgeColor = particle.color.replace("0.15", "0")

        gradient.addColorStop(0, centerColor)
        gradient.addColorStop(0.5, particle.color.replace("0.15", String(particle.opacity * 0.4)))
        gradient.addColorStop(1, edgeColor)

        // Draw main orb
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Add outer glow (larger, more transparent)
        const glowGradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          particle.radius * 0.7,
          particle.x,
          particle.y,
          particle.radius * 1.5
        )
        glowGradient.addColorStop(0, particle.color.replace("0.15", String(particle.opacity * 0.2)))
        glowGradient.addColorStop(1, particle.color.replace("0.15", "0"))

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius * 1.5, 0, Math.PI * 2)
        ctx.fillStyle = glowGradient
        ctx.fill()

        // Add highlight (small bright spot)
        const highlightGradient = ctx.createRadialGradient(
          particle.x - particle.radius * 0.3,
          particle.y - particle.radius * 0.3,
          0,
          particle.x - particle.radius * 0.3,
          particle.y - particle.radius * 0.3,
          particle.radius * 0.3
        )
        highlightGradient.addColorStop(0, `rgba(255, 255, 255, ${particle.opacity * 0.3})`)
        highlightGradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.beginPath()
        ctx.arc(
          particle.x - particle.radius * 0.3,
          particle.y - particle.radius * 0.3,
          particle.radius * 0.3,
          0,
          Math.PI * 2
        )
        ctx.fillStyle = highlightGradient
        ctx.fill()

        ctx.restore()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  )
}


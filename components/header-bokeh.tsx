"use client"

import { useEffect, useRef } from "react"

interface BokehOrb {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  opacity: number
  baseOpacity: number
  depth: number // 0-1, affects speed and size
  color: string
}

export function HeaderBokeh() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const orbsRef = useRef<BokehOrb[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size to header area
    const resizeCanvas = () => {
      const header = canvas.parentElement
      if (header) {
        canvas.width = header.offsetWidth
        canvas.height = header.offsetHeight
      }
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Color palette - dark blue/purple tones with low opacity
    const colors = [
      "rgba(59, 130, 246, 0.08)",   // blue-500
      "rgba(99, 102, 241, 0.08)",   // indigo-500
      "rgba(139, 92, 246, 0.08)",   // violet-500
      "rgba(168, 85, 247, 0.06)",   // purple-500
      "rgba(6, 182, 212, 0.06)",   // cyan-500
    ]

    // Create orbs
    const createOrbs = () => {
      const orbs: BokehOrb[] = []
      const orbCount = 12 // Fewer orbs for header area

      for (let i = 0; i < orbCount; i++) {
        const depth = Math.random() // 0-1, determines size and speed
        const radius = 30 + depth * 50 // 30-80px, larger = closer
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        
        // Speed based on depth (bigger = faster, smaller = slower)
        const baseSpeed = 0.15
        const speed = baseSpeed * (0.5 + depth * 0.5) // 0.075-0.15
        
        // Diagonal movement with slight variation
        const angle = Math.random() * Math.PI * 0.5 + Math.PI * 0.25 // 45-135 degrees (diagonal)
        const opacity = 0.15 + depth * 0.1 // 0.15-0.25, deeper = more visible

        orbs.push({
          x,
          y,
          radius,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          opacity,
          baseOpacity: opacity,
          depth,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }

      orbsRef.current = orbs
    }

    createOrbs()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      orbsRef.current.forEach((orb) => {
        // Update position with depth-based speed
        orb.x += orb.vx * (0.5 + orb.depth * 0.5)
        orb.y += orb.vy * (0.5 + orb.depth * 0.5)

        // Wrap around edges
        if (orb.x < -orb.radius) orb.x = canvas.width + orb.radius
        if (orb.x > canvas.width + orb.radius) orb.x = -orb.radius
        if (orb.y < -orb.radius) orb.y = canvas.height + orb.radius
        if (orb.y > canvas.height + orb.radius) orb.y = -orb.radius

        // Very subtle opacity variation
        orb.opacity = orb.baseOpacity + Math.sin(Date.now() * 0.0005 + orb.x * 0.01) * 0.02

        ctx.save()

        // Create radial gradient for glass sphere effect
        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius
        )

        // Bright center, darker edges (glass sphere)
        const centerOpacity = orb.opacity * 1.2
        const midOpacity = orb.opacity * 0.6
        const edgeOpacity = orb.opacity * 0.1

        gradient.addColorStop(0, orb.color.replace("0.08", String(Math.min(centerOpacity, 0.3))))
        gradient.addColorStop(0.4, orb.color.replace("0.08", String(midOpacity)))
        gradient.addColorStop(0.8, orb.color.replace("0.08", String(edgeOpacity)))
        gradient.addColorStop(1, orb.color.replace("0.08", "0"))

        // Draw main orb
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Add soft outer glow
        const glowGradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          orb.radius * 0.8,
          orb.x,
          orb.y,
          orb.radius * 1.8
        )
        glowGradient.addColorStop(0, orb.color.replace("0.08", String(orb.opacity * 0.15)))
        glowGradient.addColorStop(0.5, orb.color.replace("0.08", String(orb.opacity * 0.05)))
        glowGradient.addColorStop(1, orb.color.replace("0.08", "0"))

        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.radius * 1.8, 0, Math.PI * 2)
        ctx.fillStyle = glowGradient
        ctx.fill()

        // Add subtle highlight (glass reflection)
        const highlightGradient = ctx.createRadialGradient(
          orb.x - orb.radius * 0.25,
          orb.y - orb.radius * 0.25,
          0,
          orb.x - orb.radius * 0.25,
          orb.y - orb.radius * 0.25,
          orb.radius * 0.3
        )
        highlightGradient.addColorStop(0, `rgba(255, 255, 255, ${orb.opacity * 0.4})`)
        highlightGradient.addColorStop(0.5, `rgba(255, 255, 255, ${orb.opacity * 0.1})`)
        highlightGradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.beginPath()
        ctx.arc(
          orb.x - orb.radius * 0.25,
          orb.y - orb.radius * 0.25,
          orb.radius * 0.3,
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
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ background: "transparent" }}
    />
  )
}


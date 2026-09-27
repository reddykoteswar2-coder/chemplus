'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlassmorphismCardProps {
  children: ReactNode
  className?: string
  intensity?: 'low' | 'medium' | 'high'
}

export function GlassmorphismCard({ 
  children, 
  className = '',
  intensity = 'medium' 
}: GlassmorphismCardProps) {
  const blurIntensity = {
    low: 'backdrop-blur-md',
    medium: 'backdrop-blur-xl',
    high: 'backdrop-blur-2xl',
  }[intensity]

  const bgOpacity = {
    low: 'bg-black/20',
    medium: 'bg-black/40',
    high: 'bg-black/50',
  }[intensity]

  return (
    <div
      className={cn(
        'relative rounded-2xl border border-white/10',
        bgOpacity,
        blurIntensity,
        'shadow-2xl shadow-cyan-500/10',
        'before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none',
        className
      )}
      style={{
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%)',
      }}
    >
      {children}
    </div>
  )
}


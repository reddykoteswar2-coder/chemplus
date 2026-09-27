'use client'

import { useEffect, useRef } from 'react'

interface AnimatedBlobBackgroundProps {
  className?: string
  intensity?: 'low' | 'medium' | 'high'
}

export function AnimatedBlobBackground({ 
  className = '', 
  intensity = 'medium' 
}: AnimatedBlobBackgroundProps) {
  const blob1Ref = useRef<HTMLDivElement>(null)
  const blob2Ref = useRef<HTMLDivElement>(null)
  const blob3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const blobs = [blob1Ref.current, blob2Ref.current, blob3Ref.current].filter(Boolean) as HTMLDivElement[]
    
    const animateBlobs = () => {
      blobs.forEach((blob, index) => {
        if (!blob) return
        
        const speed = intensity === 'high' ? 0.0003 : intensity === 'medium' ? 0.0002 : 0.0001
        const time = Date.now() * speed + (index * Math.PI * 2) / 3
        
        const x = Math.sin(time) * 100 + 50
        const y = Math.cos(time * 0.7) * 100 + 50
        const scale = 1 + Math.sin(time * 1.5) * 0.2
        
        blob.style.transform = `translate(${x}%, ${y}%) scale(${scale})`
      })
      
      requestAnimationFrame(animateBlobs)
    }
    
    animateBlobs()
  }, [intensity])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Blob 1 - Cyan */}
      <div
        ref={blob1Ref}
        className="absolute w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/30 via-cyan-400/20 to-teal-500/30 rounded-full blur-[100px] opacity-60"
        style={{
          top: '10%',
          left: '10%',
          transition: 'transform 0.1s linear',
        }}
      />
      
      {/* Blob 2 - Teal */}
      <div
        ref={blob2Ref}
        className="absolute w-[600px] h-[600px] bg-gradient-to-br from-teal-500/25 via-cyan-500/20 to-blue-500/25 rounded-full blur-[120px] opacity-50"
        style={{
          bottom: '15%',
          right: '15%',
          transition: 'transform 0.1s linear',
        }}
      />
      
      {/* Blob 3 - Purple/Cyan mix */}
      <div
        ref={blob3Ref}
        className="absolute w-[450px] h-[450px] bg-gradient-to-br from-cyan-400/20 via-teal-400/25 to-cyan-600/20 rounded-full blur-[90px] opacity-55"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.1s linear',
        }}
      />
      
      {/* Additional smaller blobs for depth */}
      <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-cyan-500/15 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-[350px] h-[350px] bg-teal-500/15 rounded-full blur-[85px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
    </div>
  )
}


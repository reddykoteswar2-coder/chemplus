'use client'

import { useEffect, useState, useRef } from 'react'

interface RevealTextProps {
  text: string
  delay?: number
  duration?: number
  className?: string
  color?: string
  loopDelay?: number
}

export function RevealText({
  text,
  delay = 0,
  duration = 1000,
  className = '',
  color = 'text-white',
  loopDelay = 1000,
}: RevealTextProps) {
  const [revealedChars, setRevealedChars] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const chars = text.split('')
    const charDelay = Math.max(40, duration / chars.length)

    const startAnimation = () => {
      setIsAnimating(true)
      setRevealedChars(0)

      // Clear any existing intervals/timeouts
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }

      // Reveal from left to right
      let currentIndex = 0
      intervalRef.current = setInterval(() => {
        currentIndex++
        setRevealedChars(currentIndex)
        
        if (currentIndex >= chars.length) {
          // Animation complete, clear interval
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
          }
          
          // Wait briefly, then hide all at once
          timeoutRef.current = setTimeout(() => {
            setIsAnimating(false)
            setRevealedChars(0)
            
            // Wait then restart from beginning
            timeoutRef.current = setTimeout(() => {
              startAnimation()
            }, loopDelay)
          }, loopDelay)
        }
      }, charDelay)
    }

    // Initial delay before starting
    const initialTimer = setTimeout(() => {
      startAnimation()
    }, delay)

    return () => {
      clearTimeout(initialTimer)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [text, delay, duration, loopDelay])

  return (
    <span className={`inline-block ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={`${text}-${index}`}
          className={`inline-block ${color} ${
            index < revealedChars
              ? 'translate-x-0 opacity-100'
              : 'translate-x-[-20px] opacity-0'
          }`}
          style={{
            transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: isAnimating ? `${index * 45}ms` : '0ms',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}


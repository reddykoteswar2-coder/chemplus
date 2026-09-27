'use client'

import { useEffect, useState, useRef } from 'react'

interface AlternatingRevealProps {
  topText: string
  bottomText: string
  delay?: number
  charDelay?: number
  loopDelay?: number
  topColor?: string
  bottomColor?: string
}

export function AlternatingReveal({
  topText,
  bottomText,
  delay = 0,
  charDelay = 150,
  loopDelay = 1500,
  topColor = 'text-white',
  bottomColor = 'text-cyan-400',
}: AlternatingRevealProps) {
  const [topRevealed, setTopRevealed] = useState(0)
  const [bottomRevealed, setBottomRevealed] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const startAnimation = () => {
      setIsAnimating(true)
      setTopRevealed(0)
      setBottomRevealed(0)

      // Clear any existing timeouts
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }

      let topIndex = 0
      let bottomIndex = 0

      const revealNext = () => {
        // Top: reveal 1 letter at a time
        if (topIndex < topText.length) {
          topIndex++
          setTopRevealed(topIndex)
        }
        
        // Bottom: reveal 2 letters at a time (to match visual size of larger top text)
        if (bottomIndex < bottomText.length) {
          bottomIndex = Math.min(bottomIndex + 2, bottomText.length)
          setBottomRevealed(bottomIndex)
        }
        
        // Continue until both are complete
        if (topIndex < topText.length || bottomIndex < bottomText.length) {
          // Slower delay for left side (first few characters)
          const currentDelay = topIndex <= 3 ? charDelay * 1.5 : charDelay
          timeoutRef.current = setTimeout(revealNext, currentDelay)
        } else {
          // Ensure all characters are revealed before resetting
          setTopRevealed(topText.length)
          setBottomRevealed(bottomText.length)
          // Wait a bit before resetting to show complete text
          timeoutRef.current = setTimeout(() => {
            setTopRevealed(0)
            setBottomRevealed(0)
            topIndex = 0
            bottomIndex = 0
            // Continue immediately with no delay
            timeoutRef.current = setTimeout(revealNext, charDelay * 1.5)
          }, loopDelay)
        }
      }

      // Start revealing with initial delay
      timeoutRef.current = setTimeout(revealNext, charDelay * 1.5)
    }

    // Initial delay
    const initialTimer = setTimeout(() => {
      startAnimation()
    }, delay)

    return () => {
      clearTimeout(initialTimer)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [topText, bottomText, delay, charDelay, loopDelay])

  return (
    <div className="flex flex-col whitespace-nowrap overflow-visible w-fit">
      {/* Top Text */}
      <h3 className="text-base sm:text-lg font-bold leading-tight whitespace-nowrap overflow-visible w-fit">
        <span className="inline-block whitespace-nowrap overflow-visible w-fit">
          {topText.split('').map((char, index) => (
            <span
              key={`top-${index}`}
              className={`inline-block ${topColor} ${
                index < topRevealed
                  ? 'opacity-100'
                  : 'opacity-0'
              }`}
              style={{
                transition: 'opacity 0.7s ease-out',
                display: 'inline-block',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </span>
      </h3>
      
      {/* Bottom Text */}
      <p className="text-xs font-medium h-4 mt-0.5 whitespace-nowrap">
        <span className="inline-block whitespace-nowrap">
          {bottomText.split('').map((char, index) => (
            <span
              key={`bottom-${index}`}
              className={`inline-block ${bottomColor} ${
                index < bottomRevealed
                  ? 'opacity-100'
                  : 'opacity-0'
              }`}
              style={{
                transition: 'opacity 0.7s ease-out',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </span>
      </p>
    </div>
  )
}


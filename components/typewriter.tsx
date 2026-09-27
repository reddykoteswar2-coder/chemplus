"use client"

import { useEffect, useState } from "react"

interface TypewriterProps {
  text: string
  speed?: number
  pauseTime?: number
  className?: string
  showCursor?: boolean
  cursorChar?: string
}

export function Typewriter({
  text,
  speed = 100,
  pauseTime = 2000,
  className = "",
  showCursor = true,
  cursorChar = "|",
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (isTyping && currentIndex < text.length) {
      // Typing forward only
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else if (isTyping && currentIndex === text.length) {
      // Finished typing, reset immediately and start again (continuous)
      const timeout = setTimeout(() => {
        setDisplayedText("")
        setCurrentIndex(0)
      }, speed) // Use same speed for smooth continuous loop

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed, isTyping])

  return (
    <span className={`inline-block relative ${className}`}>
      <span className="invisible inline-block">{text}{showCursor ? cursorChar : ''}</span>
      <span className="absolute top-0 left-0 inline-block">
        {displayedText}
        {showCursor && (
          <span className="inline-block ml-1 animate-blink">
            {cursorChar}
          </span>
        )}
      </span>
    </span>
  )
}

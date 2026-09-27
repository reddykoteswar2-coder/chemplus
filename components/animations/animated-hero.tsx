"use client"

import { motion } from "framer-motion"
import { fadeInUp, textStagger, textItem } from "@/lib/animations"
import { ReactNode } from "react"

interface AnimatedHeroProps {
  children: ReactNode
  className?: string
}

/**
 * Hero section wrapper with staggered text animations
 */
export function AnimatedHero({ children, className = "" }: AnimatedHeroProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={textStagger}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * Animated headline component
 */
export function AnimatedHeadline({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.h1
      variants={textItem}
      className={className}
    >
      {children}
    </motion.h1>
  )
}

/**
 * Animated subtitle component (appears after headline)
 */
export function AnimatedSubtitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.p
      variants={textItem}
      className={className}
    >
      {children}
    </motion.p>
  )
}

/**
 * Animated background gradient with slow parallax movement
 */
export function AnimatedBackground({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
        x: [0, 20, 0],
        y: [0, 20, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

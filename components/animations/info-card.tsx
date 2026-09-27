"use client"

import { motion } from "framer-motion"
import { fadeInUp, cardHover, scaleIn, iconScale } from "@/lib/animations"
import { ReactNode } from "react"
import { Card } from "@/components/ui/card"

interface InfoCardProps {
  children: ReactNode
  className?: string
  delay?: number
  index?: number
}

/**
 * Animated card component with hover effects
 * Subtle elevation and scale (max 1.02) on hover
 */
export function InfoCard({ children, className = "", delay = 0, index = 0 }: InfoCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {
          ...fadeInUp.hidden,
          scale: 0.95,
        },
        visible: {
          ...fadeInUp.visible,
          scale: 1,
          transition: {
            ...fadeInUp.visible.transition,
            delay: delay + index * 0.1,
          },
        },
        hover: cardHover.hover,
      }}
    >
      <Card className={className}>
        {children}
      </Card>
    </motion.div>
  )
}

/**
 * Animated icon container
 */
export function AnimatedIcon({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={{
        rest: iconScale.rest,
        hover: iconScale.hover,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

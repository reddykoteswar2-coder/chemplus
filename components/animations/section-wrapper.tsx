"use client"

import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"
import { ReactNode } from "react"

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  delay?: number
}

/**
 * Wrapper component for sections that animates on scroll
 * Uses viewport={{ once: true }} to prevent re-triggering
 */
export function SectionWrapper({ children, className = "", delay = 0 }: SectionWrapperProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: fadeInUp.hidden,
        visible: {
          ...fadeInUp.visible,
          transition: {
            ...fadeInUp.visible.transition,
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

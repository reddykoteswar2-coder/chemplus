"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { ReactNode } from "react"

interface StaggerGridProps {
  children: ReactNode
  className?: string
}

/**
 * Grid container with staggered children animations
 */
export function StaggerGrid({ children, className = "" }: StaggerGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * Individual grid item with stagger animation
 */
export function StaggerItem({ children, className = "", index = 0 }: { children: ReactNode; className?: string; index?: number }) {
  return (
    <motion.div
      variants={{
        ...staggerItem,
        visible: {
          ...staggerItem.visible,
          transition: {
            ...staggerItem.visible.transition,
            delay: index * 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

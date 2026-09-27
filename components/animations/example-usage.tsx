/**
 * Example Usage of Animation Components
 * 
 * This file shows how to wrap existing content with animations
 * WITHOUT changing any content - just add animation wrappers
 */

"use client"

import {
  SectionWrapper,
  AnimatedHero,
  AnimatedHeadline,
  AnimatedSubtitle,
  AnimatedBackground,
  InfoCard,
  AnimatedIcon,
  StaggerGrid,
  StaggerItem,
} from "@/components/animations"
import { Shield, Users, Clock } from "lucide-react"

/**
 * Example 1: Hero Section
 * Wrap existing hero content with animation components
 */
export function ExampleHero() {
  return (
    <AnimatedHero className="text-center py-20">
      <AnimatedHeadline className="text-5xl font-bold mb-6">
        Research and Development of Pharmaceutical reference standards
      </AnimatedHeadline>
      <AnimatedSubtitle className="text-lg text-gray-400 max-w-2xl mx-auto">
        Through advanced research and development, we deliver reference standards, peptides, complex molecules, and specialized intermediates.
      </AnimatedSubtitle>
    </AnimatedHero>
  )
}

/**
 * Example 2: Section with Background Animation
 * Wrap section and add animated background
 */
export function ExampleSection() {
  return (
    <SectionWrapper className="py-16 relative overflow-hidden">
      {/* Animated background gradient */}
      <AnimatedBackground className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-teal-500/10 -z-10">
        <div />
      </AnimatedBackground>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-8">Your Section Content</h2>
        <p>Your existing content here - no changes needed!</p>
      </div>
    </SectionWrapper>
  )
}

/**
 * Example 3: Cards with Stagger Animation
 * Wrap existing cards with InfoCard component
 */
export function ExampleCards() {
  return (
    <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StaggerItem index={0}>
        <InfoCard className="p-8" index={0}>
          <AnimatedIcon className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-5">
            <Shield className="w-7 h-7 text-cyan-400" />
          </AnimatedIcon>
          <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
          <p className="text-sm text-gray-400">
            Rigorous quality checks and compliance with pharmaceutical standards
          </p>
        </InfoCard>
      </StaggerItem>

      <StaggerItem index={1}>
        <InfoCard className="p-8" index={1}>
          <AnimatedIcon className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-5">
            <Clock className="w-7 h-7 text-cyan-400" />
          </AnimatedIcon>
          <h3 className="text-xl font-bold mb-3">Right on time</h3>
          <p className="text-sm text-gray-400">
            Efficient logistics ensuring pharmaceutical supplies arrive on schedule
          </p>
        </InfoCard>
      </StaggerItem>

      <StaggerItem index={2}>
        <InfoCard className="p-8" index={2}>
          <AnimatedIcon className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-5">
            <Users className="w-7 h-7 text-cyan-400" />
          </AnimatedIcon>
          <h3 className="text-xl font-bold mb-3">Trusted Partner</h3>
          <p className="text-sm text-gray-400">
            Building long-term partnerships through reliable and professional service
          </p>
        </InfoCard>
      </StaggerItem>
    </StaggerGrid>
  )
}

/**
 * Example 4: Simple Section Wrapper
 * Just wrap your existing section - that's it!
 */
export function ExampleSimpleSection() {
  return (
    <SectionWrapper className="py-16 px-4">
      {/* Your existing content - no changes! */}
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Section Title</h2>
        <p>Your existing paragraph content here.</p>
      </div>
    </SectionWrapper>
  )
}

# Premium Animation System

A modern, trust-focused animation system for pharma/healthcare websites using Framer Motion.

## Features

- ✅ Clean, minimal animations (no flashy effects)
- ✅ Soft fade-in + slide-up on scroll
- ✅ Staggered text animations
- ✅ Subtle card hover effects (max scale 1.02)
- ✅ Smooth easing with cubic-bezier
- ✅ Parallax-like background movement
- ✅ Optimized for 60fps performance
- ✅ `viewport={{ once: true }}` to prevent re-triggering

## Installation

```bash
npm install framer-motion
```

## Usage Examples

### 1. Animated Section Wrapper

Wrap any section to animate on scroll:

```tsx
import { SectionWrapper } from "@/components/animations"

<SectionWrapper className="py-16">
  <h2>Your content here</h2>
</SectionWrapper>
```

### 2. Hero Section with Staggered Text

```tsx
import { AnimatedHero, AnimatedHeadline, AnimatedSubtitle } from "@/components/animations"

<AnimatedHero>
  <AnimatedHeadline className="text-4xl font-bold">
    Your Headline
  </AnimatedHeadline>
  <AnimatedSubtitle className="text-lg mt-4">
    Your subtitle appears after headline
  </AnimatedSubtitle>
</AnimatedHero>
```

### 3. Animated Cards with Hover

```tsx
import { InfoCard, AnimatedIcon } from "@/components/animations"

<InfoCard className="p-8" index={0}>
  <AnimatedIcon className="w-12 h-12">
    <Shield className="w-6 h-6" />
  </AnimatedIcon>
  <h3>Card Title</h3>
  <p>Card content</p>
</InfoCard>
```

### 4. Staggered Grid

```tsx
import { StaggerGrid, StaggerItem } from "@/components/animations"

<StaggerGrid className="grid grid-cols-3 gap-6">
  <StaggerItem index={0}>Item 1</StaggerItem>
  <StaggerItem index={1}>Item 2</StaggerItem>
  <StaggerItem index={2}>Item 3</StaggerItem>
</StaggerGrid>
```

### 5. Animated Background

```tsx
import { AnimatedBackground } from "@/components/animations"

<AnimatedBackground className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/10">
  {/* Background content */}
</AnimatedBackground>
```

## Animation Variants

All variants are exported from `@/lib/animations`:

- `fadeInUp` - Fade in with upward slide
- `fadeIn` - Simple fade in
- `staggerContainer` - Container for staggered children
- `staggerItem` - Individual staggered item
- `scaleIn` - Scale from 0.95 to 1
- `cardHover` - Card hover animation (scale 1.02, lift -4px)
- `iconScale` - Icon hover scale (1.1)
- `parallaxBackground` - Slow parallax movement
- `textStagger` - Text stagger container
- `textItem` - Individual text item

## Performance

- Uses `viewport={{ once: true }}` to prevent re-triggering
- Optimized easing functions for smooth 60fps animations
- Minimal DOM updates
- GPU-accelerated transforms

## Design Philosophy

All animations follow pharma/healthcare design principles:
- **Trust-focused**: Calm, scientific, professional
- **Minimal**: No flashy or distracting effects
- **Smooth**: Premium easing curves
- **Subtle**: Max scale 1.02 for cards, gentle movements

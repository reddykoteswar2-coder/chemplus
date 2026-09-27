import { cn } from "@/lib/utils"

/**
 * Branded loading indicator: the ChemPlus logo mark inside a spinning ring
 * in the logo's green/blue colours. Used for route loading screens and inline spinners.
 */

const SIZES = {
  xs: { box: 20, ring: 2 },
  sm: { box: 28, ring: 2.5 },
  md: { box: 64, ring: 3 },
  lg: { box: 112, ring: 4 },
} as const

interface LogoLoaderProps {
  size?: keyof typeof SIZES
  label?: string
  className?: string
}

export function LogoLoader({ size = "md", label = "Loading", className }: LogoLoaderProps) {
  const { box, ring } = SIZES[size]
  return (
    <span
      role="status"
      aria-label={label}
      className={cn("relative inline-flex shrink-0 items-center justify-center", className)}
      style={{ width: box, height: box }}
    >
      {/* spinning gradient ring (masked to a thin band) */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full animate-spin motion-reduce:animate-none"
        style={{
          animationDuration: "1.1s",
          background: "conic-gradient(from 0deg, #7dc242, #29a3db, #2e3a8c, transparent 75%)",
          WebkitMask: `radial-gradient(farthest-side, transparent calc(100% - ${ring}px), #000 calc(100% - ${ring}px))`,
          mask: `radial-gradient(farthest-side, transparent calc(100% - ${ring}px), #000 calc(100% - ${ring}px))`,
        }}
      />
      {/* logo mark on a white disc */}
      <span
        aria-hidden
        className="rounded-full bg-white overflow-hidden"
        style={{ width: box - ring * 2 - 2, height: box - ring * 2 - 2 }}
      >
        <img src="/chemplus-logo-mark.png" alt="" className="w-full h-full object-contain" draggable={false} />
      </span>
    </span>
  )
}

/** Full-area loading screen for route segments (loading.tsx files). */
export function PageLoader({ label = "Loading" }: { label?: string }) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-4 bg-black">
      <LogoLoader size="lg" label={label} />
      <p className="text-sm text-white/60 tracking-wide">{label}…</p>
    </div>
  )
}

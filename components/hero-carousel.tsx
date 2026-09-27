"use client"

import { useState, useEffect } from "react"

const slides = [
  {
    image: "/0003.jpeg",
    alt: "Impurity Standards",
    title: "Impurity Standards",
    subtitle: "High-purity reference standards for pharmaceutical testing and quality control",
  },
  {
    image: "/0002.jpeg",
    alt: "Custom Synthesis",
    title: "Custom Synthesis",
    subtitle: "Expert chemical synthesis tailored to your specific requirements",
  },
  {
    image: "/0001.jpeg",
    alt: "Analytical Services",
    title: "Analytical Services",
    subtitle: "Precision testing and quality control with advanced instrumentation",
  },
  {
    image: "/0004.jpeg",
    alt: "API Products",
    title: "API Products",
    subtitle: "High-quality Active Pharmaceutical Ingredients for your formulations",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  const getSlideTransition = (index: number, isCurrent: boolean) => {
    const transitions = [
      isCurrent ? "opacity-100 scale-100" : "opacity-0 scale-110",
      isCurrent ? "opacity-100 scale-100" : "opacity-0 scale-105",
      isCurrent ? "opacity-100 scale-100" : "opacity-0 scale-110",
      isCurrent ? "opacity-100 scale-100" : "opacity-0 scale-95",
      isCurrent ? "opacity-100 scale-100" : "opacity-0 scale-105",
      isCurrent ? "opacity-100 scale-100" : "opacity-0 scale-90",
    ]
    return transitions[index % transitions.length]
  }

  return (
    <section className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-black">
      {/* Abstract Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-400/10 rounded-full blur-3xl"></div>
        {/* Wavy lines effect */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path d="M0,400 Q300,200 600,400 T1200,400" stroke="url(#gradient1)" strokeWidth="2" fill="none" />
          <path d="M0,500 Q300,300 600,500 T1200,500" stroke="url(#gradient2)" strokeWidth="2" fill="none" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Carousel Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[1200ms] ease-out ${getSlideTransition(
            index,
            index === currentSlide,
          )}`}
        >
          <div
            className={`w-full h-full transition-transform ease-linear relative ${
              index === currentSlide
                ? index % 2 === 0
                  ? "duration-[3500ms] scale-110"
                  : "duration-[4000ms] scale-105"
                : "scale-100"
            }`}
          >
            <img src={slide.image || "/placeholder.svg"} alt={slide.alt} className="w-full h-full object-cover opacity-30" />
            {/* Text Overlay */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className={`text-center px-4 sm:px-6 max-w-5xl transition-all duration-700 ${
                index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 tracking-tight">
                  {slide.title}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 font-light max-w-3xl mx-auto">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "bg-cyan-400 w-10 h-3 shadow-lg shadow-cyan-400/50"
                : "bg-white/30 w-3 h-3 hover:bg-white/60 hover:scale-125"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

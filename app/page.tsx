"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Users, Clock } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroCarousel } from "@/components/hero-carousel"
import { AnimatedBlobBackground } from "@/components/animated-blob-background"

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ChemPlus Pharma Private Limited",
    url: "https://chempluspharma.com",
    logo: "https://chempluspharma.com/chemplus-logo.png",
    description:
      "ChemPlus Pharma Private Limited - Your trusted partner in pharmaceutical reference standards, API products, custom synthesis, and analytical services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "HNO.5-9-285/16/4 Rajiv Gandhi Nagar, IDPL Plot No. 3, Kukatpally",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500072",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8074814132",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
    sameAs: [],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <AnimatedBlobBackground intensity="medium" />
        <Header />

      <div className="pt-20 sm:pt-24 md:pt-24 lg:pt-24">
        <HeroCarousel />
      </div>

      <section className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 relative">
        {/* Background glow effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Badge
            variant="secondary"
            className="mb-6 px-5 py-2.5 text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg border border-white/20 bg-black/40 backdrop-blur-xl text-white/90"
          >
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></span>A Trusted Partner for Pharmaceutical
            Manufacturers
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight text-white">
            Research and Development of Pharmaceutical reference standards and intermediate manufacturing
          </h2>
          <p className="text-base sm:text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Through advanced research and development, we deliver reference standards, peptides, complex molecules, and
            specialized intermediates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact#message-form">
              <Button size="lg" className="gap-2 shadow-xl hover:shadow-2xl bg-white text-black hover:bg-white/90 transition-all duration-300 rounded-full px-8">
                Request Access
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/products">
              <Button 
                size="lg" 
                className="border-2 border-white/50 hover:border-white/70 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 rounded-full px-8 text-white hover:text-white bg-transparent shadow-lg"
              >
                View Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl group border border-white/10 bg-black/40 backdrop-blur-sm">
              <img
                src="/modern-pharmaceutical-laboratory-with-scientists-i.jpg"
                alt="Pharmaceutical laboratory"
                className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-6">
                <h3 className="text-lg font-semibold text-white drop-shadow-lg">Advanced Research</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl group border border-white/10 bg-black/40 backdrop-blur-sm">
              <img
                src="/pharmaceutical-quality-control-testing-laboratory-.jpg"
                alt="Quality control laboratory"
                className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-6">
                <h3 className="text-lg font-semibold text-white drop-shadow-lg">Quality Testing</h3>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl group border border-white/10 bg-black/40 backdrop-blur-sm">
              <img
                src="/pharmaceutical-manufacturing-facility-with-clean-r.jpg"
                alt="Manufacturing facility"
                className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-6">
                <h3 className="text-lg font-semibold text-white drop-shadow-lg">GMP Manufacturing</h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-8 bg-black/40 backdrop-blur-xl border-white/10 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 group hover:-translate-y-1 border">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/30">
                <Shield className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Quality Assurance</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Rigorous quality checks and compliance with pharmaceutical standards
              </p>
            </Card>

            <Card className="p-8 bg-black/40 backdrop-blur-xl border-white/10 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 group hover:-translate-y-1 border">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/30">
                <Clock className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Right on time</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Efficient logistics ensuring pharmaceutical supplies arrive on schedule
              </p>
            </Card>

            <Card className="p-8 bg-black/40 backdrop-blur-xl border-white/10 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 sm:col-span-2 lg:col-span-1 group hover:-translate-y-1 border">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/30">
                <Users className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Trusted Partner</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Building long-term partnerships through reliable and professional service
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  )
}

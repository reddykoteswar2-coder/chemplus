"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FlaskConical,
  TestTube,
  Beaker,
  Microscope,
  GitBranch,
  ClipboardCheck,
  ArrowRight,
  Factory,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroCarousel } from "@/components/hero-carousel"

const services = [
  {
    title: "Analytical services",
    description:
      "Comprehensive analytical testing and validation services ensuring product quality, purity, and regulatory compliance",
    icon: ClipboardCheck,
    features: ["Method development", "Validation studies", "Stability testing", "Regulatory filing support"],
  },
  {
    title: "API Products",
    description:
      "Active Pharmaceutical Ingredients (APIs) manufactured to the highest quality standards for pharmaceutical formulations",
    icon: Beaker,
    features: ["GMP manufacturing", "Quality assurance", "Batch documentation", "Regulatory compliance"],
  },
  {
    title: "CDMO and Technology Transfer",
    description:
      "Comprehensive contract development and manufacturing services with seamless technology transfer capabilities for pharmaceutical production",
    icon: Factory,
    features: ["Custom synthesis", "Impurity standards", "Technology transfer", "Scale-up support"],
  },
  {
    title: "Custom Synthesis",
    description:
      "Tailored chemical synthesis services to meet your specific pharmaceutical compound requirements with precision and quality",
    icon: FlaskConical,
    features: ["Custom molecule design", "Scale-up capabilities", "GMP compliance", "Quality documentation"],
  },
  {
    title: "Impurity Standards",
    description:
      "High-purity reference standards and impurities for pharmaceutical analysis, quality control, and regulatory compliance",
    icon: TestTube,
    features: ["Certified reference materials", "Impurity profiling", "Stability studies", "Regulatory support"],
  },
  {
    title: "Intermediates & Key Starting Materials",
    description:
      "Premium quality chemical intermediates and key starting materials essential for pharmaceutical synthesis and production",
    icon: Microscope,
    features: ["High purity grades", "Custom specifications", "Bulk quantities", "Technical support"],
  },
  {
    title: "Process Development",
    description:
      "Expert process development and optimization services to enhance efficiency and scalability of pharmaceutical manufacturing",
    icon: GitBranch,
    features: ["Route optimization", "Scale-up studies", "Cost reduction", "Technology transfer"],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-20 sm:pt-24 md:pt-24 lg:pt-24">
        {/* <HeroCarousel /> */}

        {/* Hero Section */}
        <section className="pt-6 sm:pt-8 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-400/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge
                variant="outline"
                className="mb-6 sm:mb-8 px-5 py-2.5 text-sm shadow-lg border-white/20 backdrop-blur-xl bg-black/40 text-white/90"
              >
                <FlaskConical className="w-4 h-4 mr-2 inline-block" />
                Our Services
              </Badge>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-balance tracking-tight leading-[1.1] text-white">
                Tailored Solutions for Pharmaceutical Excellence
              </h1>
              <p className="text-base sm:text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
                Providing critical products and services for the pharmaceutical industry in a time-effective manner,
                working closely with clients throughout entire project cycles to deliver as per your needs
              </p>
            </div>
          </div>
        </section>

        {/* Visual Showcase Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group border border-white/10 bg-black/40 backdrop-blur-sm">
                <img
                  src="/pharmaceutical-research-scientist-analyzing-chemic.jpg"
                  alt="Research and development"
                  className="w-full h-full object-cover group-hover:scale-[1.15] transition-all duration-1000 ease-out opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="space-y-4">
                <Badge variant="outline" className="mb-4 border-white/20 bg-black/40 backdrop-blur-sm text-white/90">
                  Why Choose Us
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Comprehensive Pharmaceutical Solutions</h2>
                <p className="text-lg text-white/70 leading-relaxed">
                  From custom synthesis to analytical services, we provide end-to-end solutions for your pharmaceutical
                  development needs with unmatched quality and reliability.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group border border-white/10 bg-black/40 backdrop-blur-sm">
                <img
                  src="/pharmaceutical-production-line-with-automated-ma.jpg"
                  alt="Production line"
                  className="w-full h-full object-cover group-hover:scale-[1.15] transition-all duration-1000 ease-out opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Automated Production</h3>
                    <p className="text-sm text-white/80">State-of-the-art automated manufacturing systems</p>
                  </div>
                </div>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group border border-white/10 bg-black/40 backdrop-blur-sm">
                <img
                  src="/pharmaceutical-compliance-documentation-and-quali.jpg"
                  alt="Compliance documentation"
                  className="w-full h-full object-cover group-hover:scale-[1.15] transition-all duration-1000 ease-out opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Quality Documentation</h3>
                    <p className="text-sm text-white/80">Comprehensive regulatory compliance and quality control</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto relative z-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="p-8 sm:p-10 bg-black/40 backdrop-blur-xl border-white/10 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 group overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6 shadow-md shadow-cyan-500/30 group-hover:scale-110 transition-all duration-500">
                      <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 tracking-tight text-white">{service.title}</h3>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                          <ArrowRight className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto relative z-10">
            <Card className="p-10 sm:p-12 bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl rounded-3xl relative overflow-hidden max-w-4xl mx-auto text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-teal-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 tracking-tight text-white">Ready to Get Started?</h2>
                <p className="text-lg sm:text-xl text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Contact our team to discuss how we can support your pharmaceutical development and manufacturing needs
                </p>
                <a href="/contact#message-form">
                  <button className="px-8 py-4 bg-white text-black rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                    Contact Us
                  </button>
                </a>
              </div>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}

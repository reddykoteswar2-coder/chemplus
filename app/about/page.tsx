"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Sparkles, TrendingUp, Award, Microscope, ShieldCheck } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroCarousel } from "@/components/hero-carousel"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <div className="pt-20 sm:pt-24 md:pt-24 lg:pt-24">
        {/* Hero Section */}
        <section className="pt-6 sm:pt-8 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Background glow effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge
                variant="outline"
                className="mb-6 sm:mb-8 px-5 py-2.5 text-sm shadow-lg border-white/20 backdrop-blur-xl bg-black/40 text-white/90"
              >
                <Sparkles className="w-4 h-4 mr-2 inline-block" />
                About ChemPlus
              </Badge>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-balance tracking-tight leading-[1.1] text-white">
                Leadership in Pharmaceutical Development
              </h1>
              <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
                A chemical research company specializing in synthesized impurities, metabolites, intermediates, and API
                with custom synthesis
              </p>
            </div>
          </div>
        </section>

        {/* About ChemPlus */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center mb-20">
              <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-balance tracking-tight leading-tight text-white">
                  About ChemPlus
                </h2>
                <p className="text-lg sm:text-xl text-white/70 mb-6 leading-relaxed">
                  ChemPlus is a chemical research company involved in the research, development, and supply of synthesized
                  impurities, metabolites, intermediates, and API with custom synthesis.
                </p>
                <p className="text-lg sm:text-xl text-white/70 mb-6 leading-relaxed">
                  We have strategically developed our business model to ensure product quality and regulatory compliance in
                  a very cost-efficient way, ultimately allowing us to provide our products/services at competitive rates.
                </p>
                <p className="text-lg sm:text-xl text-white/70 mb-8 leading-relaxed">
                  Our team works closely with clients to provide tailored solutions throughout entire project cycles so we
                  deliver our services/products as per project needs.
                </p>
              </div>

              <div className="relative order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 backdrop-blur-sm relative group perspective-1000">
                  <img
                    src="/pharmaceutical-warehouse-modern-professional.jpg"
                    alt="Pharmaceutical research facility"
                    className="w-full h-full object-cover group-hover:scale-[1.15] transition-all duration-1000 ease-out transform-gpu opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Leadership Section */}
            <Card className="p-10 sm:p-12 bg-black/40 backdrop-blur-xl border-2 border-white/10 shadow-2xl rounded-3xl relative overflow-hidden mb-16 hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)] transition-shadow duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-teal-500/5"></div>
              <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <TrendingUp className="w-7 h-7 text-cyan-400" />
              </div>
              <Badge variant="outline" className="shadow-md border-white/20 bg-black/40 backdrop-blur-sm text-white/90">
                Leadership
              </Badge>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 tracking-tight text-white">
              Leadership in the Pharmaceutical Development Process
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-6">
              The phenomenal business growth seen by ChemPlus in recent years has been fuelled by the people we have, by
              the free and nurturing work environment we provide, and by the support given through clear people
              processes.
            </p>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              We have achieved a strong leadership role in pharmaceutical development by actively adapting to market
              trends and regulatory changes. With a focus on robust research and development, we maintain competitive
              service offerings. Driven by a commitment to R&D, ChemPlus prides itself on innovation and excellence.
              </p>
              </div>
            </Card>

            {/* Specialization */}
            <div className="mb-16">
              <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 tracking-tight text-white">ChemPlus Specialization</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Our purpose is to provide critical products needed in the pharmaceutical industry in a time-effective
              manner. High regulations, product availability, and the constant discovery of scientific
              impurities/metabolites keep us committed to delivering as per your needs, even providing custom synthesis.
              </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Impurity Isolation",
                description: "Impurity isolation from Peptides & API or drug products by Preparative HPLC",
                icon: Microscope,
              },
              {
                title: "Synthesis",
                description: "Synthesis of Impurities/Metabolite with precision and quality",
                icon: CheckCircle2,
              },
              {
                title: "Intermediates and API",
                description: "Development and supply of pharmaceutical intermediates and active ingredients",
                icon: Award,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-8 bg-black/40 backdrop-blur-xl border-2 border-white/10 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-5 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-all duration-500">
                    <item.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight text-white">{item.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{item.description}</p>
                </div>
              </Card>
            ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group border border-white/10 bg-black/40 backdrop-blur-sm">
              <img
                src="/pharmaceutical-packaging-and-distribution-center-w.jpg"
                alt="Distribution center"
                className="w-full h-full object-cover group-hover:scale-[1.15] transition-all duration-1000 ease-out opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Modern Distribution</h3>
                  <p className="text-sm text-white/80">State-of-the-art packaging and distribution facilities</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group border border-white/10 bg-black/40 backdrop-blur-sm">
              <img
                src="/pharmaceutical-warehouse-with-organized-shelves-of.jpg"
                alt="Warehouse storage"
                className="w-full h-full object-cover group-hover:scale-[1.15] transition-all duration-1000 ease-out opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Organized Storage</h3>
                  <p className="text-sm text-white/80">Temperature-controlled warehouse facilities</p>
                </div>
              </div>
            </div>
              </div>
            </div>

            {/* Products Section */}
            <div className="mb-16">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 tracking-tight text-white">ChemPlus Products</h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Impurity Reference Standards",
                description: "High-quality reference standards for pharmaceutical testing and quality control",
              },
              {
                title: "Isotope Labelled Compounds",
                description: "Specialized isotope-labeled compounds for research and analytical applications",
              },
              {
                title: "Metabolite Impurities",
                description: "Comprehensive range of metabolite impurities for pharmaceutical development",
              },
            ].map((product, index) => (
              <Card
                key={index}
                className="p-8 bg-black/40 backdrop-blur-xl border-2 border-white/10 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold mb-3 tracking-tight text-white">{product.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{product.description}</p>
              </Card>
            ))}
              </div>
            </div>

            {/* Research and Development */}
            <Card className="p-10 sm:p-12 bg-black/40 backdrop-blur-xl border-2 border-white/10 shadow-2xl rounded-3xl relative overflow-hidden mb-16 hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)] transition-shadow duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-teal-500/5"></div>
              <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Microscope className="w-7 h-7 text-cyan-400" />
              </div>
              <Badge variant="outline" className="shadow-md border-white/20 bg-black/40 backdrop-blur-sm text-white/90">
                Innovation
              </Badge>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 tracking-tight text-white">Research and Development</h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              At ChemPlus, research and development stand at the forefront of our endeavors, embodying the core of our
              innovation and adaptability in the fast-evolving pharmaceutical landscape. Our R&D strategy is propelled
              by a deeply ingrained commitment to excellence, ensuring that we not only meet but set industry standards.
              Our dedicated team works tirelessly to push the boundaries of scientific discovery, keeping ChemPlus at
              the vanguard of pharmaceutical advancements and securing our place as pioneers in the field.
              </p>
              </div>
            </Card>

            {/* Quality and Compliance */}
            <Card className="p-10 sm:p-12 bg-black/40 backdrop-blur-xl border-2 border-white/10 shadow-2xl rounded-3xl relative overflow-hidden mb-16 hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)] transition-shadow duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-teal-500/5"></div>
              <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <ShieldCheck className="w-7 h-7 text-cyan-400" />
              </div>
              <Badge variant="outline" className="shadow-md border-white/20 bg-black/40 backdrop-blur-sm text-white/90">
                Quality
              </Badge>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 tracking-tight text-white">Quality and Compliance</h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-6">
              ChemPlus's commitment to quality and compliance is unwavering, as the company adheres to stringent
              regulatory standards to ensure the highest level of product excellence. The quality assurance processes
              are rigorous, encompassing all stages from research to delivery, reflecting ChemPlus pledge to uphold the
              safety, purity, and efficacy of their pharmaceutical products.
            </p>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              ChemPlus is deeply committed to customer satisfaction, prioritizing the creation of strong trust
              foundations with its clientele. The company strives to exceed customer expectations through the delivery
              of quality products and meticulous documentation, measuring success by the positive feedback and loyalty
              of its customers.
              </p>
              </div>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

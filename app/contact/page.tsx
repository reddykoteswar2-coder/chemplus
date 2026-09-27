"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Send, User, Phone, MessageSquare } from "lucide-react"
import { LogoLoader } from "@/components/logo-loader"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroCarousel } from "@/components/hero-carousel"
import { sendContactEmail } from "@/app/actions/send-email"

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })

  // Handle scrolling to message form and focusing first input when hash is present
  useEffect(() => {
    const scrollToForm = () => {
      const hash = window.location.hash
      if (hash === "#message-form") {
        // Multiple attempts with increasing delays to handle Next.js client-side navigation
        const attemptScroll = (delay: number) => {
          setTimeout(() => {
            const element = document.getElementById("message-form")
            if (element) {
              const headerOffset = 140 // Account for fixed header (two rows)
              const elementPosition = element.getBoundingClientRect().top
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset

              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              })

              // Focus the first input field after scrolling
              setTimeout(() => {
                const firstInput = document.getElementById("fullName") as HTMLInputElement
                if (firstInput) {
                  firstInput.focus()
                }
              }, 500) // Wait for scroll animation to complete
            } else if (delay < 1000) {
              // Retry if element not found yet (Next.js might still be rendering)
              attemptScroll(delay + 200)
            }
          }, delay)
        }

        attemptScroll(100)
      }
    }

    // Scroll on mount
    scrollToForm()

    // Listen for hash changes
    window.addEventListener("hashchange", scrollToForm)

    // Also listen for popstate (browser back/forward)
    window.addEventListener("popstate", scrollToForm)

    return () => {
      window.removeEventListener("hashchange", scrollToForm)
      window.removeEventListener("popstate", scrollToForm)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setSuccessMessage("")
    setErrorMessage("")

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setSuccessMessage("Message sent successfully! We'll get back to you soon.")
        setFormData({ fullName: "", email: "", phone: "", message: "" })
      } else {
        setErrorMessage(result.error || "Failed to send message. Please try again.")
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-20 sm:pt-24 md:pt-24 lg:pt-24">
        {/* <HeroCarousel /> */}

        {/* Hero Section */}
        <section className="pt-6 sm:pt-8 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge
                variant="outline"
                className="mb-6 sm:mb-8 px-5 py-2.5 text-sm shadow-lg border-white/20 backdrop-blur-xl bg-black/40 text-white/90"
              >
                <Mail className="w-4 h-4 mr-2 inline-block" />
                Get In Touch
              </Badge>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-balance tracking-tight leading-[1.1] text-white">
                Let's Discuss Your Needs
              </h1>
              <p className="text-xl sm:text-2xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
                Get in touch with our team to learn more about our products and services
              </p>
            </div>
          </div>
        </section>

        {/* Visual Showcase Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl group border border-white/10 bg-black/40 backdrop-blur-sm">
                <img
                  src="/pharmaceutical-scientist-in-clean-room-with-advan.jpg"
                  alt="Clean room pharmaceutical research"
                  className="w-full h-full object-cover group-hover:scale-[1.15] transition-all duration-1000 ease-out opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-6">
                  <h3 className="text-lg font-bold text-white">Advanced Clean Room Facilities</h3>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl group border border-white/10 bg-black/40 backdrop-blur-sm">
                <img
                  src="/pharmaceutical-compliance-documentation-and-quali.jpg"
                  alt="Quality compliance documentation"
                  className="w-full h-full object-cover group-hover:scale-[1.15] transition-all duration-1000 ease-out opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-6">
                  <h3 className="text-lg font-bold text-white">Quality Assurance & Compliance</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
              {/* Contact Information */}
              <div className="space-y-6 sm:space-y-8">
                <Badge variant="outline" className="mb-4 shadow-sm border-white/20 bg-black/40 backdrop-blur-sm text-white/90">
                  Contact Information
                </Badge>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-balance tracking-tight text-white">
                  We're Here to Help
                </h2>
                <p className="text-base sm:text-lg text-white/70 mb-8 leading-relaxed">
                  Reach out to our team for inquiries about products, services, or partnership opportunities.
                </p>

                <div className="space-y-4 sm:space-y-6">
                  <Card className="p-6 bg-black/40 backdrop-blur-xl border-white/10 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 group">
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0 shadow-md shadow-cyan-500/30 group-hover:scale-110 transition-all duration-500">
                        <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold mb-2 tracking-tight text-white">Address</h4>
                        <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                          HNO.5-9-285/16/4 Rajiv Gandhi Nagar
                          <br />
                          IDPL Plot No. 3, Kukatpally
                          <br />
                          Hyderabad, Telangana 500072
                          <br />
                          India
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-black/40 backdrop-blur-xl border-white/10 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 group">
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0 shadow-md shadow-cyan-500/30 group-hover:scale-110 transition-all duration-500">
                        <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm sm:text-base font-semibold mb-3 tracking-tight text-white">Contact us</h4>
                        <div className="space-y-3">
                          <div>
                            <p className="text-xs sm:text-sm font-medium text-white/60 mb-1.5">Email:</p>
                            <div className="space-y-1">
                              <a
                                href="mailto:info@chempluspharma.com"
                                className="text-sm sm:text-base text-white/70 hover:text-cyan-400 transition-colors duration-200 block"
                              >
                                info@chempluspharma.com
                              </a>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm font-medium text-white/60 mb-1.5">Phone:</p>
                            <a
                              href="tel:+918074814132"
                              className="text-sm sm:text-base text-white/70 hover:text-cyan-400 transition-colors duration-200"
                            >
                              +91 8074814132
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <Card id="message-form" className="p-8 sm:p-10 lg:p-12 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 scroll-mt-32 relative overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/8 via-teal-500/6 to-cyan-500/8 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent pointer-events-none"></div>
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-br-full blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-teal-500/10 to-transparent rounded-tl-full blur-2xl"></div>
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
                
                <div className="relative z-10">
                  {/* Header Section */}
                  <div className="mb-8 sm:mb-10 pb-6 border-b border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 rounded-full"></div>
                      <Badge variant="outline" className="border-cyan-500/40 bg-cyan-500/10 text-cyan-300 px-4 py-1.5 text-xs font-semibold tracking-wide">
                        Contact Form
                      </Badge>
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 tracking-tight text-cyan-400">
                      Send us a message
                    </h3>
                    <p className="text-sm sm:text-base text-white/60 leading-relaxed">Fill out the form below and we'll get back to you within 24 hours</p>
                  </div>

                  {/* Alert Messages */}
                  {successMessage && (
                    <div className="mb-6 p-4 bg-green-500/20 border border-green-500/40 rounded-xl text-green-300 text-sm backdrop-blur-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        {successMessage}
                      </div>
                    </div>
                  )}
                  {errorMessage && (
                    <div className="mb-6 p-4 bg-red-500/20 border border-red-500/40 rounded-xl text-red-300 text-sm backdrop-blur-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        {errorMessage}
                      </div>
                    </div>
                  )}

                  {/* Form */}
                  <form className="space-y-6 sm:space-y-7" onSubmit={handleSubmit}>
                    {/* Full Name Field */}
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="flex items-center gap-2 text-sm font-semibold text-white">
                        <User className="w-4 h-4 text-cyan-400" />
                        Full Name
                        <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          disabled={isLoading}
                          className="w-full pl-12 pr-5 py-4 rounded-xl bg-black/50 border border-white/10 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 outline-none transition-all text-sm sm:text-base text-white placeholder:text-white/40 shadow-lg focus:shadow-xl focus:shadow-cyan-500/20 focus:scale-[1.01] disabled:opacity-50 backdrop-blur-sm"
                          placeholder="Enter your full name"
                        />
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-white">
                        <Mail className="w-4 h-4 text-cyan-400" />
                        Email Address
                        <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={isLoading}
                          className="w-full pl-12 pr-5 py-4 rounded-xl bg-black/50 border border-white/10 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 outline-none transition-all text-sm sm:text-base text-white placeholder:text-white/40 shadow-lg focus:shadow-xl focus:shadow-cyan-500/20 focus:scale-[1.01] disabled:opacity-50 backdrop-blur-sm"
                          placeholder="your.email@example.com"
                        />
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
                      </div>
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-white">
                        <Phone className="w-4 h-4 text-cyan-400" />
                        Phone Number
                        <span className="text-white/40 text-xs font-normal">(Optional)</span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={isLoading}
                          className="w-full pl-12 pr-5 py-4 rounded-xl bg-black/50 border border-white/10 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 outline-none transition-all text-sm sm:text-base text-white placeholder:text-white/40 shadow-lg focus:shadow-xl focus:shadow-cyan-500/20 focus:scale-[1.01] disabled:opacity-50 backdrop-blur-sm"
                          placeholder="+91 1234567890"
                        />
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-white">
                        <MessageSquare className="w-4 h-4 text-cyan-400" />
                        Message
                        <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          required
                          disabled={isLoading}
                          className="w-full pl-12 pr-5 py-4 rounded-xl bg-black/50 border border-white/10 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 outline-none transition-all resize-none text-sm sm:text-base text-white placeholder:text-white/40 shadow-lg focus:shadow-xl focus:shadow-cyan-500/20 focus:scale-[1.01] disabled:opacity-50 backdrop-blur-sm"
                          placeholder="Tell us about your requirements, questions, or how we can help..."
                        />
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-white/40 pointer-events-none" />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isLoading}
                      className="w-full mt-8 bg-white hover:bg-white/90 text-black font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-base sm:text-lg py-6 sm:py-7 rounded-xl gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <LogoLoader size="sm" label="Sending message" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}

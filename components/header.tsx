"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Menu, Search, Phone } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { usePathname, useRouter } from "next/navigation"
import { AlternatingReveal } from "@/components/alternating-reveal"
import { searchProducts, type SearchableProduct } from "@/lib/products-data"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchableProduct[]>([])
  const [showDropdown, setShowDropdown] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const desktopSearchRef = useRef<HTMLDivElement>(null)
  const mobileSearchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const isActive = (path: string) => pathname === path

  // Handle search input changes
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const results = searchProducts(searchQuery, 8)
      setSearchResults(results)
      setShowDropdown(true)
    } else {
      setSearchResults([])
      setShowDropdown(false)
    }
  }, [searchQuery])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedInsideDesktop = desktopSearchRef.current?.contains(event.target as Node)
      const clickedInsideMobile = mobileSearchRef.current?.contains(event.target as Node)
      
      if (!clickedInsideDesktop && !clickedInsideMobile) {
        setShowDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setShowDropdown(false)
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleProductClick = (href: string) => {
    setShowDropdown(false)
    setSearchQuery("")
    router.push(href)
  }

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="bg-black/40 backdrop-blur-2xl border-b border-white/10 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Company Name with Animation */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0 w-fit min-w-[240px] sm:min-w-[280px] group relative z-10">
              <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white overflow-hidden shrink-0">
                <img src="/chemplus-logo-mark.png" alt="ChemPlus Pharma logo" className="w-full h-full object-contain" />
              </span>
              <span className="flex flex-col">
              <AlternatingReveal
                topText="ChemPlus Pharma"
                bottomText="Private Limited"
                delay={0}
                charDelay={280}
                loopDelay={2000}
                topColor="text-white"
                bottomColor="text-cyan-400"
              />
              </span>
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center justify-center gap-2 flex-1 bg-black/30 backdrop-blur-xl rounded-full px-3 py-2 border border-white/10">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/products", label: "Products" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap relative ${
                    isActive(href)
                      ? "bg-cyan-500/20 text-cyan-400 shadow-lg shadow-cyan-500/20 border border-cyan-400/30"
                      : "text-white/70 hover:text-cyan-400 hover:bg-cyan-500/10"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Phone Number and Search Bar - Right aligned */}
            <div className="hidden md:flex items-center gap-4 flex-shrink-0 ml-auto">
              <a href="tel:+918074814132" className="flex items-center gap-2 text-white/80 hover:text-cyan-400 transition-colors duration-300 whitespace-nowrap">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">+91 8074814132</span>
              </a>
              <div ref={desktopSearchRef} className="relative w-full max-w-md">
                <form
                  onSubmit={handleSearch}
                  className="flex items-center border border-white/20 rounded-full overflow-hidden bg-black/30 backdrop-blur-xl shadow-xl hover:border-cyan-500/50 focus-within:border-cyan-400 focus-within:shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all duration-300"
                >
                  <Input
                    ref={inputRef}
                    type="text"
                    placeholder="ID#, CAS#, name, MF, CRM"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => {
                      if (searchQuery.trim().length > 0 && searchResults.length > 0) {
                        setShowDropdown(true)
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Escape") {
                        setShowDropdown(false)
                      }
                    }}
                    className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-11 text-xs sm:text-sm px-5 text-white bg-transparent placeholder:text-white/50"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="h-11 w-11 rounded-none bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border-l border-white/10 shadow-lg backdrop-blur-sm"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </form>
                {/* Search Dropdown */}
                {showDropdown && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl z-50 max-h-[400px] overflow-y-auto">
                    <div className="p-2">
                      {searchResults.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleProductClick(product.href)}
                          className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200 group"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors truncate">
                                {product.name}
                              </p>
                              <div className="flex flex-wrap gap-3 mt-1">
                                {product.casNo && (
                                  <span className="text-xs text-white/60">CAS: {product.casNo}</span>
                                )}
                                {product.szCatNo && (
                                  <span className="text-xs text-white/60">SZ: {product.szCatNo}</span>
                                )}
                                {product.molecularFormula && (
                                  <span className="text-xs text-white/60">MF: {product.molecularFormula}</span>
                                )}
                              </div>
                            </div>
                            {product.status && (
                              <span
                                className={`text-xs px-2 py-1 rounded ${
                                  product.status === "In Stock"
                                    ? "bg-green-500/20 text-green-400"
                                    : "bg-yellow-500/20 text-yellow-400"
                                }`}
                              >
                                {product.status}
                              </span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Search */}
            <div className="flex md:hidden items-center gap-2">
              <div ref={mobileSearchRef} className="relative">
                <form
                  onSubmit={handleSearch}
                  className="flex items-center border border-white/20 rounded-full overflow-hidden bg-black/30 backdrop-blur-xl shadow-lg"
                >
                  <Input
                    type="text"
                    placeholder="ID#, CAS#, name, MF, CRM"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => {
                      if (searchQuery.trim().length > 0 && searchResults.length > 0) {
                        setShowDropdown(true)
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Escape") {
                        setShowDropdown(false)
                      }
                    }}
                    className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-9 text-xs px-3 text-white bg-transparent placeholder:text-white/50 w-20 sm:w-28"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="h-9 w-9 rounded-none bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 shadow-md backdrop-blur-sm"
                  >
                    <Search className="h-3.5 w-3.5" />
                  </Button>
                </form>
                {/* Mobile Search Dropdown */}
                {showDropdown && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl z-50 max-h-[300px] overflow-y-auto">
                    <div className="p-2">
                      {searchResults.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleProductClick(product.href)}
                          className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 transition-colors duration-200 group"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors truncate">
                                {product.name}
                              </p>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {product.casNo && (
                                  <span className="text-xs text-white/60">CAS: {product.casNo}</span>
                                )}
                                {product.szCatNo && (
                                  <span className="text-xs text-white/60">SZ: {product.szCatNo}</span>
                                )}
                              </div>
                            </div>
                            {product.status && (
                              <span
                                className={`text-xs px-1.5 py-0.5 rounded ${
                                  product.status === "In Stock"
                                    ? "bg-green-500/20 text-green-400"
                                    : "bg-yellow-500/20 text-yellow-400"
                                }`}
                              >
                                {product.status}
                              </span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10 rounded-xl">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[80vw] sm:w-[300px] p-0 bg-black/95 backdrop-blur-2xl border-l border-white/10"
              >
                <div className="flex flex-col h-full">
                  <div className="px-6 py-5 border-b border-white/10 bg-black/40 backdrop-blur-sm">
                    <h2 className="font-bold text-lg text-cyan-400">Menu</h2>
                  </div>
                  <div className="px-6 py-4 border-b border-white/10">
                    <a href="tel:+918074814132" className="flex items-center gap-2 text-white/80 hover:text-cyan-400 transition-colors duration-300">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm font-medium">+91 8074814132</span>
                    </a>
                  </div>
                  <nav className="flex flex-col gap-2 p-4 overflow-y-auto flex-1">
                    {[
                      { href: "/", label: "Home" },
                      { href: "/about", label: "About" },
                      { href: "/products", label: "Products" },
                      { href: "/services", label: "Services" },
                      { href: "/contact", label: "Contact" },
                    ].map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-4 py-3.5 rounded-xl font-medium transition-all duration-300 ${
                          isActive(href)
                            ? "bg-white/10 text-cyan-400 border-l-2 border-cyan-400 shadow-lg shadow-cyan-500/10"
                            : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

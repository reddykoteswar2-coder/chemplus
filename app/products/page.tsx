"use client"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroCarousel } from "@/components/hero-carousel"
import { AnimatedBlobBackground } from "@/components/animated-blob-background"
import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"

// Product data - in a real app, this would come from an API or database
const realProducts = [
  {
    letter: "a",
    category: "ABALOPARATIDE",
    productinfo: {
      title: "Abaloparatide",
      table: {
        "CAS NO": "247062-33-5",
        "Molecular Formula": "C174H300N56O49",
        "Molecular Weight": "3961.59",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "d",
    category: "DESMOPRESSIN",
    productinfo: {
      title: "Desmopressin",
      table: {
        "CAS NO": "16679-58-6",
        "Molecular Formula": "C46H64N14O12S2",
        "Molecular Weight": "1069.22",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "g",
    category: "GLUCAGON",
    productinfo: {
      title: "Glucagon",
      table: {
        "CAS NO": "16941-32-5",
        "Molecular Formula": "C153H225N43O49S",
        "Molecular Weight": "3482.75",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "i",
    category: "ICATIBANT",
    productinfo: {
      title: "Icatibant",
      table: {
        "CAS NO": "138614-30-9",
        "Molecular Formula": "C59H89N19O13S",
        "Molecular Weight": "1304.53",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "l",
    category: "LANREOTIDE",
    productinfo: {
      title: "Lanreotide",
      table: {
        "CAS NO": "108736-35-2",
        "Molecular Formula": "C54H69N11O10S2",
        "Molecular Weight": "1096.32",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "l",
    category: "LEUPROLIDE",
    productinfo: {
      title: "Leuprolide",
      table: {
        "CAS NO": "53714-56-0",
        "Molecular Formula": "C59H84N16O12",
        "Molecular Weight": "1209.40",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "l",
    category: "LINACLOTIDE",
    productinfo: {
      title: "Linaclotide",
      table: {
        "CAS NO": "851199-59-2",
        "Molecular Formula": "C65H104N18O26S4",
        "Molecular Weight": "1681.89",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "l",
    category: "LIRAGLUTIDE",
    productinfo: {
      title: "Liraglutide",
      table: {
        "CAS NO": "204656-20-2",
        "Molecular Formula": "C172H265N43O51",
        "Molecular Weight": "3751.20",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "o",
    category: "OCTREOTIDE",
    productinfo: {
      title: "Octreotide",
      table: {
        "CAS NO": "83150-76-9",
        "Molecular Formula": "C49H66N10O10S2",
        "Molecular Weight": "1019.24",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "p",
    category: "PLECANATIDE",
    productinfo: {
      title: "Plecanatide",
      table: {
        "CAS NO": "467426-54-6",
        "Molecular Formula": "C65H104N18O26S4",
        "Molecular Weight": "1681.89",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "r",
    category: "RETATRUTIDE",
    productinfo: {
      title: "Retatrutide",
      table: {
        "CAS NO": "2381089-83-2",
        "Molecular Formula": "C250H394N66O68S",
        "Molecular Weight": "5529.31",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "s",
    category: "SEMAGLUTIDE",
    productinfo: {
      title: "Semaglutide",
      table: {
        "CAS NO": "910463-68-2",
        "Molecular Formula": "C187H291N45O59",
        "Molecular Weight": "4113.58",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "t",
    category: "TEDUGLUTIDE",
    productinfo: {
      title: "Teduglutide",
      table: {
        "CAS NO": "197922-42-2",
        "Molecular Formula": "C164H252N44O55S",
        "Molecular Weight": "3752.13",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "t",
    category: "TERIPARATIDE",
    productinfo: {
      title: "Teriparatide",
      table: {
        "CAS NO": "52232-67-4",
        "Molecular Formula": "C181H291N55O51S2",
        "Molecular Weight": "4117.72",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "t",
    category: "TERLIPRESSIN",
    productinfo: {
      title: "Terlipressin",
      table: {
        "CAS NO": "14636-12-5",
        "Molecular Formula": "C52H74N16O15S2",
        "Molecular Weight": "1227.37",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "t",
    category: "TIRZEPATIDE",
    productinfo: {
      title: "Tirzepatide",
      table: {
        "CAS NO": "2023788-19-2",
        "Molecular Formula": "C225H348N48O68",
        "Molecular Weight": "4813.45",
        Status: "In Stock",
      },
    },
  },
  {
    letter: "v",
    category: "VOSORITIDE",
    productinfo: {
      title: "Vosoritide",
      table: {
        "CAS NO": "1391048-45-7",
        "Molecular Formula": "C191H296N58O59S",
        "Molecular Weight": "4370.87",
        Status: "In Stock",
      },
    },
  },
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)

  const groupedProducts: Record<string, Record<string, typeof realProducts>> = {}

  realProducts.forEach((product) => {
    const letter = product.letter.toUpperCase()
    const category = product.category

    if (!groupedProducts[letter]) {
      groupedProducts[letter] = {}
    }
    if (!groupedProducts[letter][category]) {
      groupedProducts[letter][category] = []
    }
    groupedProducts[letter][category].push(product)
  })

  const filteredProducts = useMemo(() => {
    return searchTerm
      ? realProducts.filter(
          (p) =>
            p.productinfo?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.category.toLowerCase().includes(searchTerm.toLowerCase()),
        )
      : realProducts
  }, [searchTerm])

  const getTotalProducts = (letter: string) => {
    const categories = groupedProducts[letter] || {}
    return Object.values(categories).reduce((sum, products) => sum + products.length, 0)
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <AnimatedBlobBackground intensity="medium" />
      <Header />
      <div className="pt-20 sm:pt-24 md:pt-24 lg:pt-24">
        {/* <HeroCarousel /> */}

        {/* Hero Section */}
        <section className="pt-8 sm:pt-12 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <Badge
                variant="outline"
                className="mb-8 sm:mb-10 px-6 py-3 text-lg sm:text-xl shadow-lg border-white/20 backdrop-blur-xl bg-black/40 text-white/90"
              >
                <Search className="w-6 h-6 mr-2 inline-block" />
                Peptide Product Catalog
              </Badge>
              <p className="text-3xl sm:text-4xl md:text-5xl text-white/70 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                Explore our extensive range of peptide pharmaceutical products organized alphabetically
              </p>

              {/* Search Bar */}
              <div className="max-w-3xl mx-auto mt-10 sm:mt-12">
                <div className="relative">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-white/50" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-16 pr-6 py-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all shadow-lg text-lg sm:text-xl text-white placeholder:text-white/50"
                  />
                </div>
              </div>
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
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl group border border-white/10 bg-black/40 backdrop-blur-sm">
                <Image
                  src="/pharmaceutical-chemical-compounds-in-test-tubes-.jpg"
                  alt="Chemical compounds testing"
                  fill
                  className="object-cover group-hover:scale-[1.15] transition-all duration-1000 ease-out opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-5">
                  <h3 className="text-base font-bold text-white">Chemical Analysis</h3>
                </div>
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl group border border-white/10 bg-black/40 backdrop-blur-sm">
                <Image
                  src="/pharmaceutical-production-line-with-automated-ma.jpg"
                  alt="Automated production line"
                  fill
                  className="object-cover group-hover:scale-[1.15] transition-all duration-1000 ease-out opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-5">
                  <h3 className="text-base font-bold text-white">Automated Manufacturing</h3>
                </div>
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl group border border-white/10 bg-black/40 backdrop-blur-sm">
                <Image
                  src="/pharmaceutical-scientist-in-clean-room-with-advan.jpg"
                  alt="Clean room operations"
                  fill
                  className="object-cover group-hover:scale-[1.15] transition-all duration-1000 ease-out opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-5">
                  <h3 className="text-base font-bold text-white">Clean Room Standards</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alphabet Navigation */}
        <section className="sticky top-20 z-40 mb-10 sm:mb-14 bg-black/90 backdrop-blur-2xl border-b border-white/10 py-5 sm:py-6 shadow-xl">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {Array.from({ length: 26 }, (_, i) => {
                const letter = String.fromCharCode(65 + i)
                const hasProducts = groupedProducts[letter] && Object.keys(groupedProducts[letter]).length > 0
                return (
                  <button
                    key={letter}
                    onClick={() => setSelectedLetter(hasProducts ? letter : null)}
                    className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl text-sm sm:text-base font-bold transition-all duration-300 hover:scale-110 border ${
                      hasProducts
                        ? selectedLetter === letter
                          ? "text-black bg-white border-white shadow-lg shadow-cyan-500/30"
                          : "text-white hover:text-cyan-400 hover:bg-cyan-500/15 hover:border-cyan-500/30 border-white/20 bg-black/40"
                        : "text-white/20 border-transparent cursor-not-allowed"
                    }`}
                    disabled={!hasProducts}
                  >
                    {letter}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* Product Listings */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto relative z-10">
            {searchTerm ? (
              // Search Results
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">Search Results</h2>
                  <p className="text-white/70">{filteredProducts.length} products found</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product, idx) => {
                    const productTitle = product.productinfo?.title || product.category
                    const isTerlipressin = product.category === "TERLIPRESSIN"
                    const productSlug = productTitle.toLowerCase().replace(/\s+/g, "-")
                    const productHref = isTerlipressin ? "/products/terlipressin" : `/products/${productSlug}`

                    return (
                      <Link
                        key={idx}
                        href={productHref}
                        className="block"
                      >
                        <Card className="p-7 sm:p-9 bg-black/40 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-3 group overflow-hidden relative cursor-pointer h-full">
                          <CardHeader>
                            <CardTitle className="leading-snug group-hover:text-cyan-400 transition-colors duration-300 text-white">
                              {productTitle}
                            </CardTitle>
                          </CardHeader>
                        </Card>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ) : selectedLetter ? (
              <div className="space-y-16 sm:space-y-20 md:space-y-24">
                {(() => {
                  const letter = selectedLetter
                  const categories = groupedProducts[letter]
                  if (!categories || Object.keys(categories).length === 0) return null

                  const totalProducts = getTotalProducts(letter)

                  return (
                    <div key={letter} id={`letter-${letter}`} className="scroll-mt-28">
                      <div className="mb-10 sm:mb-14">
                        <div className="flex items-center gap-5 sm:gap-6 mb-8 sm:mb-10">
                          <div className="relative">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center shadow-xl ring-2 ring-cyan-500/20 shadow-cyan-500/30">
                              <span className="text-4xl sm:text-5xl font-bold text-cyan-400 tracking-tight">{letter}</span>
                            </div>
                            <div className="absolute inset-0 bg-cyan-500/10 rounded-3xl blur-xl -z-10 opacity-50"></div>
                          </div>
                          <div className="h-px flex-1 bg-gradient-to-r from-white/20 via-white/10 to-transparent"></div>
                          <Badge
                            variant="secondary"
                            className="text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 shadow-md font-semibold bg-black/40 border-white/10 text-white/90"
                          >
                            {totalProducts} {totalProducts === 1 ? "Product" : "Products"}
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-12 sm:space-y-16">
                        {Object.entries(categories).map(([category, products]) => (
                          <div key={category} className="space-y-6 sm:space-y-8">
                            <div className="flex items-center gap-4">
                              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{category}</h3>
                              <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
                              <Badge variant="outline" className="text-xs px-3 py-1 border-white/10 bg-black/40 text-white/90">
                                {products.length} {products.length === 1 ? "item" : "items"}
                              </Badge>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                              {products.map((product, idx) => {
                                const productTitle = product.productinfo?.title || product.category
                                const isTerlipressin = product.category === "TERLIPRESSIN"
                                const isOctreotide = product.category === "OCTREOTIDE"
                                const isSemaglutide = product.category === "SEMAGLUTIDE"
                                const productSlug = productTitle.toLowerCase().replace(/\s+/g, "-")
                                const productHref = isTerlipressin ? "/products/terlipressin" : isOctreotide ? "/products/octreotide" : isSemaglutide ? "/products/semaglutide" : `/products/${productSlug}`

                                return (
                                  <Link
                                    key={idx}
                                    href={productHref}
                                    className="block"
                                  >
                                    <Card className="p-7 sm:p-9 bg-black/40 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-3 group overflow-hidden relative cursor-pointer h-full">
                                      <CardHeader>
                                        <CardTitle className="leading-snug group-hover:text-cyan-400 transition-colors duration-300 text-white">
                                          {productTitle}
                                        </CardTitle>
                                      </CardHeader>
                                    </Card>
                                  </Link>
                                )
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })()}
              </div>
            ) : (
              <div className="text-center py-16">
                <Search className="w-16 h-16 mx-auto mb-4 text-white/30" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">Select a Letter</h3>
                <p className="text-white/70">
                  Click on any letter above to view products, or use the search bar to find specific items
                </p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}

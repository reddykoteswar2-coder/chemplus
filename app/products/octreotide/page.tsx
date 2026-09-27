"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { octreotideData } from "@/lib/octreotide-data"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

export default function OctreotidePage() {
  const { mainProduct, impurities, relatedProducts } = octreotideData

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-20 sm:pt-24 md:pt-24 lg:pt-24">
        {/* Breadcrumbs */}
        <section className="py-4 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="text-white/70 hover:text-cyan-400">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/50" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/products" className="text-white/70 hover:text-cyan-400">
                    Products
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/50" />
                <BreadcrumbItem>
                  <span className="text-white">Octreotide</span>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
                {mainProduct.name}
              </h1>
              <p className="text-lg sm:text-xl text-white/70 mb-8 leading-relaxed">
                {mainProduct.productInfo.description}
              </p>
            </div>
          </div>
        </section>

        {/* Product Information */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <Card className="p-6 sm:p-8 bg-black/40 backdrop-blur-xl border border-white/10 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white mb-6">Product Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {Object.entries(mainProduct.productInfo.table).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <p className="text-sm text-white/60 uppercase tracking-wide">{key}</p>
                      <p className="text-base sm:text-lg font-semibold text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Impurities Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Octreotide EP Impurities</h2>
              <p className="text-white/70">
                High-quality reference standards for pharmaceutical testing and quality control
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
              {impurities.map((impurity) => (
                <Link
                  key={impurity.id}
                  href={`/products/octreotide/${impurity.id}`}
                  className="block group"
                >
                  <Card className="p-6 bg-black/40 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                          {impurity.name}
                        </CardTitle>
                        <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-cyan-400 transition-colors duration-300 flex-shrink-0 ml-2" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-white/60 uppercase tracking-wide mb-1">CP CAT No</p>
                          <p className="text-sm font-semibold text-white">{impurity.productInfo.table["CP CAT No"]}</p>
                        </div>
                        <div>
                          <p className="text-xs text-white/60 uppercase tracking-wide mb-1">Molecular Formula</p>
                          <p className="text-sm font-semibold text-white">{impurity.productInfo.table["Molecular Formula"]}</p>
                        </div>
                        <div>
                          <p className="text-xs text-white/60 uppercase tracking-wide mb-1">Molecular Weight</p>
                          <p className="text-sm font-semibold text-white">{impurity.productInfo.table["Molecular Weight"]}</p>
                        </div>
                        <div>
                          <Badge
                            variant={impurity.productInfo.table.Status === "In Stock" ? "default" : "outline"}
                            className={`mt-2 ${
                              impurity.productInfo.table.Status === "In Stock"
                                ? "bg-green-500/20 text-green-400 border-green-500/30"
                                : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                            }`}
                          >
                            {impurity.productInfo.table.Status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="py-12 px-4 sm:px-6 lg:px-8 mt-12">
            <div className="container mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Related Products</h2>
                <p className="text-white/70">Other Octreotide-related products</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {relatedProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="p-6 bg-black/40 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-white">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-white/60 uppercase tracking-wide mb-1">CP CAT No</p>
                          <p className="text-sm font-semibold text-white">{product.productInfo.table["CP CAT No"]}</p>
                        </div>
                        <div>
                          <p className="text-xs text-white/60 uppercase tracking-wide mb-1">Molecular Formula</p>
                          <p className="text-sm font-semibold text-white">{product.productInfo.table["Molecular Formula"]}</p>
                        </div>
                        <div>
                          <p className="text-xs text-white/60 uppercase tracking-wide mb-1">Molecular Weight</p>
                          <p className="text-sm font-semibold text-white">{product.productInfo.table["Molecular Weight"]}</p>
                        </div>
                        <div>
                          <Badge
                            variant={product.productInfo.table.Status === "In Stock" ? "default" : "outline"}
                            className={`mt-2 ${
                              product.productInfo.table.Status === "In Stock"
                                ? "bg-green-500/20 text-green-400 border-green-500/30"
                                : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                            }`}
                          >
                            {product.productInfo.table.Status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </div>
  )
}


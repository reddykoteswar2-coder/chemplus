"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { StructureVisual } from "@/components/structure-visual"
import { ArrowLeft } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"

// Import products data - in a real app, this would come from an API or database
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

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params?.slug as string

  // Find product by slug
  const product = realProducts.find((p) => {
    const productTitle = p.productinfo?.title || p.category
    const productSlug = productTitle.toLowerCase().replace(/\s+/g, "-")
    return productSlug === slug
  })

  useEffect(() => {
    if (!product && slug) {
      // Redirect to products page if product not found
      router.push("/products")
    }
  }, [product, slug, router])

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/70 mb-4">Product not found</p>
          <Link href="/products" className="text-cyan-400 hover:text-cyan-300 inline-block">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const productTitle = product.productinfo?.title || product.category
  const productInfo = product.productinfo?.table || {}

  // Get related products (other products in the same category or similar)
  const relatedProducts = realProducts
    .filter((p) => p.category === product.category && p.productinfo?.title !== productTitle)
    .slice(0, 3)

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
                  <span className="text-white">{productTitle}</span>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Back Button */}
        <section className="px-4 sm:px-6 lg:px-8 pb-4">
          <div className="container mx-auto">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-white/70 hover:text-cyan-400 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Products</span>
            </Link>
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
            <div className="max-w-6xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
                {productTitle}
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Chemical Structure */}
              <div className="lg:col-span-2">
                <Card className="p-6 sm:p-8 bg-black/40 backdrop-blur-xl border border-white/10 shadow-xl mb-8">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-white mb-4">Chemical Structure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <StructureVisual
                      name={productTitle}
                      formula={(productInfo as Record<string, string>)["Molecular Formula"]}
                      weight={(productInfo as Record<string, string>)["Molecular Weight"]}
                    />
                  </CardContent>
                </Card>

                {/* Tabs - Only show Product Overview for now */}
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-1 bg-black/40 border border-white/10 p-1">
                    <TabsTrigger 
                      value="overview" 
                      className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 text-white/70 data-[state=inactive]:hover:text-white transition-colors"
                    >
                      Product Overview
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="mt-6">
                    <Card className="p-6 bg-black/40 backdrop-blur-xl border border-white/10">
                      <CardContent className="space-y-4">
                        {Object.entries(productInfo).map(([key, value]) => (
                          <div key={key} className="flex flex-col sm:flex-row sm:items-center gap-2 pb-4 border-b border-white/10 last:border-0">
                            <p className="text-sm text-white/60 uppercase tracking-wide min-w-[200px]">{key}</p>
                            <p className="text-base font-semibold text-white">{value as string}</p>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Right Column - Product Info */}
              <div className="lg:col-span-1">
                <Card className="p-6 bg-black/40 backdrop-blur-xl border border-white/10 shadow-xl sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-white mb-4">{productTitle}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {productInfo["CAS NO"] && (
                      <div>
                        <p className="text-xs text-white/60 uppercase tracking-wide mb-1">CAS No</p>
                        <p className="text-base font-semibold text-white">{productInfo["CAS NO"]}</p>
                      </div>
                    )}
                    {productInfo["Molecular Formula"] && (
                      <div>
                        <p className="text-xs text-white/60 uppercase tracking-wide mb-1">Mol.F.</p>
                        <p className="text-base font-semibold text-white">{productInfo["Molecular Formula"]}</p>
                      </div>
                    )}
                    {productInfo["Molecular Weight"] && (
                      <div>
                        <p className="text-xs text-white/60 uppercase tracking-wide mb-1">Mol.Wt.</p>
                        <p className="text-base font-semibold text-white">{productInfo["Molecular Weight"]}</p>
                      </div>
                    )}
                    {productInfo.Status && (
                      <div>
                        <p className="text-xs text-white/60 uppercase tracking-wide mb-1">Inv. Status</p>
                        <Badge
                          variant={productInfo.Status === "In Stock" ? "default" : "outline"}
                          className={`mt-1 ${
                            productInfo.Status === "In Stock"
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                          }`}
                        >
                          {productInfo.Status}
                        </Badge>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="py-12 px-4 sm:px-6 lg:px-8 mt-12">
            <div className="container mx-auto max-w-6xl">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Related Products</h2>
                <p className="text-white/70">Other products in the same category</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {relatedProducts.map((relatedProduct) => {
                  const relatedTitle = relatedProduct.productinfo?.title || relatedProduct.category
                  const relatedSlug = relatedTitle.toLowerCase().replace(/\s+/g, "-")

                  return (
                    <Link key={relatedProduct.category} href={`/products/${relatedSlug}`} className="block group">
                      <Card className="p-6 bg-black/40 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 h-full">
                        <CardHeader>
                          <CardTitle className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {relatedTitle}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {relatedProduct.productinfo?.table?.["CAS NO"] && (
                              <div>
                                <p className="text-xs text-white/60 uppercase tracking-wide mb-1">CAS No</p>
                                <p className="text-sm font-semibold text-white">{relatedProduct.productinfo.table["CAS NO"]}</p>
                              </div>
                            )}
                            {relatedProduct.productinfo?.table?.Status && (
                              <Badge
                                variant={relatedProduct.productinfo.table.Status === "In Stock" ? "default" : "outline"}
                                className={`mt-2 ${
                                  relatedProduct.productinfo.table.Status === "In Stock"
                                    ? "bg-green-500/20 text-green-400 border-green-500/30"
                                    : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                }`}
                              >
                                {relatedProduct.productinfo.table.Status}
                              </Badge>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </div>
  )
}


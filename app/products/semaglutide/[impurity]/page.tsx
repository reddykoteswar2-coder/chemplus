"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { semaglutideData } from "@/lib/semaglutide-data"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"
import { StructureVisual } from "@/components/structure-visual"

export default function ImpurityPage() {
  const params = useParams()
  const router = useRouter()
  const impurityId = params?.impurity as string
  
  const impurity = semaglutideData.impurities.find((imp) => imp.id === impurityId)
  const { mainProduct, relatedProducts } = semaglutideData

  useEffect(() => {
    if (!impurity) {
      router.push("/products/semaglutide")
    }
  }, [impurity, router])

  if (!impurity) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/70">Impurity not found</p>
          <Link href="/products/semaglutide" className="text-cyan-400 hover:text-cyan-300 mt-4 inline-block">
            Back to Semaglutide
          </Link>
        </div>
      </div>
    )
  }

  // Get other impurities (excluding current one) for related products
  const otherImpurities = semaglutideData.impurities
    .filter((imp) => imp.id !== impurity.id)
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
                  <BreadcrumbLink href="/products/semaglutide" className="text-white/70 hover:text-cyan-400">
                    Semaglutide
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/50" />
                <BreadcrumbItem>
                  <span className="text-white">{impurity.name}</span>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Back Button */}
        <section className="px-4 sm:px-6 lg:px-8 pb-4">
          <div className="container mx-auto">
            <Link
              href="/products/semaglutide"
              className="inline-flex items-center gap-2 text-white/70 hover:text-cyan-400 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Semaglutide</span>
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
                {impurity.name}
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
                      name={impurity.name}
                      formula={impurity.productInfo.table["Molecular Formula"]}
                      weight={impurity.productInfo.table["Molecular Weight"]}
                      sequenceSources={[impurity.iupacName, impurity.synonym, impurity.name]}
                      image={impurity.structureImage}
                    />
                  </CardContent>
                </Card>

                {/* Tabs - Conditionally show tabs based on available data */}
                {(() => {
                  const hasDescription = !!(impurity.synonym || impurity.iupacName)
                  const hasTechnical = !!(impurity.productInfo.table["Molecular Formula"] || impurity.productInfo.table["Molecular Weight"])
                  const tabCount = 1 + (hasDescription ? 1 : 0) + (hasTechnical ? 1 : 0)
                  
                  return (
                    <Tabs defaultValue="overview" className="w-full">
                      <TabsList className={`grid w-full bg-black/40 border border-white/10 p-1 ${tabCount === 1 ? 'grid-cols-1' : tabCount === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                        <TabsTrigger 
                          value="overview" 
                          className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 text-white/70 data-[state=inactive]:hover:text-white transition-colors"
                        >
                          Product Overview
                        </TabsTrigger>
                        {hasDescription && (
                          <TabsTrigger 
                            value="description" 
                            className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 text-white/70 data-[state=inactive]:hover:text-white transition-colors"
                          >
                            Description
                          </TabsTrigger>
                        )}
                        {hasTechnical && (
                          <TabsTrigger 
                            value="technical" 
                            className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 text-white/70 data-[state=inactive]:hover:text-white transition-colors"
                          >
                            Technical Data
                          </TabsTrigger>
                        )}
                      </TabsList>

                      <TabsContent value="overview" className="mt-6">
                        <Card className="p-6 bg-black/40 backdrop-blur-xl border border-white/10">
                          <CardContent className="space-y-4">
                            {Object.entries(impurity.productInfo.table).map(([key, value]) => (
                              <div key={key} className="flex flex-col sm:flex-row sm:items-center gap-2 pb-4 border-b border-white/10 last:border-0">
                                <p className="text-sm text-white/60 uppercase tracking-wide min-w-[200px]">{key}</p>
                                <p className="text-base font-semibold text-white">{value}</p>
                              </div>
                            ))}
                            {impurity.productInfo.smiles && (
                              <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                                <p className="text-sm text-white/60 uppercase tracking-wide">SMILES</p>
                                <p className="text-xs font-mono text-white/80 break-all">{impurity.productInfo.smiles}</p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </TabsContent>

                      {hasDescription && (
                        <TabsContent value="description" className="mt-6">
                          <Card className="p-6 bg-black/40 backdrop-blur-xl border border-white/10">
                            <CardContent>
                              <div className="space-y-4">
                                {impurity.synonym && (
                                  <div>
                                    <p className="text-sm text-white/60 uppercase tracking-wide mb-2">Synonym</p>
                                    <p className="text-base text-white">{impurity.synonym}</p>
                                  </div>
                                )}
                                {impurity.iupacName && (
                                  <div>
                                    <p className="text-sm text-white/60 uppercase tracking-wide mb-2">IUPAC Name</p>
                                    <p className="text-sm text-white/80 leading-relaxed">{impurity.iupacName}</p>
                                  </div>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      )}

                      {hasTechnical && (
                        <TabsContent value="technical" className="mt-6">
                          <Card className="p-6 bg-black/40 backdrop-blur-xl border border-white/10">
                            <CardContent>
                              <div className="space-y-4">
                                <div>
                                  <p className="text-sm text-white/60 uppercase tracking-wide mb-2">Molecular Formula</p>
                                  <p className="text-base font-semibold text-white">{impurity.productInfo.table["Molecular Formula"]}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-white/60 uppercase tracking-wide mb-2">Molecular Weight</p>
                                  <p className="text-base font-semibold text-white">{impurity.productInfo.table["Molecular Weight"]}</p>
                                </div>
                                {impurity.productInfo.table["CAS NO"] && (
                                  <div>
                                    <p className="text-sm text-white/60 uppercase tracking-wide mb-2">CAS Number</p>
                                    <p className="text-base font-semibold text-white">{impurity.productInfo.table["CAS NO"]}</p>
                                  </div>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      )}
                    </Tabs>
                  )
                })()}
              </div>

              {/* Right Column - Product Info */}
              <div className="lg:col-span-1">
                <Card className="p-6 bg-black/40 backdrop-blur-xl border border-white/10 shadow-xl sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-white mb-4">{impurity.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-xs text-white/60 uppercase tracking-wide mb-1">CP CAT No</p>
                      <p className="text-base font-semibold text-white">{impurity.productInfo.table["CP CAT No"]}</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/60 uppercase tracking-wide mb-1">CAS No</p>
                      <p className="text-base font-semibold text-white">{impurity.productInfo.table["CAS NO"] || "NA"}</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/60 uppercase tracking-wide mb-1">Mol.F.</p>
                      <p className="text-base font-semibold text-white">{impurity.productInfo.table["Molecular Formula"]}</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/60 uppercase tracking-wide mb-1">Mol.Wt.</p>
                      <p className="text-base font-semibold text-white">{impurity.productInfo.table["Molecular Weight"]}</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/60 uppercase tracking-wide mb-1">Inv. Status</p>
                      <Badge
                        variant={impurity.productInfo.table.Status === "In Stock" ? "default" : "outline"}
                        className={`mt-1 ${
                          impurity.productInfo.table.Status === "In Stock"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                        }`}
                      >
                        {impurity.productInfo.table.Status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 mt-12">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Related Products</h2>
              <p className="text-white/70">Other Semaglutide-related products</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {/* Show other impurities */}
              {otherImpurities.map((imp) => (
                <Link key={imp.id} href={`/products/semaglutide/${imp.id}`} className="block group">
                  <Card className="p-6 bg-black/40 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 h-full">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {imp.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-white/60 uppercase tracking-wide mb-1">CP CAT No</p>
                          <p className="text-sm font-semibold text-white">{imp.productInfo.table["CP CAT No"]}</p>
                        </div>
                        <div>
                          <p className="text-xs text-white/60 uppercase tracking-wide mb-1">Molecular Formula</p>
                          <p className="text-sm font-semibold text-white">{imp.productInfo.table["Molecular Formula"]}</p>
                        </div>
                        <div>
                          <Badge
                            variant={imp.productInfo.table.Status === "In Stock" ? "default" : "outline"}
                            className={`mt-2 ${
                              imp.productInfo.table.Status === "In Stock"
                                ? "bg-green-500/20 text-green-400 border-green-500/30"
                                : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                            }`}
                          >
                            {imp.productInfo.table.Status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}

              {/* Show related products */}
              {relatedProducts.slice(0, 3 - otherImpurities.length).map((product) => (
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

        <Footer />
      </div>
    </div>
  )
}


import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-20 sm:pt-24 md:pt-24 lg:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Impurity Not Found</h1>
            <p className="text-lg text-white/70 mb-8">
              The requested Octreotide impurity could not be found.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products/octreotide">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  View All Impurities
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Back to Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}


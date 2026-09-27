import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://chempluspharma.com"),
  title: {
    default: "ChemPlus Pharma Private Limited | Pharmaceutical Reference Standards & API",
    template: "%s | ChemPlus Pharma",
  },
  description:
    "ChemPlus Pharma Private Limited - Your trusted partner in pharmaceutical reference standards, API products, custom synthesis, and analytical services. Serving healthcare providers, pharmacies, and hospitals across India with quality products and reliable service.",
  keywords: [
    "ChemPlus Pharma",
    "pharmaceutical reference standards",
    "API products",
    "custom synthesis",
    "pharmaceutical impurities",
    "pharmaceutical intermediates",
    "pharmaceutical testing",
    "India pharmaceutical supplier",
  ],
  authors: [{ name: "ChemPlus Pharma Private Limited" }],
  creator: "ChemPlus Pharma Private Limited",
  publisher: "ChemPlus Pharma Private Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://chempluspharma.com",
    siteName: "ChemPlus Pharma Private Limited",
    title: "ChemPlus Pharma Private Limited | Pharmaceutical Reference Standards & API",
    description:
      "Your trusted partner in pharmaceutical reference standards, API products, custom synthesis, and analytical services. Quality products and reliable service across India.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ChemPlus Pharma Private Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChemPlus Pharma Private Limited",
    description:
      "Your trusted partner in pharmaceutical reference standards, API products, and custom synthesis.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Favicon and app icons come from app/favicon.ico, app/icon.png and app/apple-icon.png
  alternates: {
    canonical: "https://chempluspharma.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-black text-white relative`}>
        {children}
      </body>
    </html>
  )
}

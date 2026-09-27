import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-teal-500/5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-12">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-24 h-24 rounded-full bg-white overflow-hidden shrink-0">
                <Image
                  src="/chemplus-logo.png"
                  alt="ChemPlus Pharma Private Limited logo"
                  width={160}
                  height={160}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">ChemPlus Pharma</h3>
                <p className="text-xs text-sky-400 font-medium">Private Limited</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-md mb-4">
              Your trusted partner in pharmaceutical distribution, committed to quality and reliability.
            </p>
            <div className="flex items-center gap-2 text-white/80 mb-4">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+918074814132" className="text-sm font-medium hover:text-cyan-400 transition-colors duration-300">
                +91 8074814132
              </a>
            </div>
            <Link href="/contact#message-form">
              <button className="px-6 py-2.5 bg-white text-black rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95 text-sm">
                Get in Touch
              </button>
            </Link>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/about", label: "About Us" },
                { href: "/products", label: "Products" },
                { href: "/services", label: "Services" },
                { href: "/contact#message-form", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-white/60 hover:text-cyan-400 transition-colors duration-300 inline-block hover:translate-x-1">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "#", label: "Privacy Policy" },
                { href: "#", label: "Terms of Service" },
                { href: "#", label: "Compliance" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-white/60 hover:text-cyan-400 transition-colors duration-300 inline-block hover:translate-x-1">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} ChemPlus Pharma Private Limited. All rights reserved. | CIN:
            U46497TS2024PTC188197
          </p>
        </div>
      </div>
    </footer>
  )
}

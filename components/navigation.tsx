"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-brand-foundation/40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-white tracking-tighter" onClick={closeMenu}>
            Lithium<span className="text-brand-primary">Labs</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            <a href="/services" className="text-white/60 hover:text-white transition-all text-sm font-medium tracking-wide uppercase">
              Services
            </a>
            <a href="/about" className="text-white/60 hover:text-white transition-all text-sm font-medium tracking-wide uppercase">
              About
            </a>
            <a href="/portfolio" className="text-white/60 hover:text-white transition-all text-sm font-medium tracking-wide uppercase">
              Portfolio
            </a>
            <a href="/contact" className="text-white/60 hover:text-white transition-all text-sm font-medium tracking-wide uppercase">
              Contact
            </a>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-6 rounded-xl font-bold transition-transform hover:scale-105 active:scale-95">
              Get Started
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-white hover:bg-white/10 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden relative z-50">
            <div className="px-4 pt-4 pb-12 space-y-4 backdrop-blur-3xl bg-brand-foundation/95 border-t border-white/10 rounded-b-[2rem] shadow-2xl animate-in slide-in-from-top duration-300">
              <a
                href="/services"
                className="block px-6 py-4 text-white/70 hover:text-white hover:bg-white/5 rounded-2xl transition-all font-medium text-lg"
                onClick={closeMenu}
              >
                Services
              </a>
              <a
                href="/about"
                className="block px-6 py-4 text-white/70 hover:text-white hover:bg-white/5 rounded-2xl transition-all font-medium text-lg"
                onClick={closeMenu}
              >
                About
              </a>
              <a
                href="/portfolio"
                className="block px-6 py-4 text-white/70 hover:text-white hover:bg-white/5 rounded-2xl transition-all font-medium text-lg"
                onClick={closeMenu}
              >
                Portfolio
              </a>
              <a
                href="/contact"
                className="block px-6 py-4 text-white/70 hover:text-white hover:bg-white/5 rounded-2xl transition-all font-medium text-lg"
                onClick={closeMenu}
              >
                Contact
              </a>
              <div className="pt-6 px-4">
                <Button className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-6 rounded-2xl text-lg font-bold shadow-xl" onClick={closeMenu}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

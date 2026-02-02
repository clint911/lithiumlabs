"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "backdrop-blur-3xl bg-brand-foundation/90 py-4 shadow-2xl border-b border-white/5" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-3xl font-black text-white tracking-tighter uppercase" onClick={closeMenu}>
            Lithium<span className="text-brand-primary">Labs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-all text-[11px] font-black tracking-[0.3em] uppercase ${pathname === link.href ? "text-brand-primary" : "text-white/40 hover:text-white"}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 h-12 rounded-2xl font-black uppercase text-xs tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-brand-primary/20">
                Initiate Build
              </Button>
            </Link>
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
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden relative z-50">
            <div className="px-6 pt-10 pb-20 space-y-8 backdrop-blur-3xl bg-brand-foundation/98 border-t border-white/10 rounded-b-[4rem] shadow-4xl animate-in slide-in-from-top duration-500 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-3xl -mr-32 -mt-32" />
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-4 transition-all font-black text-3xl uppercase tracking-tighter border-b border-white/5 ${pathname === link.href ? "text-brand-primary" : "text-white/40 hover:text-white"}`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-10">
                <Link href="/contact" onClick={closeMenu}>
                  <Button className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-10 rounded-[2rem] text-2xl font-black shadow-3xl shadow-brand-primary/30 uppercase tracking-tighter">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

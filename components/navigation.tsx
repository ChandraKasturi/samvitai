"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-slate-900/95 to-blue-900/95 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white font-sans tracking-tight">SAMVIT AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white/90 hover:text-blue-300 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-white/90 hover:text-blue-300 transition-colors font-medium"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("corporate-learning")}
                className="text-white/90 hover:text-blue-300 transition-colors font-medium"
              >
                AI Learning
              </button>
              <button
                onClick={() => scrollToSection("mvp-builds")}
                className="text-white/90 hover:text-blue-300 transition-colors font-medium"
              >
                MVP
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white/90 hover:text-blue-300 transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white/90 hover:text-blue-300 transition-colors font-medium"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-r from-slate-900/95 to-blue-900/95 border-b border-white/10">
            <button
              onClick={() => scrollToSection("home")}
              className="block px-3 py-2 text-white/90 hover:text-blue-300 transition-colors w-full text-left font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="block px-3 py-2 text-white/90 hover:text-blue-300 transition-colors w-full text-left font-medium"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("corporate-learning")}
              className="block px-3 py-2 text-white/90 hover:text-blue-300 transition-colors w-full text-left font-medium"
            >
              Corporate Learning
            </button>
            <button
              onClick={() => scrollToSection("mvp-builds")}
              className="block px-3 py-2 text-white/90 hover:text-blue-300 transition-colors w-full text-left font-medium"
            >
              MVP Builds
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 text-white/90 hover:text-blue-300 transition-colors w-full text-left font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 text-white/90 hover:text-blue-300 transition-colors w-full text-left font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

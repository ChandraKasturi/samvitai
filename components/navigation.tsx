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
    <nav className="fixed top-0 w-full bg-gradient-to-r from-theme-1-primary/90 via-theme-1-secondary/90 to-theme-1-primary/90 backdrop-blur-lg border-b border-theme-1-accent/20 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-ai-gradient font-heading">Samvit AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("corporate-learning")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Corporate Learning
              </button>
              <button
                onClick={() => scrollToSection("mvp-builds")}
                className="text-foreground hover:text-primary transition-colors"
              >
                MVP Builds
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            <button
              onClick={() => scrollToSection("home")}
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("corporate-learning")}
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
            >
              Corporate Learning
            </button>
            <button
              onClick={() => scrollToSection("mvp-builds")}
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
            >
              MVP Builds
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 theme-primary opacity-5"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 text-blue-600 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">AI Innovation at Scale</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 animate-fade-in-up">
            Building the Future of <span className="text-primary-gradient">AI Products</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Samvit AI is where innovation meets execution—fast, scalable, and reliable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-400">
            <Button
              size="lg"
              className="theme-primary hover:opacity-90 text-white px-8 py-4 text-lg font-semibold group"
              onClick={() => window.open("https://sahasra.ai", "_blank")}
            >
              Explore Sahasra AI
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg font-semibold border-2 hover:bg-blue-600 hover:text-white bg-transparent border-blue-600 text-blue-600"
              onClick={() => scrollToSection("mvp-builds")}
            >
              Build with Us
            </Button>
          </div>

          {/* Stats or social proof */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up delay-600">
            <div className="text-center">
              <div className="text-3xl font-bold font-serif text-blue-600 mb-2">2-3 weeks</div>
              <div className="text-muted-foreground">MVP Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-serif text-teal-500 mb-2">AI-Powered</div>
              <div className="text-muted-foreground">Learning Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold font-serif text-cyan-500 mb-2">Enterprise</div>
              <div className="text-muted-foreground">Ready Products</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

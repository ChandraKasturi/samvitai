"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, Code, Rocket, ArrowRight, Clock, Shield, Zap } from "lucide-react"

export function MvpBuildsSection() {
  const process = [
    {
      step: "01",
      title: "Idea",
      description: "We analyze your concept and define the MVP scope",
      icon: Lightbulb,
    },
    {
      step: "02",
      title: "Build",
      description: "Rapid development with scalable architecture",
      icon: Code,
    },
    {
      step: "03",
      title: "Launch",
      description: "Deploy your customer-ready MVP to production",
      icon: Rocket,
    },
  ]

  const features = [
    {
      icon: Clock,
      title: "2-3 Week Delivery",
      description: "Fast turnaround without compromising quality",
    },
    {
      icon: Shield,
      title: "Production Ready",
      description: "Scalable, secure, and maintainable code",
    },
    {
      icon: Zap,
      title: "Modern Tech Stack",
      description: "Built with the latest technologies and best practices",
    },
  ]

  return (
    <section id="mvp-builds" className="py-24 bg-gradient-to-br from-slate-900 via-cyan-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-white">
            From Idea to <span style={{ color: "var(--mvp-primary)" }}>MVP in Weeks</span>
          </h2>
          <p className="text-xl text-cyan-100/80 max-w-3xl mx-auto">
            Delivering customer-ready Minimum Viable Products within 2–3 weeks.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {process.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.step} className="relative">
                {/* Connection line */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-[var(--mvp-primary)]/20 z-0"></div>
                )}

                <Card className="relative z-10 text-center bg-slate-800/50 backdrop-blur-sm border-2 border-cyan-500/20 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[var(--mvp-primary)]/10 flex items-center justify-center mb-4 relative group-hover:bg-[var(--mvp-primary)]/20 transition-colors">
                      <Icon className="w-8 h-8 text-[var(--mvp-primary)] group-hover:scale-110 transition-transform" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[var(--mvp-primary)] text-white text-sm font-bold flex items-center justify-center">
                        {step.step}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-heading text-white">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-cyan-100/70 mb-4">{step.description}</CardDescription>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-300 transition-colors bg-transparent"
                      onClick={() => window.open("https://agentgenix.io", "_blank")}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="text-center bg-slate-800/50 backdrop-blur-sm border-2 border-cyan-500/20 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[var(--mvp-primary)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--mvp-primary)]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[var(--mvp-primary)] group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-cyan-100/70 mb-4">{feature.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-300 transition-colors bg-transparent"
                    onClick={() => window.open("https://agentgenix.io", "_blank")}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-[var(--mvp-primary)]/5 border-[var(--mvp-primary)]/20 max-w-2xl mx-auto backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-heading mb-4 text-white">Ready to Build Your MVP?</h3>
              <p className="text-cyan-100/70 mb-6">
                Let's turn your idea into a customer-ready product in just 2-3 weeks.
              </p>
              <Button
                size="lg"
                className="bg-[var(--mvp-primary)] hover:bg-[var(--mvp-primary)]/90 text-white px-8 py-4 text-lg font-semibold group"
                onClick={() => window.open("https://agentgenix.io", "_blank")}
              >
                Start Your MVP Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

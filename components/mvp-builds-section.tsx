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
      description: "Scalable, secure, and maintainable code. Code that you own",
    },
    {
      icon: Zap,
      title: "Modern Tech Stack",
      description: "Built with the latest technologies and best practices",
    },
  ]

  return (
    <section id="mvp-builds" className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            From Idea to <span className="text-purple-600">MVP in Weeks</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-purple-500/20 z-0"></div>
                )}

                <Card className="relative z-10 text-center bg-white/80 backdrop-blur-sm border-2 border-purple-200/50 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-purple-500/10 flex items-center justify-center mb-4 relative group-hover:bg-purple-500/20 transition-colors">
                      <Icon className="w-8 h-8 text-purple-500 group-hover:scale-110 transition-transform" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-purple-500 text-white text-sm font-bold flex items-center justify-center">
                        {step.step}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-heading">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground mb-4">
                      {step.description}
                    </CardDescription>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-purple-400/50 text-purple-600 hover:bg-purple-50 hover:border-purple-500 transition-colors bg-transparent"
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
                className="text-center bg-white/80 backdrop-blur-sm border-2 border-purple-200/50 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto rounded-full bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-purple-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-400/50 text-purple-600 hover:bg-purple-50 hover:border-purple-500 transition-colors bg-transparent"
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
          <Card className="bg-purple-500/5 border-purple-500/20 max-w-2xl mx-auto backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-heading mb-4">Ready to Build Your MVP?</h3>
              <p className="text-muted-foreground mb-6">
                Let's turn your idea into a customer-ready product in just 2-3 weeks.
              </p>
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold group"
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

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Building2, Rocket, ArrowRight } from "lucide-react"

export function ProductsSection() {
  const products = [
    {
      title: "Sahasra AI",
      subtitle: "Education App",
      description: "AI-powered learning for students.",
      note: "Only learning app that students need",
      icon: GraduationCap,
      link: "https://sahasra.ai",
      theme: "education",
      features: ["Personalized Learning", "AI Tutoring", "Progress Tracking"],
    },
    {
      title: "Learning",
      subtitle: "Corporate Training",
      description: "Upskill in Generative AI and Agentic Framwworks.",
      note: "In partnership with Mastishka School of AI.",
      icon: Building2,
      link: "https://www.mastishka.ai",
      theme: "corporate",
      features: ["Expert Instructors", "Hands-on Projects", "Certification"],
    },
    {
      title: "MVP Builds",
      subtitle: "Rapid Development",
      description: "Ship customer-ready MVPs in just 2–3 weeks.",
      note: "Create the app that you always wanted to build",
      icon: Rocket,
      link: "https://agentgenix.io",
      theme: "mvp",
      features: ["Fast Delivery", "Scalable Architecture", "Production Ready"],
    },
  ]

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
            Our <span className="text-primary-gradient">Offerings</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform how you learn, build, and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <Card
                key={product.title}
                className={`group relative overflow-hidden border-2 border-gray-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] ${
                  product.theme === "education"
                    ? "hover:border-teal-400 hover:shadow-teal-500/25 hover:bg-teal-50/30"
                    : product.theme === "mvp"
                      ? "hover:border-cyan-400 hover:shadow-cyan-500/25 hover:bg-cyan-50/30"
                      : "hover:border-blue-500 hover:shadow-blue-600/25 hover:bg-blue-50/30"
                } backdrop-blur-sm bg-white/80`}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                      product.theme === "education"
                        ? "bg-teal-500/10"
                        : product.theme === "mvp"
                          ? "bg-cyan-500/10"
                          : "bg-blue-600/10"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 ${
                        product.theme === "education"
                          ? "text-teal-500"
                          : product.theme === "mvp"
                            ? "text-cyan-500"
                            : "text-blue-600"
                      }`}
                    />
                  </div>
                  <CardTitle className="text-2xl font-serif">{product.title}</CardTitle>
                  <CardDescription className="text-lg font-medium text-muted-foreground">
                    {product.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center space-y-6">
                  <p className="text-foreground text-lg leading-relaxed">{product.description}</p>

                  {product.note && <p className="text-sm text-muted-foreground italic">{product.note}</p>}

                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            product.theme === "education"
                              ? "bg-teal-500"
                              : product.theme === "mvp"
                                ? "bg-cyan-500"
                                : "bg-blue-600"
                          }`}
                        ></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full group relative overflow-hidden transition-all duration-300 ${
                      product.theme === "education"
                        ? "bg-gradient-to-r from-teal-500 to-lime-500 hover:from-teal-600 hover:to-lime-600 border-0"
                        : product.theme === "mvp"
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 border-0"
                          : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0"
                    } text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105`}
                    onClick={() => window.open(product.link, "_blank", "noopener,noreferrer")}
                  >
                    <span className="relative z-10">
                      {product.theme === "education"
                        ? "Explore Learning"
                        : product.theme === "mvp"
                          ? "Start Building"
                          : "Learn More"}
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

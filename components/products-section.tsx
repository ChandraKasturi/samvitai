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
      icon: GraduationCap,
      link: "https://sahasra.ai",
      theme: "education",
      features: ["Personalized Learning", "AI Tutoring", "Progress Tracking"],
    },
    {
      title: "Learning",
      subtitle: "Corporate Training",
      description: "Upskill your teams in Generative AI and Agentic frameworks.",
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
      icon: Rocket,
      link: "https://agentgenix.io",
      theme: "mvp",
      features: ["Fast Delivery", "Scalable Architecture", "Production Ready"],
    },
  ]

  return (
    <section
      id="products"
      className="py-24 bg-gradient-to-br from-theme-1-primary/5 via-theme-1-secondary/10 to-theme-1-accent/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Our <span className="text-ai-gradient">Products</span>
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
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 bg-white/80 backdrop-blur-sm ${
                  product.theme === "education"
                    ? "border-theme-2-primary/20 hover:border-theme-2-primary hover:shadow-theme-2-primary/20"
                    : product.theme === "mvp"
                      ? "border-theme-3-primary/20 hover:border-theme-3-primary hover:shadow-theme-3-primary/20"
                      : "border-theme-1-primary/20 hover:border-theme-1-primary hover:shadow-theme-1-primary/20"
                }`}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                      product.theme === "education"
                        ? "bg-theme-2-primary/10"
                        : product.theme === "mvp"
                          ? "bg-theme-3-primary/10"
                          : "bg-theme-1-primary/10"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 ${
                        product.theme === "education"
                          ? "text-theme-2-primary"
                          : product.theme === "mvp"
                            ? "text-theme-3-primary"
                            : "text-theme-1-primary"
                      }`}
                    />
                  </div>
                  <CardTitle className="text-2xl font-heading">{product.title}</CardTitle>
                  <CardDescription className="text-lg font-medium text-muted-foreground">
                    {product.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center space-y-6">
                  <p className="text-foreground text-lg leading-relaxed">{product.description}</p>

                  {product.note && <p className="text-sm text-muted-foreground italic">{product.note}</p>}

                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center gap-2 text-sm text-foreground">
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            product.theme === "education"
                              ? "bg-theme-2-primary"
                              : product.theme === "mvp"
                                ? "bg-theme-3-primary"
                                : "bg-theme-1-primary"
                          }`}
                        ></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full group text-white font-semibold ${
                      product.theme === "education"
                        ? "bg-theme-2-primary hover:bg-theme-2-primary/90"
                        : product.theme === "mvp"
                          ? "bg-theme-3-primary hover:bg-theme-3-primary/90"
                          : "bg-theme-1-primary hover:bg-theme-1-primary/90"
                    }`}
                    onClick={() => window.open(product.link, "_blank")}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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

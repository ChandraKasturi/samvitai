"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Award, TrendingUp, ArrowRight, CheckCircle } from "lucide-react"

export function CorporateLearningSection() {
  const benefits = [
    "Expert-led AI training programs",
    "Hands-on project experience",
    "Industry-recognized certifications",
    "Customized curriculum for your team",
    "Ongoing support and mentorship",
  ]

  const stats = [
    { icon: Users, value: "500+", label: "Professionals Trained" },
    { icon: Award, value: "95%", label: "Completion Rate" },
    { icon: TrendingUp, value: "40%", label: "Skill Improvement" },
  ]

  return (
    <section id="corporate-learning" className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Learning that <span className="text-purple-600">Transforms Teams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Partnering with Mastishka School of AI to deliver world-class AI programs.
          </p>
          <p className="text-lg text-muted-foreground">
            Upskill your teams in Generative AI and Agentic frameworks with industry experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-heading">Enterprise AI Training Programs</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transform your organization with cutting-edge AI knowledge. Our comprehensive training programs are
                designed to equip your teams with the skills needed to leverage AI technologies effectively.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold group"
              onClick={() => window.open("https://www.mastishka.ai", "_blank")}
            >
              Explore Training Programs
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="space-y-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card
                  key={index}
                  className="border-2 border-purple-200/50 hover:border-purple-400 hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 bg-white/80 backdrop-blur-sm group cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                        <Icon className="w-6 h-6 text-purple-500" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-purple-600">{stat.value}</div>
                        <div className="text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-400 transition-all duration-200 bg-transparent"
                      onClick={() => window.open("https://www.mastishka.ai", "_blank")}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Testimonial placeholder */}
        <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200/50 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <blockquote className="text-xl italic text-foreground mb-4">
                "The AI training program transformed our team's capabilities. We're now implementing AI solutions that
                have increased our productivity by 40%."
              </blockquote>
              <div className="text-muted-foreground">
                <div className="font-semibold">Rama Krishna</div>
                <div>CTO, Zaravya Solutions</div>
              </div>
            </div>
            <div className="text-center">
              <Button
                variant="outline"
                className="border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-400 transition-all duration-200 bg-transparent"
                onClick={() => window.open("https://www.mastishka.ai", "_blank")}
              >
                Start Your Training Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

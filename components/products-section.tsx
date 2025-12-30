"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, MessageCircle, Upload, Brain, Target, BarChart3, Globe, ArrowRight, Calculator, Users, Calendar, FolderClosed, BadgeIndianRupee, PieChart, Briefcase } from "lucide-react"

export function ProductsSection() {
  const features = [
    {
      title: "Student Chat Assistant",
      description: "Voice & text chat in English + Indian languages. Get instant answers to your academic questions.",
      icon: MessageCircle,
      popular: true,
    },
    {
      title: "Upload & Learn",
      description:
        "Ask questions from uploaded documents (PDFs/images). Turn any study material into an interactive learning experience.",
      icon: Upload,
    },
    {
      title: "Syllabus-Aware Learning",
      description: "Choose between syllabus-specific responses or open learning mode for broader knowledge.",
      icon: Brain,
    },
    {
      title: "Smart Assessments",
      description:
        "MCQs, fill-in-the-blanks, short answers with review tools. Track your progress and identify areas for improvement.",
      icon: Target,
    },
    {
      title: "AI Study Planner",
      description: "Personalized study plans based on your goals, available time, and learning pace.",
      icon: BarChart3,
    },
    {
      title: "Multilingual Support",
      description:
        "English + regional languages (Hindi, Tamil, Telugu, and more). Learn in the language you're most comfortable with.",
      icon: Globe,
    },
  ]

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* NoTutor Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
            Meet <span className="text-primary-gradient">NoTutor</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your AI Student Buddy - Smart learning powered by AI for every Indian student. Personalized learning,
            assessments, and study planning tailored to your syllabus.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="group relative overflow-hidden border-2 border-purple-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-purple-400 hover:shadow-purple-500/25 hover:bg-purple-50/30 backdrop-blur-sm bg-white/80">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 bg-purple-500/10">
                <GraduationCap className="w-10 h-10 text-purple-500" />
              </div>
              <CardTitle className="text-4xl font-serif mb-2">NoTutor AI</CardTitle>
              <CardDescription className="text-xl font-medium text-muted-foreground">
                Your AI Student Buddy
              </CardDescription>
            </CardHeader>

            <CardContent className="text-center space-y-8">
              <p className="text-foreground text-xl leading-relaxed">
                The only learning app that students need. Supporting multiple Indian education boards and languages with
                personalized AI-powered learning.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-lg bg-purple-50/50">
                  <div className="text-3xl font-bold text-purple-600 mb-1">₹0</div>
                  <div className="text-sm text-muted-foreground">Free Plan Available</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-purple-50/50">
                  <div className="text-3xl font-bold text-purple-600 mb-1">10+</div>
                  <div className="text-sm text-muted-foreground">Indian Languages</div>
                </div>
              </div>

              <Button
                className="w-full max-w-md mx-auto group relative overflow-hidden transition-all duration-300 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 border-0 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => window.open("https://notutor.ai", "_blank", "noopener,noreferrer")}
              >
                <span className="relative z-10">Start Learning with NoTutor</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-bold font-serif text-center mb-12">
            Everything you need to <span className="text-purple-600">excel</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={feature.title}
                  className="group relative overflow-hidden border-2 border-purple-100/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-purple-500/20 backdrop-blur-sm bg-white/90"
                >
                  {feature.popular && (
                    <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Popular
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-purple-500/10">
                      <Icon className="w-6 h-6 text-purple-500" />
                    </div>
                    <CardTitle className="text-lg font-serif">{feature.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* ProFirm360 Section */}
        <div className="text-center mb-16 pt-16 border-t border-slate-200">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
            Meet <span className="text-blue-600">ProFirm360</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practice Management for CA & CS Firms — End-to-End, GST-Ready. Manage clients, track tasks, and automate compliance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="group relative overflow-hidden border-2 border-blue-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-blue-400 hover:shadow-blue-500/25 hover:bg-blue-50/30 backdrop-blur-sm bg-white/80">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 bg-blue-500/10">
                <Briefcase className="w-10 h-10 text-blue-600" />
              </div>
              <CardTitle className="text-4xl font-serif mb-2">ProFirm360</CardTitle>
              <CardDescription className="text-xl font-medium text-muted-foreground">
                Smart Practice Management
              </CardDescription>
            </CardHeader>

            <CardContent className="text-center space-y-8">
              <p className="text-foreground text-xl leading-relaxed">
                Streamline your entire practice. Manage clients, track tasks, automate GST compliance, handle invoicing, and generate real-time reports in one secure platform.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-lg bg-blue-50/50">
                  <div className="text-3xl font-bold text-blue-600 mb-1">GST</div>
                  <div className="text-sm text-muted-foreground">Automated Compliance</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-blue-50/50">
                  <div className="text-3xl font-bold text-blue-600 mb-1">360°</div>
                  <div className="text-sm text-muted-foreground">Firm Management</div>
                </div>
              </div>

              <Button
                className="w-full max-w-md mx-auto group relative overflow-hidden transition-all duration-300 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 border-0 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => window.open("https://profirm360.com", "_blank", "noopener,noreferrer")}
              >
                <span className="relative z-10">Get 30-Day Free Trial</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold font-serif text-center mb-12">
            Features built for <span className="text-blue-600">Associates</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "GST Invoicing",
                description: "Generate professional invoices with auto-calculated CGST, SGST, and IGST, including HSN/SAC codes.",
                icon: Calculator
              },
              {
                title: "Client Management",
                description: "A centralized database for all client details, contacts, and engagement history.",
                icon: Users
              },
              {
                title: "Compliance Calendar",
                description: "Track recurring tasks and statutory deadlines to avoid penalties never miss a due date.",
                icon: Calendar
              },
              {
                title: "Document Storage",
                description: "Securely store and search client documents with access from anywhere at any time.",
                icon: FolderClosed
              },
              {
                title: "Payment Tracking",
                description: "Record payments, manage credit notes, and identify overdue invoices instantly.",
                icon: BadgeIndianRupee
              },
              {
                title: "Advanced Reports",
                description: "Gain real-time insights into revenue, workload, pending tasks, and outstanding payments.",
                icon: PieChart
              }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={feature.title}
                  className="group relative overflow-hidden border-2 border-blue-100/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-blue-500/20 backdrop-blur-sm bg-white/90"
                >
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-blue-500/10">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg font-serif">{feature.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

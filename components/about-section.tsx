import { Card, CardContent } from "@/components/ui/card"
import { Brain, Target, Users, Zap } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Brain,
      title: "AI-First Approach",
      description:
        "We leverage cutting-edge AI technologies to solve complex problems and create innovative solutions.",
    },
    {
      icon: Target,
      title: "Execution Excellence",
      description:
        "From concept to deployment, we ensure every project meets the highest standards of quality and performance.",
    },
    {
      icon: Users,
      title: "Partnership Focus",
      description: "We work closely with our clients and partners to deliver solutions that truly make a difference.",
    },
    {
      icon: Zap,
      title: "Rapid Innovation",
      description: "Speed without compromise - we deliver fast, scalable, and reliable AI products that work.",
    },
  ]

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            About <span className="text-ai-gradient">Samvit AI</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Samvit AI is an umbrella company building AI-driven products that transform how people learn, work, and
              innovate. We bridge the gap between cutting-edge AI research and practical, scalable solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to democratize AI technology by creating products that are not just powerful, but also
              accessible, reliable, and ready for real-world deployment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold font-heading mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

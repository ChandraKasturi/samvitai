"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Get in <span className="text-ai-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into AI-powered solutions? Let's start the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-2 border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl hover:border-blue-300/70 dark:hover:border-blue-700/70 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-heading">Send us a message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or how we can help..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl group transition-all duration-300"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-heading mb-6">Let's Connect</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Whether you're looking to build an MVP, train your team in AI, or explore our educational solutions,
                we're here to help you succeed.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-lg border border-blue-200/30 dark:border-blue-800/30 hover:scale-[1.02] hover:shadow-md hover:border-blue-300/50 dark:hover:border-blue-700/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">hello@samvitai.com</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-auto bg-transparent"
                  onClick={() => window.open("mailto:hello@samvitai.com", "_blank")}
                >
                  Contact
                </Button>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg border border-blue-200/30 dark:border-blue-800/30 hover:scale-[1.02] hover:shadow-md hover:border-blue-300/50 dark:hover:border-blue-700/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-muted-foreground">+91 9980276563</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-auto bg-transparent"
                  onClick={() => window.open("tel:+15551234567", "_blank")}
                >
                  Call
                </Button>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg border border-blue-200/30 dark:border-blue-800/30 hover:scale-[1.02] hover:shadow-md hover:border-blue-300/50 dark:hover:border-blue-700/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">103, Yashna Summit, HSR Layout, Bangalore - 560102</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-auto bg-transparent"
                  onClick={() => window.open("https://maps.google.com/?q=San+Francisco,+CA", "_blank")}
                >
                  View
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <Card className="bg-primary/5 border-2 border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg hover:border-blue-300/70 dark:hover:border-blue-700/70 transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start p-0 h-auto text-left"
                    onClick={() => window.open("https://sahasra.ai", "_blank")}
                  >
                    → Explore Sahasra AI
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start p-0 h-auto text-left"
                    onClick={() => window.open("https://www.mastishka.ai", "_blank")}
                  >
                    → Corporate Training Programs
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start p-0 h-auto text-left"
                    onClick={() => window.open("https://agentgenix.io", "_blank")}
                  >
                    → MVP Development Services
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

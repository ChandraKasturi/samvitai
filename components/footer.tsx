"use client"

import { Linkedin, Youtube, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white font-heading">Samvit AI</span>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Building the future of AI products with innovation, speed, and reliability. Where cutting-edge technology
              meets practical solutions.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => window.open("https://linkedin.com", "_blank")}
                className="w-10 h-10 rounded-full bg-slate-700 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={() => window.open("https://youtube.com", "_blank")}
                className="w-10 h-10 rounded-full bg-slate-700 hover:bg-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Youtube className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={() => window.open("https://x.com", "_blank")}
                className="w-10 h-10 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Products</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button
                  onClick={() => window.open("https://sahasra.ai", "_blank")}
                  className="hover:text-white transition-colors"
                >
                  Sahasra AI
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.open("https://www.mastishka.ai", "_blank")}
                  className="hover:text-white transition-colors"
                >
                  Corporate Learning
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.open("https://agentgenix.io", "_blank")}
                  className="hover:text-white transition-colors"
                >
                  MVP Builds
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2025 Samvit AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

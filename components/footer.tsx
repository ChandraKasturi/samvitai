"use client"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-ai-gradient font-heading">Samvit AI</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Building the future of AI products with innovation, speed, and reliability. Where cutting-edge technology
              meets practical solutions.
            </p>
            <div className="flex space-x-4">
              {/* Social media placeholders */}
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <span className="text-xs">Li</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <span className="text-xs">Tw</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <span className="text-xs">Gh</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <button
                  onClick={() => window.open("https://sahasra.ai", "_blank")}
                  className="hover:text-foreground transition-colors"
                >
                  Sahasra AI
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.open("https://www.mastishka.ai", "_blank")}
                  className="hover:text-foreground transition-colors"
                >
                  Corporate Learning
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.open("https://agentgenix.io", "_blank")}
                  className="hover:text-foreground transition-colors"
                >
                  MVP Builds
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-foreground transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-foreground transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2024 Samvit AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

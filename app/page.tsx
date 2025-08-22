import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { CorporateLearningSection } from "@/components/corporate-learning-section"
import { MvpBuildsSection } from "@/components/mvp-builds-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProductsSection />
        <CorporateLearningSection />
        <MvpBuildsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

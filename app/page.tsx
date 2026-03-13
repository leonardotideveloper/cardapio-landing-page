import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Showcase } from "@/components/showcase"
import { Pricing } from "@/components/pricing"
import { Benefits } from "@/components/benefits"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
        <Benefits />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

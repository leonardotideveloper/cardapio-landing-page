import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CreditCard, Truck } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-8 pb-12 md:pt-12 md:pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Novo: CRM com Automação de Mensagens
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
              Cardápio digital que{" "}
              <span className="text-primary">transforma</span> seu restaurante
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Modernize a experiência dos seus clientes com um cardápio digital 
              elegante, fácil de atualizar e que aumenta suas vendas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#contato" className="gap-2">
                  Começar Agora
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#funcionalidades">Ver Funcionalidades</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">200</p>
                <p className="text-sm text-muted-foreground">Restaurantes</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">30%</p>
                <p className="text-sm text-muted-foreground">Aumento em vendas</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">4.9</p>
                <p className="text-sm text-muted-foreground">Avaliação média</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative lg:h-[550px] flex items-center justify-center">
            <div className="relative">
              {/* Phone Image */}
              <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%209%20de%20mar.%20de%202026%2C%2017_25_31-LildJo9pSVtT8vtdLyFJOU9kUyGEvn.png"
                  alt="Cardápio digital Cardápio Pro em um iPhone mostrando pizzaria Bora Comer com categorias, produtos e preços"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-card p-3 md:p-4 rounded-xl shadow-lg border border-border animate-pulse">
                <CreditCard className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-card p-3 md:p-4 rounded-xl shadow-lg border border-border">
                <Truck className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              
              {/* Feature Badge */}
              <div className="absolute -right-4 md:-right-8 top-1/3 bg-primary text-primary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-lg text-xs md:text-sm font-medium">
                Delivery Integrado
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

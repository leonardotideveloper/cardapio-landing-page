"use client"

import { Button } from "@/components/ui/button"
import { Check, X, Zap, Star } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Basic",
    price: "100",
    description: "Ideal para quem está começando e quer digitalizar seu cardápio",
    popular: false,
    features: [
      { name: "Cardápio digital ilimitado", included: true },
      { name: "Design responsivo", included: true },
      { name: "Atualizações em tempo real", included: true },
      { name: "Suporte por email", included: true },
      { name: "Gestão de categorias", included: true },
      { name: "KDS - Kitchen Display", included: true },
      { name: "Roteirização de entregas", included: true },
      { name: "Automação de CRM", included: false },
      { name: "Integração WhatsApp", included: false },
      { name: "Pagamento online", included: false },
    ],
    cta: "Começar Agora",
    href: "#contato"
  },
  {
    name: "Pro",
    price: "150",
    description: "Para negócios que querem maximizar vendas com automação completa",
    popular: true,
    features: [
      { name: "Cardápio digital ilimitado", included: true },
      { name: "Design responsivo", included: true },
      { name: "Atualizações em tempo real", included: true },
      { name: "Suporte prioritário", included: true },
      { name: "Gestão de categorias", included: true },
      { name: "Automação de CRM", included: true },
      { name: "Integração WhatsApp", included: true },
      { name: "Pagamento online", included: true },
      { name: "KDS - Kitchen Display", included: true },
      { name: "Roteirização de entregas", included: true },
    ],
    cta: "Assinar Pro",
    href: "#contato"
  },
]

export function Pricing() {
  return (
    <section id="planos" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4">
            <Zap className="h-4 w-4" />
            Planos e Preços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Escolha o plano ideal para o seu negócio
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Planos flexíveis que crescem junto com o seu restaurante. Sem taxa de adesão, cancele quando quiser.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl border-2 p-8 transition-all ${
                plan.popular
                  ? "border-primary shadow-xl scale-[1.02]"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    Mais Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Plano {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-muted-foreground text-lg">R$</span>
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3.5 w-3.5 text-primary" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                        <X className="h-3.5 w-3.5 text-muted-foreground" />
                      </div>
                    )}
                    <span
                      className={`text-sm ${
                        feature.included
                          ? "text-foreground"
                          : "text-muted-foreground line-through"
                      }`}
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link href={plan.href}>
                <Button
                  className={`w-full py-6 text-base font-semibold ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-foreground hover:bg-foreground/90 text-background"
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>

              {/* Guarantee */}
              <p className="text-center text-xs text-muted-foreground mt-4">
                7 dias de garantia. Cancele quando quiser.
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Precisa de algo personalizado?{" "}
            <Link href="#contato" className="text-primary hover:underline font-medium">
              Fale conosco
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

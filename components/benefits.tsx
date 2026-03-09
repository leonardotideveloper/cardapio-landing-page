import { Check } from "lucide-react"

const benefits = [
  "Reduza custos com impressão de cardápios",
  "Atualize preços instantaneamente",
  "Melhore a experiência do cliente",
  "Aumente o ticket médio com fotos atrativas",
  "Receba pedidos pelo WhatsApp",
  "Acesse relatórios de desempenho",
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Por que escolher o{" "}
              <span className="text-primary">Cardápio Pro</span>?
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mais de 200 restaurantes já transformaram sua operação com nossa 
              plataforma. Veja os benefícios que você terá:
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial Card */}
          <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
            <div className="space-y-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-primary fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-lg text-foreground leading-relaxed">
                &quot;O Cardápio Pro revolucionou nosso restaurante. Além de economizar 
                com impressões, nossos clientes adoram ver as fotos dos pratos. 
                O ticket médio aumentou 25% no primeiro mês!&quot;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">MR</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Maria Rodrigues</p>
                  <p className="text-sm text-muted-foreground">Restaurante Sabor & Arte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

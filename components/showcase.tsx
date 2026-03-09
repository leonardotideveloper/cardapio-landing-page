import { Route, MonitorPlay, Users, CreditCard } from "lucide-react"

const showcaseItems = [
  {
    icon: Route,
    title: "Roteirização Inteligente",
    description: "Algoritmo que calcula a melhor rota para seus motoboys, economizando tempo e combustível.",
    features: ["Otimização de rotas", "Múltiplas entregas", "Tempo estimado", "Rastreamento em tempo real"]
  },
  {
    icon: MonitorPlay,
    title: "KDS - Cozinha Digital",
    description: "Display de pedidos em tempo real para sua cozinha. Nunca mais perca um pedido.",
    features: ["Pedidos organizados", "Status em tempo real", "Alertas sonoros", "Histórico completo"]
  },
  {
    icon: Users,
    title: "CRM Automatizado",
    description: "Dispare mensagens em massa, reengaje clientes inativos e aumente seu faturamento.",
    features: ["Mensagens agendadas", "Segmentação", "Reengajamento", "Relatórios de campanha"]
  },
  {
    icon: CreditCard,
    title: "Pagamentos Integrados",
    description: "Aceite pagamentos online direto no cardápio. Pix, crédito e débito sem complicação.",
    features: ["Pix instantâneo", "Cartões aceitos", "Split de pagamentos", "Conciliação automática"]
  }
]

export function Showcase() {
  return (
    <section className="py-20 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary bg-primary/20 px-3 py-1 rounded-full mb-4">
            Soluções Completas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Muito mais que um cardápio digital
          </h2>
          <p className="text-lg text-background/70">
            Uma plataforma completa para gerenciar todo o seu delivery e atendimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {showcaseItems.map((item, index) => (
            <div 
              key={item.title}
              className="bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl p-8 hover:bg-background/10 transition-colors group"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-background mb-2">
                      {item.title}
                    </h3>
                    <p className="text-background/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature) => (
                      <span 
                        key={feature}
                        className="text-xs font-medium bg-background/10 text-background/80 px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

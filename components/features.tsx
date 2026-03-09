import { 
  Smartphone, 
  ClipboardList, 
  Palette, 
  Route, 
  CreditCard, 
  MessageSquare,
  MonitorPlay,
  Users,
  Sliders
} from "lucide-react"

const features = [
  {
    icon: Route,
    title: "Roteirização Automática",
    description: "Sistema inteligente de roteirização para motoboys. Otimize entregas, reduza custos e tempo de entrega automaticamente.",
    highlight: true
  },
  {
    icon: MonitorPlay,
    title: "KDS - Kitchen Display",
    description: "Tela de pedidos para a cozinha em tempo real. Organize a produção e agilize o preparo dos pedidos.",
    highlight: true
  },
  {
    icon: Users,
    title: "Automação de CRM",
    description: "Disparo de mensagens em massa com agendamento. Reengaje clientes inativos e aumente suas vendas recorrentes.",
    highlight: true
  },
  {
    icon: Sliders,
    title: "100% Customizável",
    description: "Plataforma totalmente personalizável. Adapte cada detalhe à identidade visual e necessidades do seu negócio."
  },
  {
    icon: CreditCard,
    title: "Pagamentos Online",
    description: "Aceite Pix, cartões de crédito e débito diretamente pelo cardápio. Pagamento seguro e integrado."
  },
  {
    icon: ClipboardList,
    title: "Gestão de Pedidos",
    description: "Controle completo dos pedidos em tempo real. Acompanhe status, histórico e métricas de desempenho."
  },
  {
    icon: Smartphone,
    title: "Design Responsivo",
    description: "Seu cardápio fica perfeito em qualquer dispositivo, seja celular, tablet ou computador."
  },
  {
    icon: MessageSquare,
    title: "Integração WhatsApp",
    description: "Receba pedidos diretamente no WhatsApp do seu estabelecimento de forma automatizada."
  },
  {
    icon: Palette,
    title: "Personalização Visual",
    description: "Customize cores, fontes e layout para combinar perfeitamente com a identidade do seu negócio."
  },
]

export function Features() {
  return (
    <section id="funcionalidades" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Tudo que você precisa para modernizar seu cardápio
          </h2>
          <p className="text-lg text-muted-foreground">
            Funcionalidades pensadas para facilitar sua vida e encantar seus clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className={`bg-card p-6 rounded-xl border hover:shadow-lg transition-all group ${
                feature.highlight 
                  ? 'border-primary/30 ring-1 ring-primary/10' 
                  : 'border-border'
              }`}
            >
              {feature.highlight && (
                <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full mb-3">
                  Destaque
                </span>
              )}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                feature.highlight ? 'bg-primary text-primary-foreground' : 'bg-primary/10'
              }`}>
                <feature.icon className={`h-6 w-6 ${feature.highlight ? 'text-primary-foreground' : 'text-primary'}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

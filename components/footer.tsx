import Link from "next/link"
import { Instagram, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-3 h-3 bg-primary rounded-sm" />
                <div className="w-3 h-3 bg-primary rounded-sm" />
                <div className="w-3 h-3 bg-primary rounded-sm" />
                <div className="w-3 h-3 bg-primary/30 rounded-sm" />
              </div>
              <span className="text-xl font-bold text-background">
                Cardápio <span className="text-primary">Pro</span>
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Transformando a experiência gastronômica com cardápios digitais 
              modernos e inteligentes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#funcionalidades" className="text-background/70 hover:text-background text-sm transition-colors">
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link href="#beneficios" className="text-background/70 hover:text-background text-sm transition-colors">
                  Benefícios
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-background/70 hover:text-background text-sm transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://wa.me/5511932599750" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/70 hover:text-background text-sm transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  (11) 93259-9750
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-background mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/cardapiopro" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-background/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Cardápio Pro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

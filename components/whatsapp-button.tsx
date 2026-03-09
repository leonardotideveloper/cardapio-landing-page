"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "5511932599750"
  const message = "Olá! Gostaria de saber mais sobre o Cardápio Pro."
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}

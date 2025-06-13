"use client"

import { Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5548999939928", "_blank")
  }

  const handleCopyNumber = () => {
    navigator.clipboard.writeText("(48) 99993-9928")
    alert("Número copiado!")
  }

  return (
    <section className="bg-secondary/30 py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 font-serif text-accent mb-4">Entre em Contato</h2>
          <p className="text-muted-foreground mb-8">
            Estamos prontos para atender você e seu pet com todo carinho e dedicação. Agende um horário ou tire suas
            dúvidas pelo WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsAppClick}
              className="bg-primary text-white hover:bg-primary/90 flex items-center gap-2"
            >
              <MessageSquare className="h-5 w-5" />
              Agendar Agora
            </Button>

            <Button
              variant="outline"
              onClick={handleCopyNumber}
              className="border-accent text-accent hover:bg-accent hover:text-white flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              (48) 99993-9928
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

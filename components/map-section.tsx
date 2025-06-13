"use client"

import { MapPin } from "lucide-react"

export function MapSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="container-custom">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <MapPin className="h-5 w-5 text-primary" />
            <h2 className="heading-3 font-serif">Nossa Localização</h2>
          </div>
          <p className="text-muted-foreground">Rua Marechal Deodoro, 55 - Centro - Florianópolis/SC</p>
        </div>

        <div className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12021.837469336448!2d-48.499094!3d-27.548224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527475e01a8efef%3A0x5b0f13adab8483ec!2sSENAI%20Florian%C3%B3polis%20(CTAI)!5e1!3m2!1spt-BR!2sus!4v1749776140899!5m2!1spt-BR!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Elegance Pet Boutique"
            className="absolute inset-0"
          />
        </div>
      </div>
    </section>
  )
}

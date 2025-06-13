"use client"

import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold text-accent mb-4">Elegance Pet Boutique</h3>
            <p className="text-muted-foreground mb-4">
              Oferecemos os melhores serviços para o bem-estar do seu animal de estimação. Entre em contato conosco e
              agende uma visita!
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-accent hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-accent hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-accent hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold text-accent mb-4">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/banho-e-tosa" className="text-muted-foreground hover:text-primary transition-colors">
                  Banho e Tosa
                </Link>
              </li>
              <li>
                <Link href="/hotel-resort" className="text-muted-foreground hover:text-primary transition-colors">
                  Hotel Resort
                </Link>
              </li>
              <li>
                <Link href="/adestramento" className="text-muted-foreground hover:text-primary transition-colors">
                  Adestramento
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold text-accent mb-4">Contato</h3>
            <address className="not-italic text-muted-foreground">
              <p className="mb-2">Rua Marechal Deodoro, 55</p>
              <p className="mb-2">Centro - Florianópolis/SC</p>
              <p className="mb-2">
                <button
                  className="text-primary hover:underline"
                  onClick={() => {
                    navigator.clipboard.writeText("(48) 99993-9928")
                    alert("Número copiado!")
                  }}
                >
                  Clique para copiar o número
                </button>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© 2025 Elegance Pet Boutique. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

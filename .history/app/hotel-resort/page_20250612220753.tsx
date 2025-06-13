import { ContactSection } from "@/components/contact-section"
import { Clock } from "lucide-react"
import { MapSection } from "@/components/map-section"

export default function HotelResort() {
  return (
    <div>
      <section className="bg-secondary/30 py-16">
        <div className="container-custom">
          <h1 className="heading-1 font-serif text-center mb-6">Hotel Resort</h1>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto">
            Um espaço especial para hospedar seu pet com todo conforto e carinho que ele merece.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="h-10 w-10" />
            </div>
            <h2 className="heading-2 font-serif mb-4">Em Breve</h2>
            <p className="text-muted-foreground mb-8">
              Estamos preparando um espaço especial para hospedar seu pet com todo conforto e carinho que ele merece.
              Nosso hotel resort contará com:
            </p>

            <ul className="text-left space-y-4 mb-8">
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary p-1 rounded-full mr-3 mt-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Acomodações confortáveis e espaçosas</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary p-1 rounded-full mr-3 mt-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Área de lazer e recreação</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary p-1 rounded-full mr-3 mt-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Monitoramento 24 horas</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary p-1 rounded-full mr-3 mt-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Alimentação personalizada</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/10 text-primary p-1 rounded-full mr-3 mt-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Atendimento veterinário de emergência</span>
              </li>
            </ul>

            <div className="rounded-lg overflow-hidden mb-8">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Conceito do Hotel Resort para Pets"
                className="w-full h-auto"
              />
            </div>

            <p className="text-muted-foreground">
              Deixe seu email para ser notificado quando nosso Hotel Resort estiver disponível:
            </p>

            <form className="mt-6 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-2 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Me avise
              </button>
            </form>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  )
}

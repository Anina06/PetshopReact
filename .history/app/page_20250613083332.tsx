import { Carousel } from "@/components/carousel"
import { ServiceCard } from "@/components/service-card"
import { ContactSection } from "@/components/contact-section"
import { Heart, Shield, Clock } from "lucide-react"
import { MapSection } from "@/components/map-section"

const carouselImages = [
  {
    src: "/imagens/banner.jpg?height=600&width=1200",
    alt: "Cachorro feliz após banho",
  },
  {
    src: "/imagens/pagina-home/Banner-01.jpg?height=600&width=1200",
    alt: "Gato relaxando no hotel pet",
  },
  {
    src: "/imagens/banho-e-tosa.png?height=600&width=1200",
    alt: "Cachorro em sessão de adestramento",
  },
]

const services = [
  {
    title: "Banho e Tosa",
    description: "Serviços profissionais de banho e tosa para deixar seu pet limpo, cheiroso e estiloso.",
    imageSrc: "/placeholder.svg?height=300&width=500",
    href: "/banho-e-tosa",
  },
  {
    title: "PetCare",
    description: "Serviços profissionais de banho e tosa para deixar seu pet limpo, cheiroso e estiloso.",
    imageSrc: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Hotel Resort",
    description: "Um espaço especial para hospedar seu pet com todo conforto e carinho que ele merece.",
    imageSrc: "/placeholder.svg?height=300&width=500",
    href: "/hotel-resort",
  },
  {
    title: "Adestramento",
    description: "Treinamento profissional para ensinar bons comportamentos e fortalecer o vínculo com seu pet.",
    imageSrc: "/placeholder.svg?height=300&width=500",
    href: "/adestramento",
  },
]

export default function Home() {
  return (
    <div>
      <Carousel images={carouselImages} />

      <section className="py-16">
        <div className="container-custom">
          <h2 className="heading-2 font-serif text-center mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container-custom">
          <h2 className="heading-2 font-serif text-center mb-12">Por que nos escolher?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="mx-auto w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Cuidado Amoroso</h3>
              <p className="text-muted-foreground">
                Tratamos cada pet como se fosse nosso, com todo amor e carinho que eles merecem.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="mx-auto w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Profissionais Qualificados</h3>
              <p className="text-muted-foreground">
                Nossa equipe é formada por profissionais experientes e apaixonados por animais.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="mx-auto w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Atendimento Flexível</h3>
              <p className="text-muted-foreground">
                Horários flexíveis para atender você e seu pet com toda comodidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 font-serif mb-4">Relação com o cliente</h2>
              <p className="text-muted-foreground mb-6">
                Acreditamos que a relação com nossos clientes é baseada na confiança e transparência. Nosso objetivo é
                proporcionar a melhor experiência para você e seu pet, criando um ambiente acolhedor e seguro.
              </p>
              <p className="text-muted-foreground">
                Estamos sempre abertos a sugestões e feedbacks para melhorar continuamente nossos serviços. Sua opinião
                é muito importante para nós!
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Cliente feliz com seu pet"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <MapSection />
    </div>
  )
}

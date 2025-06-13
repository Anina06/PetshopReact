import { ContactSection } from "@/components/contact-section"
import { MapSection } from "@/components/map-section"

export default function Adestramento() {
  return (
    <div>
      <section className="bg-secondary/30 py-16">
        <div className="container-custom">
          <h1 className="heading-1 font-serif text-center mb-6">Adestramento</h1>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto">
            Treinamento profissional para ensinar bons comportamentos e fortalecer o vínculo com seu pet.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 font-serif mb-4">ADESTRAMENTO DE CÃES</h2>
              <p className="text-muted-foreground mb-6">
                Nosso serviço de adestramento é focado em técnicas positivas que respeitam o bem-estar do seu pet.
                Trabalhamos para desenvolver uma comunicação eficaz entre você e seu cão, criando uma relação de
                confiança e respeito mútuo.
              </p>
              <p className="text-muted-foreground mb-6">
                Oferecemos programas personalizados para diferentes necessidades, desde comandos básicos até correção de
                comportamentos específicos. Nossos adestradores são profissionais certificados com anos de experiência.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Cachorro em sessão de adestramento"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container-custom">
          <h2 className="heading-2 font-serif text-center mb-12">Nossos Programas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif font-bold mb-2">Adestramento Básico</h3>
              <p className="text-muted-foreground mb-4">
                Ideal para filhotes ou cães sem treinamento prévio. Inclui comandos como sentar, deitar, ficar, vir
                quando chamado e andar sem puxar a guia.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>6 sessões</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Material de apoio</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Orientação para tutores</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif font-bold mb-2">Correção Comportamental</h3>
              <p className="text-muted-foreground mb-4">
                Focado em resolver problemas específicos como latidos excessivos, agressividade, ansiedade de separação
                e destruição de objetos.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Avaliação comportamental</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Plano personalizado</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Acompanhamento contínuo</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif font-bold mb-2">Adestramento Avançado</h3>
              <p className="text-muted-foreground mb-4">
                Para cães que já dominam comandos básicos. Inclui treinamento off-leash, comandos à distância e truques
                avançados.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>8 sessões intensivas</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Treinamento em ambientes diversos</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">•</span>
                  <span>Certificado de conclusão</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <h2 className="heading-2 font-serif text-center mb-12">Galeria</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Cachorro aprendendo comando sentar"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Cachorro aprendendo comando deitar"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Adestrador trabalhando com cachorro"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Cachorro fazendo truque"
                className="w-full h-64 object-cover"
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

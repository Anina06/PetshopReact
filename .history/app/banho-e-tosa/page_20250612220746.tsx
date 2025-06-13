import { ContactSection } from "@/components/contact-section"
import { Scissors, Droplet, Heart, Star } from "lucide-react"
// Adicione o import do MapSection no topo do arquivo
import { MapSection } from "@/components/map-section"

export default function BanhoETosa() {
  return (
    <div>
      <section className="bg-secondary/30 py-16">
        <div className="container-custom">
          <h1 className="heading-1 font-serif text-center mb-6">Banho e Tosa</h1>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto">
            Oferecemos serviços profissionais de banho e tosa para deixar seu pet limpo, cheiroso e estiloso. Nossos
            profissionais são treinados para proporcionar uma experiência tranquila e agradável para seu animal de
            estimação.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 font-serif mb-4">Serviços Profissionais de Banho e Tosa</h2>
              <p className="text-muted-foreground mb-6">
                Nossos serviços de banho e tosa são realizados por profissionais experientes e apaixonados por animais.
                Utilizamos produtos de alta qualidade, específicos para cada tipo de pelagem e necessidade do seu pet.
              </p>
              <p className="text-muted-foreground mb-6">
                Oferecemos desde banhos simples até pacotes completos com hidratação, escovação, corte de unhas, limpeza
                de ouvidos e muito mais. Tudo para garantir o bem-estar e a beleza do seu amigo de quatro patas.
              </p>
              <button className="btn-primary">Saiba Mais</button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src="/placeholder.svg?height=400&width=600" alt="Cachorro tomando banho" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container-custom">
          <h2 className="heading-2 font-serif text-center mb-12">PET CARE</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="mx-auto w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <Scissors className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Tosa Higiênica</h3>
              <p className="text-muted-foreground">Mantém as áreas sensíveis do seu pet sempre limpas e saudáveis.</p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="mx-auto w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <Droplet className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Banho Especial</h3>
              <p className="text-muted-foreground">Com produtos específicos para cada tipo de pelagem e pele.</p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="mx-auto w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Hidratação</h3>
              <p className="text-muted-foreground">Tratamentos especiais para deixar a pelagem macia e brilhante.</p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <div className="mx-auto w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Estética</h3>
              <p className="text-muted-foreground">Cortes personalizados de acordo com a raça e preferência.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <h2 className="heading-2 font-serif text-center mb-12">Cuidados Completos para seu Pet</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Cachorro sendo tosado"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-card">
                <h3 className="text-xl font-serif font-bold mb-2">Tosa Profissional</h3>
                <p className="text-muted-foreground">
                  Tosa realizada por profissionais experientes, respeitando as características de cada raça.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Cachorro tomando banho"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-card">
                <h3 className="text-xl font-serif font-bold mb-2">Banho Relaxante</h3>
                <p className="text-muted-foreground">
                  Banho com produtos de qualidade e massagem relaxante para seu pet.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Cachorro recebendo cuidados especiais"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-card">
                <h3 className="text-xl font-serif font-bold mb-2">Cuidados Especiais</h3>
                <p className="text-muted-foreground">
                  Tratamentos específicos para pets com necessidades especiais ou alergias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      
    </div>
  )
}

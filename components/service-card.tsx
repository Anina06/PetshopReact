import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  imageSrc: string
  href: string
}

export function ServiceCard({ title, description, imageSrc, href }: ServiceCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${imageSrc})` }} />
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Link href={href} className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
          Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

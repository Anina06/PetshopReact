import Link from "next/link"
import { Cat, Dog } from "lucide-react"

interface LogoCombinedProps {
  size?: "small" | "medium" | "large"
}

export function LogoCombined({ size = "medium" }: LogoCombinedProps) {
  const sizeClasses = {
    small: "text-xl",
    medium: "text-2xl",
    large: "text-3xl",
  }

  const iconSizes = {
    small: 18,
    medium: 22,
    large: 28,
  }

  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative">
        <div className="bg-primary/10 p-2 rounded-full flex items-center justify-center">
          <div className="relative">
            <Cat className="text-primary absolute -left-1" size={iconSizes[size]} strokeWidth={2} />
            <Dog className="text-primary absolute -right-1" size={iconSizes[size]} strokeWidth={2} />
            <div className="w-[40px] h-[24px]"></div> {/* Espaçador para manter o tamanho */}
          </div>
        </div>
      </div>
      <span className={`text-primary font-bold font-serif ${sizeClasses[size]}`}>Elegance Pet</span>
    </Link>
  )
}

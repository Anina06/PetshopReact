import Link from "next/link"
import { Cat } from "lucide-react"

interface LogoProps {
  size?: "small" | "medium" | "large"
}

export function Logo({ size = "medium" }: LogoProps) {
  const sizeClasses = {
    small: "text-xl",
    medium: "text-2xl",
    large: "text-3xl",
  }

  const iconSizes = {
    small: 20,
    medium: 24,
    large: 32,
  }

  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="bg-primary/10 p-2 rounded-full">
        <Cat className="text-primary" size={iconSizes[size]} strokeWidth={2} />
      </div>
      <span className={`text-primary font-bold font-serif ${sizeClasses[size]}`}>Elegance Pet</span>
    </Link>
  )
}

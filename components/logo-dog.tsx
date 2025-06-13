import Link from "next/link"
import { Dog } from "lucide-react"

interface LogoDogProps {
  size?: "small" | "medium" | "large"
}

export function LogoDog({ size = "medium" }: LogoDogProps) {
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
        <Dog className="text-primary" size={iconSizes[size]} strokeWidth={2} />
      </div>
      <span className={`text-primary font-bold font-serif ${sizeClasses[size]}`}>Elegance Pet</span>
    </Link>
  )
}

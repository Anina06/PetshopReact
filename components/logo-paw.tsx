import Link from "next/link"

interface LogoPawProps {
  size?: "small" | "medium" | "large"
}

export function LogoPaw({ size = "medium" }: LogoPawProps) {
  const sizeClasses = {
    small: "text-xl",
    medium: "text-2xl",
    large: "text-3xl",
  }

  const iconSizes = {
    small: { width: 24, height: 24 },
    medium: { width: 32, height: 32 },
    large: { width: 40, height: 40 },
  }

  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="bg-primary/10 p-2 rounded-full flex items-center justify-center">
        <svg
          width={iconSizes[size].width}
          height={iconSizes[size].height}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary"
        >
          <path
            d="M12 13.5C13.3807 13.5 14.5 12.3807 14.5 11C14.5 9.61929 13.3807 8.5 12 8.5C10.6193 8.5 9.5 9.61929 9.5 11C9.5 12.3807 10.6193 13.5 12 13.5Z"
            fill="currentColor"
          />
          <path
            d="M17.5 7.5C18.8807 7.5 20 6.38071 20 5C20 3.61929 18.8807 2.5 17.5 2.5C16.1193 2.5 15 3.61929 15 5C15 6.38071 16.1193 7.5 17.5 7.5Z"
            fill="currentColor"
          />
          <path
            d="M6.5 7.5C7.88071 7.5 9 6.38071 9 5C9 3.61929 7.88071 2.5 6.5 2.5C5.11929 2.5 4 3.61929 4 5C4 6.38071 5.11929 7.5 6.5 7.5Z"
            fill="currentColor"
          />
          <path
            d="M4.5 16.5C5.88071 16.5 7 15.3807 7 14C7 12.6193 5.88071 11.5 4.5 11.5C3.11929 11.5 2 12.6193 2 14C2 15.3807 3.11929 16.5 4.5 16.5Z"
            fill="currentColor"
          />
          <path
            d="M19.5 16.5C20.8807 16.5 22 15.3807 22 14C22 12.6193 20.8807 11.5 19.5 11.5C18.1193 11.5 17 12.6193 17 14C17 15.3807 18.1193 16.5 19.5 16.5Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <span className={`text-primary font-bold font-serif ${sizeClasses[size]}`}>Elegance Pet</span>
    </Link>
  )
}

import Link from "next/link"
import type { ReactNode } from "react"

interface GradientButtonProps {
  children: ReactNode
  href: string
  primary?: boolean
  light?: boolean
  className?: string
}

export function GradientButton({
  children,
  href,
  primary = false,
  light = false,
  className = "",
}: GradientButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-base transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"

  let buttonClasses = ""

  if (primary) {
    buttonClasses = `${baseClasses} bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg hover:shadow-pink-500/25 focus:ring-pink-500`
  } else if (light) {
    buttonClasses = `${baseClasses} bg-white text-purple-600 hover:bg-gray-100 hover:shadow-lg focus:ring-white`
  } else {
    buttonClasses = `${baseClasses} bg-white/20 backdrop-blur-lg text-white border border-white/30 hover:bg-white/30 hover:shadow-lg focus:ring-white`
  }

  return (
    <Link href={href} className={`${buttonClasses} ${className}`}>
      {children}
    </Link>
  )
}

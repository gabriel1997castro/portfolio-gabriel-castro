'use client'

import { Button } from "./button"
import Link from "next/link"
import { ReactNode } from "react"

interface InteractiveButtonProps {
  href: string
  size?: "sm" | "default" | "lg" | "icon"
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  target?: string
  rel?: string
  children: ReactNode
  stopPropagation?: boolean
}

export function InteractiveButton({ 
  href, 
  size, 
  variant, 
  target, 
  rel, 
  children, 
  stopPropagation = false 
}: InteractiveButtonProps) {
  return (
    <Button 
      size={size} 
      variant={variant} 
      asChild
    >
      <Link 
        href={href} 
        target={target} 
        rel={rel}
        onClick={stopPropagation ? (e) => e.stopPropagation() : undefined}
      >
        {children}
      </Link>
    </Button>
  )
}
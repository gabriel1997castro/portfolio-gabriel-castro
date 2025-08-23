"use client";

import { Button } from "./button";
import Link from "next/link";
import { ReactNode, MouseEvent } from "react";

interface InteractiveButtonProps {
  href?: string;
  size?: "sm" | "default" | "lg" | "icon";
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  target?: string;
  rel?: string;
  children: ReactNode;
  stopPropagation?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function InteractiveButton({
  href,
  size,
  variant,
  target,
  rel,
  children,
  stopPropagation = false,
  onClick,
}: InteractiveButtonProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (stopPropagation) {
      e.stopPropagation();
    }

    if (onClick) {
      onClick(e);
    } else if (href) {
      if (!target || target === "_self") {
        window.location.href = href;
      } else {
        // Convert rel to features string for window.open
        const features = rel
          ? rel
              .split(" ")
              .map((s) => s.trim())
              .filter(Boolean)
              .join(",")
          : undefined;
        window.open(href, target, features);
      }
    }
  };

  // If we have an href and we're not stopping propagation (not nested), use Link
  if (href && !stopPropagation) {
    return (
      <Button size={size} variant={variant} asChild>
        <Link href={href} target={target} rel={rel}>
          {children}
        </Link>
      </Button>
    );
  }

  // Otherwise use a button with click handler
  return (
    <Button size={size} variant={variant} onClick={handleClick}>
      {children}
    </Button>
  );
}

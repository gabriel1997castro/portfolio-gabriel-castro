'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { extractHeadings } from '@/lib/heading-utils'
import { PortableTextBlock } from '@portabletext/types'

interface TableOfContentsProps {
  content: PortableTextBlock[]
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const headings = extractHeadings(content)

  // Don't render TOC if there are no headings
  if (headings.length === 0) {
    return null
  }

  return (
    <Card>
      <CardHeader>
        <h3 className="font-semibold">Table of Contents</h3>
      </CardHeader>
      <CardContent>
        <nav className="space-y-2 text-sm">
          {headings.map((heading) => (
            <Link
              key={heading.id}
              href={`#${heading.id}`}
              className={`block text-muted-foreground hover:text-foreground transition-colors ${
                heading.level === 3 ? 'ml-4' : ''
              }`}
            >
              {heading.text}
            </Link>
          ))}
        </nav>
      </CardContent>
    </Card>
  )
}
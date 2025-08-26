import { PortableTextBlock } from '@portabletext/types'

export interface Heading {
  id: string
  text: string
  level: 2 | 3
}

/**
 * Extracts h2 and h3 headings from PortableText content
 * @param blocks PortableText blocks array
 * @returns Array of heading objects with id, text, and level
 */
export function extractHeadings(blocks: PortableTextBlock[]): Heading[] {
  const headings: Heading[] = []

  blocks.forEach((block) => {
    if (block._type === 'block' && (block.style === 'h2' || block.style === 'h3')) {
      // Extract text content from the block's children
      const text = block.children
        ?.map((child) => ('text' in child ? child.text : ''))
        .join('') || ''
      
      if (text.trim()) {
        const id = generateHeadingId(text)
        const level = block.style === 'h2' ? 2 : 3
        
        headings.push({
          id,
          text: text.trim(),
          level: level as 2 | 3,
        })
      }
    }
  })

  return headings
}

/**
 * Generates a URL-safe ID from heading text
 * @param text The heading text
 * @returns URL-safe string ID
 */
export function generateHeadingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters except hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim()
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}
import { describe, it, expect } from 'vitest'
import { extractHeadings, generateHeadingId } from '@/lib/heading-utils'
import { PortableTextBlock } from '@portabletext/types'

describe('heading-utils', () => {
  describe('generateHeadingId', () => {
    it('should generate URL-safe IDs from headings', () => {
      expect(generateHeadingId('React Performance Optimization')).toBe('react-performance-optimization')
      expect(generateHeadingId('Understanding React\'s Rendering')).toBe('understanding-reacts-rendering')
      expect(generateHeadingId('Bundle Optimization!')).toBe('bundle-optimization')
      expect(generateHeadingId('   Multiple   Spaces   ')).toBe('multiple-spaces')
    })

    it('should handle special characters', () => {
      expect(generateHeadingId('API & Database Integration')).toBe('api-database-integration')
      expect(generateHeadingId('TypeScript: Type Safety')).toBe('typescript-type-safety')
    })
  })

  describe('extractHeadings', () => {
    it('should extract h2 and h3 headings from PortableText blocks', () => {
      const blocks: PortableTextBlock[] = [
        {
          _type: 'block',
          _key: 'h2-1',
          style: 'h2',
          children: [{ _type: 'span', _key: 'span1', text: 'Getting Started', marks: [] }]
        },
        {
          _type: 'block',
          _key: 'p1',
          style: 'normal',
          children: [{ _type: 'span', _key: 'span2', text: 'Some content', marks: [] }]
        },
        {
          _type: 'block',
          _key: 'h3-1',
          style: 'h3',
          children: [{ _type: 'span', _key: 'span3', text: 'Installation', marks: [] }]
        }
      ]

      const headings = extractHeadings(blocks)
      
      expect(headings).toHaveLength(2)
      expect(headings[0]).toEqual({
        id: 'getting-started',
        text: 'Getting Started',
        level: 2
      })
      expect(headings[1]).toEqual({
        id: 'installation',
        text: 'Installation',
        level: 3
      })
    })

    it('should return empty array when no headings are found', () => {
      const blocks: PortableTextBlock[] = [
        {
          _type: 'block',
          _key: 'p1',
          style: 'normal',
          children: [{ _type: 'span', _key: 'span1', text: 'Just normal text', marks: [] }]
        }
      ]

      const headings = extractHeadings(blocks)
      expect(headings).toHaveLength(0)
    })
  })
})
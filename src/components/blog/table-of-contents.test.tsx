import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TableOfContents } from '@/components/blog/table-of-contents'
import { PortableTextBlock } from '@portabletext/types'

describe('TableOfContents', () => {
  it('should render table of contents with headings', () => {
    const content: PortableTextBlock[] = [
      {
        _type: 'block',
        _key: 'h2-1',
        style: 'h2',
        children: [{ _type: 'span', _key: 'span1', text: 'Introduction', marks: [] }]
      },
      {
        _type: 'block',
        _key: 'h3-1',
        style: 'h3',
        children: [{ _type: 'span', _key: 'span2', text: 'Getting Started', marks: [] }]
      }
    ]

    render(<TableOfContents content={content} />)
    
    expect(screen.getByText('Table of Contents')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Introduction' })).toHaveAttribute('href', '#introduction')
    expect(screen.getByRole('link', { name: 'Getting Started' })).toHaveAttribute('href', '#getting-started')
  })

  it('should not render when no headings are found', () => {
    const content: PortableTextBlock[] = [
      {
        _type: 'block',
        _key: 'p1',
        style: 'normal',
        children: [{ _type: 'span', _key: 'span1', text: 'Normal paragraph', marks: [] }]
      }
    ]

    const { container } = render(<TableOfContents content={content} />)
    expect(container.firstChild).toBeNull()
  })

  it('should indent h3 headings', () => {
    const content: PortableTextBlock[] = [
      {
        _type: 'block',
        _key: 'h2-1',
        style: 'h2',
        children: [{ _type: 'span', _key: 'span1', text: 'Main Topic', marks: [] }]
      },
      {
        _type: 'block',
        _key: 'h3-1',
        style: 'h3',
        children: [{ _type: 'span', _key: 'span2', text: 'Subtopic', marks: [] }]
      }
    ]

    render(<TableOfContents content={content} />)
    
    const h2Link = screen.getByRole('link', { name: 'Main Topic' })
    const h3Link = screen.getByRole('link', { name: 'Subtopic' })
    
    expect(h2Link).not.toHaveClass('ml-4')
    expect(h3Link).toHaveClass('ml-4')
  })
})
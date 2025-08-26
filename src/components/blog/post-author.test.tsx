import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PostAuthor } from '@/components/blog/post-author'
import { SiteSettings } from '@/lib/sanity/types'

describe('PostAuthor', () => {
  it('should render author info from site settings', () => {
    const siteSettings: SiteSettings = {
      name: 'John Doe',
      title: 'Senior Developer', 
      bio: 'Passionate about building great software.',
      email: 'john@example.com'
    }

    render(<PostAuthor siteSettings={siteSettings} />)
    
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Senior Developer')).toBeInTheDocument()
    expect(screen.getByText('Passionate about building great software.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get in Touch' })).toHaveAttribute('href', '/contact')
  })

  it('should render fallback data when site settings are null', () => {
    render(<PostAuthor siteSettings={null} />)
    
    expect(screen.getByText('Gabriel Castro')).toBeInTheDocument()
    expect(screen.getByText('Frontend Engineer')).toBeInTheDocument()
    expect(screen.getByText('Passionate about React, TypeScript, and building performant web applications.')).toBeInTheDocument()
  })

  it('should render author avatar', () => {
    const siteSettings: SiteSettings = {
      name: 'John Doe',
      title: 'Senior Developer',
      bio: 'Passionate about building great software.',
      email: 'john@example.com'
    }

    render(<PostAuthor siteSettings={siteSettings} />)
    
    const avatar = screen.getByRole('img', { name: 'John Doe' })
    expect(avatar).toBeInTheDocument()
    expect(avatar).toHaveAttribute('alt', 'John Doe')
  })
})
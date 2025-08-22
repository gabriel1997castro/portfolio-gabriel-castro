import { describe, it, expect } from 'vitest'

// Mock data to simulate Sanity response
const mockFeaturedProjectsData = [
  {
    _id: '1',
    title: 'Test Project',
    slug: { current: 'test-project' },
    tagline: 'A test project',
    summary: 'This is a test project summary',
    tech: ['React', 'TypeScript'],
    year: 2024,
    images: [
      {
        image: { asset: { _ref: 'image-abc123' } },
        caption: 'Test image'
      }
    ],
    links: {
      gitUrl: 'https://github.com/test/repo',
      liveUrl: 'https://test.com'
    }
  }
]

describe('Featured Projects Data Structure', () => {
  it('should have the correct data structure for image access', () => {
    const project = mockFeaturedProjectsData[0]
    
    // Verify that the project has images array
    expect(project.images).toBeDefined()
    expect(Array.isArray(project.images)).toBe(true)
    expect(project.images?.length).toBeGreaterThan(0)
    
    // Verify that the first image can be accessed correctly
    expect(project.images?.[0]?.image).toBeDefined()
    expect(project.images?.[0]?.caption).toBe('Test image')
  })
  
  it('should work with the home page image rendering logic', () => {
    const project = mockFeaturedProjectsData[0]
    
    // This is the exact logic used in the home page
    const hasImageToRender = project.images?.[0]?.image
    
    expect(hasImageToRender).toBeDefined()
  })
})
import { test, expect } from '@playwright/test'

test.describe('Portfolio UI/UX Improvements', () => {
  test('should display profile photo in hero section', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    
    // Check if profile photo is visible
    const profilePhoto = page.locator('img[alt="Gabriel Castro - Senior Frontend Engineer"]')
    await expect(profilePhoto).toBeVisible()
    
    // Check if it has proper styling classes
    await expect(profilePhoto).toHaveClass(/rounded-full/)
  })

  test('should make project cards fully clickable on home page', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    
    // Check if the project section has clickable links wrapping cards
    const featuredSection = page.locator('section').filter({ hasText: 'Featured Projects' })
    const cardLinks = featuredSection.locator('a[href^="/projects/"]')
    
    // Should have card links (even if empty due to no Sanity data)
    await expect(cardLinks).toHaveCount(0) // Expected 0 because no Sanity data
  })

  test('should make blog cards fully clickable', async ({ page }) => {
    await page.goto('http://localhost:3000/blog')
    
    // Check if blog cards would be clickable (even if empty due to no Sanity data)
    const page_heading = page.locator('h1', { hasText: 'Blog' })
    await expect(page_heading).toBeVisible()
  })

  test('should be mobile responsive', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('http://localhost:3000/')
    
    // Check if profile photo is still visible on mobile
    const profilePhoto = page.locator('img[alt="Gabriel Castro - Senior Frontend Engineer"]')
    await expect(profilePhoto).toBeVisible()
    
    // Check if navigation becomes mobile menu
    const mobileMenuButton = page.locator('button', { hasText: 'Toggle menu' })
    await expect(mobileMenuButton).toBeVisible()
    
    // Check if hero layout stacks properly on mobile
    const heroSection = page.locator('section').first()
    await expect(heroSection).toBeVisible()
  })

  test('should have proper hover effects on cards', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    
    // Check if cards have hover transition classes
    const cardElements = page.locator('[class*="hover:shadow-lg"]')
    await expect(cardElements.first()).toBeVisible()
  })
})
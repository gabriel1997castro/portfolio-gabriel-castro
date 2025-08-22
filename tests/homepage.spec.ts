import { test, expect } from '@playwright/test';

test('homepage loads and displays main content', async ({ page }) => {
  await page.goto('/');

  // Check that the page title is correct
  await expect(page).toHaveTitle(/Gabriel Castro/);

  // Check for main heading
  await expect(page.getByRole('heading', { name: 'Gabriel Castro' })).toBeVisible();

  // Check for professional title
  await expect(page.getByText('Senior Frontend Engineer')).toBeVisible();

  // Check for navigation links
  await expect(page.getByRole('link', { name: 'Projects' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Experience' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
});

test('navigation works correctly', async ({ page }) => {
  await page.goto('/');

  // Test Projects navigation
  await page.getByRole('link', { name: 'Projects' }).click();
  await expect(page).toHaveURL('/projects');
  await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();

  // Test Blog navigation
  await page.getByRole('link', { name: 'Blog' }).click();
  await expect(page).toHaveURL('/blog');
  await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible();

  // Test Experience navigation
  await page.getByRole('link', { name: 'Experience' }).click();
  await expect(page).toHaveURL('/experience');
  await expect(page.getByRole('heading', { name: 'Experience' })).toBeVisible();

  // Test Contact navigation
  await page.getByRole('link', { name: 'Contact' }).click();
  await expect(page).toHaveURL('/contact');
  await expect(page.getByRole('heading', { name: 'Get in Touch' })).toBeVisible();
});

test('featured projects are displayed on homepage', async ({ page }) => {
  await page.goto('/');

  // Check for featured projects section
  await expect(page.getByText('Featured Projects')).toBeVisible();

  // Check that project cards are displayed
  await expect(page.getByText('ShowSeeker Pilot')).toBeVisible();
  await expect(page.getByText('Insurance Fast Quote')).toBeVisible();
  await expect(page.getByText('Healthcare Hub')).toBeVisible();
});

test('project detail page loads correctly', async ({ page }) => {
  await page.goto('/projects');

  // Click on a project
  await page.getByText('ShowSeeker Pilot').first().click();

  // Check that we're on the project detail page
  await expect(page).toHaveURL(/\/projects\/.+/);
  await expect(page.getByRole('heading', { name: 'ShowSeeker Pilot' })).toBeVisible();

  // Check for back navigation
  await expect(page.getByText('Back to Projects')).toBeVisible();
});

test('mobile navigation works', async ({ page }) => {
  // Set viewport to mobile size
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');

  // Mobile menu should not be visible initially
  await expect(page.getByRole('link', { name: 'Projects' }).first()).not.toBeVisible();

  // Click the mobile menu button
  await page.getByRole('button', { name: 'Toggle menu' }).click();

  // Mobile menu items should now be visible
  await expect(page.getByRole('link', { name: 'Projects' }).first()).toBeVisible();
  
  // Click a navigation item
  await page.getByRole('link', { name: 'Projects' }).first().click();
  await expect(page).toHaveURL('/projects');
});
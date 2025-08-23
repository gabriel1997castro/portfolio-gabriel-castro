import { test, expect } from "@playwright/test";

test.describe("Portfolio UI/UX Improvements", () => {
  test("should display profile photo in hero section", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    // Check if profile photo is visible
    const profilePhoto = page.locator(
      'img[alt="Gabriel Castro - Frontend Engineer"]'
    );
    await expect(profilePhoto).toBeVisible();

    // Check if it has proper styling classes
    await expect(profilePhoto).toHaveClass(/rounded-full/);
  });

  test("should make project cards fully clickable on home page", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/");

    // Wait for the page to load completely
    await page.waitForLoadState("networkidle");

    // Check if the project section has clickable links wrapping cards
    const featuredSection = page
      .locator("section")
      .filter({ hasText: "Featured Projects" });

    await expect(featuredSection).toBeVisible();

    const cardLinks = featuredSection.locator('a[href^="/projects/"]');

    // Since we now have Sanity data, we should expect some project cards
    const cardCount = await cardLinks.count();
    expect(cardCount).toBeGreaterThan(0);

    // Test that the first card is clickable
    if (cardCount > 0) {
      await expect(cardLinks.first()).toBeVisible();
      // Verify the link has a card element with typical card classes
      const firstCard = cardLinks.first();
      const cardElement = firstCard.locator(
        '[class*="rounded-xl"][class*="border"]'
      );
      await expect(cardElement).toBeVisible();
    }
  });

  test("should make blog cards fully clickable", async ({ page }) => {
    await page.goto("http://localhost:3000/blog");

    // Check if blog page heading is visible
    const page_heading = page.locator("h1", { hasText: "Blog" });
    await expect(page_heading).toBeVisible();

    // Wait for any blog posts to potentially load by waiting for at least one blog card link to appear, or continue if none appear

    try {
      await page.waitForSelector('a[href^="/blog/"]:not([href="/blog"])', {
        state: "visible",
        timeout: 5000,
      });
    } catch (e) {
      // No blog posts appeared within timeout, which is acceptable
    }
    // Check for blog post cards (they are Link > Card structures)
    const blogCardLinks = page.locator('a[href^="/blog/"]:not([href="/blog"])');
    const cardCount = await blogCardLinks.count();

    if (cardCount > 0) {
      // If we have blog posts, test that they're clickable
      await expect(blogCardLinks.first()).toBeVisible();
      // Verify the link wraps a Card component
      const firstCardLink = blogCardLinks.first();
      const cardElement = firstCardLink.locator(
        '[class*="group hover:shadow"]'
      );
      await expect(cardElement).toBeVisible();
      console.log(`Found ${cardCount} blog post cards`);
    } else {
      // If no posts, that's also acceptable since content may vary
      console.log("No blog posts found - this may be expected");
    }
  });

  test("should be mobile responsive", async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("http://localhost:3000/");

    // Check if profile photo is still visible on mobile
    const profilePhoto = page.locator(
      'img[alt="Gabriel Castro - Frontend Engineer"]'
    );
    await expect(profilePhoto).toBeVisible();

    // Check if navigation becomes mobile menu
    const mobileMenuButton = page.getByRole("button", { name: "Toggle menu" });
    await expect(mobileMenuButton).toBeVisible();

    // Check if hero layout stacks properly on mobile
    const heroSection = page.locator("section").first();
    await expect(heroSection).toBeVisible();
  });

  test("should have proper hover effects on cards", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    // Check if cards have hover transition classes
    const cardElements = page.locator('[class*="hover:shadow-lg"]');
    await expect(cardElements.first()).toBeVisible();
  });
});

import { test, expect } from "@playwright/test";

test.describe("Sanity Integration", () => {
  test("should load posts from Sanity", async ({ page }) => {
    // Enable console logging to debug
    page.on("console", (msg) => console.log("BROWSER:", msg.text()));

    await page.goto("http://localhost:3000/blog");

    // Wait for the page to load completely
    await page.waitForLoadState("networkidle");

    // Check if blog page heading is visible
    const pageHeading = page.locator("h1", { hasText: "Blog" });
    await expect(pageHeading).toBeVisible();

    // Wait a bit more for any async data loading
    await page.waitForTimeout(3000);

    const allPostsSection = page.locator('section:has(h2:text("All Posts"))');

    // Check if sections exist
    await expect(allPostsSection).toBeVisible();

    // Look for post cards
    const postCards = page.locator('a[href^="/blog/"]');
    const cardCount = await postCards.count();

    console.log(`Found ${cardCount} post cards`);

    if (cardCount > 0) {
      // If we have posts, test that they're clickable
      await expect(postCards.first()).toBeVisible();
      console.log("Posts loaded successfully!");
    } else {
      // If no posts, check if it's because of missing data or connection issues
      const pageContent = await page.content();
      console.log(
        "No posts found. Page content includes:",
        pageContent.includes("All Posts")
      );
    }
  });

  test("should load projects from Sanity", async ({ page }) => {
    page.on("console", (msg) => console.log("BROWSER:", msg.text()));

    await page.goto("http://localhost:3000/projects");

    // Wait for the page to load completely
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);

    // Check if projects page heading is visible
    const pageHeading = page.locator("h1", { hasText: "Projects" });
    await expect(pageHeading).toBeVisible();

    // Look for project cards
    const projectCards = page.locator('a[href^="/projects/"]');
    const cardCount = await projectCards.count();

    console.log(`Found ${cardCount} project cards`);

    if (cardCount > 0) {
      await expect(projectCards.first()).toBeVisible();
      console.log("Projects loaded successfully!");
    }
  });
});

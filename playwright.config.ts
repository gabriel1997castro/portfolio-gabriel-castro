import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  timeout: 30000, // 30 seconds per test
  expect: {
    timeout: 10000, // 10 seconds for assertions
  },
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    actionTimeout: 10000, // 10 seconds for actions
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    // Only run multiple browsers in non-CI environments
    ...(process.env.CI
      ? []
      : [
          {
            name: "firefox",
            use: { ...devices["Desktop Firefox"] },
          },
          {
            name: "webkit",
            use: { ...devices["Desktop Safari"] },
          },
        ]),
  ],

  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000, // 2 minutes timeout for server start
    env: {
      NEXT_PUBLIC_SANITY_PROJECT_ID:
        process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "demo-project",
      NEXT_PUBLIC_SANITY_DATASET:
        process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
      NEXT_PUBLIC_SITE_URL:
        process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    },
  },
});

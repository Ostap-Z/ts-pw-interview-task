import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI ? Number(process.env.CORES) / 2 || 1 : undefined,

  reporter: [["html", { outputFolder: "playwright-report", open: "never" }]],
  use: {
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "api",
      use: {
        baseURL: process.env.API_BASE_URL || "http://localhost:3000/api",
      },
      testDir: "./tests/api",
    },
    {
      name: "e2e:chromium",
      testDir: "./tests/e2e",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: process.env.UI_BASE_URL || "http://localhost:3000",
      },
    },
    {
      name: "e2e:firefox",
      testDir: "./tests/e2e",
      use: {
        ...devices["Desktop Firefox"],
        baseURL: process.env.UI_BASE_URL || "http://localhost:3000",
      },
    },
    {
      name: "e2e:webkit",
      testDir: "./tests/e2e",
      use: {
        ...devices["Desktop Safari"],
        baseURL: process.env.UI_BASE_URL || "http://localhost:3000",
      },
    },
  ],
});

import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
import { gitStatus } from "./src/reporter/metadata";

dotenv.config();

const isMainWorker = !process.env.TEST_WORKER_INDEX;

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI
    ? Math.max(1, Math.floor(parseInt(process.env.CORES || "2", 10) / 2))
    : undefined,
  reporter: [["html", { outputFolder: "playwright-report", open: "never" }]],
  metadata: isMainWorker ? gitStatus() : undefined,
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

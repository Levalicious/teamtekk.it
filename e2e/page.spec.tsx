import { test, expect } from "@playwright/test";

test("should navigate to the login page", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveURL("/");
  await expect(page.locator("h1")).toContainText("Welcome to Remix");
});

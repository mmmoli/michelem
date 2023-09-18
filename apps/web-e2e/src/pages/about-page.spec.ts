import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/about');
});

test('Has a heading', async ({ page }) => {
  expect(await page.getByTestId('heading')).toBeVisible();
});

test('Has the Navbar', async ({ page }) => {
  expect(await page.getByTestId('navbar')).toBeVisible();
});

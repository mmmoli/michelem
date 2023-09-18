import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Delivers a main message', async ({ page }) => {
  expect(await page.getByTestId('main-message')).toBeVisible();
});

test('Has the Navbar', async ({ page }) => {
  expect(await page.getByTestId('navbar')).toBeVisible();
});

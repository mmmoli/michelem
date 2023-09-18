import { test, expect } from '@playwright/test';

test('has main message', async ({ page }) => {
  await page.goto('/');
  expect(await page.getByTestId('main-message')).toBeVisible();
});

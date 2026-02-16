import { test, expect } from '@playwright/test';

test('Add 3 dynamic products to cart', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.waitForSelector('#tbodyid h4 a');

  const products = page.locator('#tbodyid h4 a');
  const limit = Math.min(3, await products.count());

  for (let i = 0; i < limit; i++) {
    const name = await products.nth(i).textContent();
    console.log('Adding:', name?.trim());

    await products.nth(i).click();
    await page.waitForSelector('a:has-text("Add to cart")');

    await Promise.all([
      page.waitForEvent('dialog').then(d => d.accept()),
      page.locator('a:has-text("Add to cart")').click()
    ]);

    await page.getByRole('link', { name: 'Home' }).click();
    await page.waitForSelector('#tbodyid h4 a');
  }
});

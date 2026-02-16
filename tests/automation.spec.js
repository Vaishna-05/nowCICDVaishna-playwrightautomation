import { test, expect } from '@playwright/test';

test.skip('automation website', async ({ page }) => {

  await page.goto('https://automationexercise.com/');

  const products = page.locator('.col-sm-9 div.col-sm-4 div .productinfo');
  const count = await products.count();

  for (let i = 0; i < count; i++) {
    const productName = await products.nth(i).locator('p').textContent();

    if (productName?.includes('Men Tshirt')) {
      await products
        .nth(i)
        .locator('a', { hasText: 'Add to Cart' })
        .click();
      break;
    }
  }

  // Validate modal
  await expect(page.locator('.modal-content h4')).toHaveText(/Added/i);

  // ✅ IMPORTANT FIX: Click "View Cart" from modal
  await page
    .locator('.modal-content')
    .getByRole('link', { name: /View Cart/i })
    .click();

  // URL validation
  await expect(page).toHaveURL(/\/view_cart$/);

  // Assert cart contains one product
  await expect(page.locator('tbody tr')).toHaveCount(1);

  const list = await page.locator('tbody tr td h4 a').allTextContents();
  console.log(list);

  // Proceed to checkout
await page.waitForTimeout(2000);
await page.getByRole('button', { name: /Proceed To Checkout/i }).click({ timeout: 60000 });

});

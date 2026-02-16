import { test, expect } from '@playwright/test';

test('login cases', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  await page.locator('#username').fill('rahulshettyacademy');
  await page.locator('#password').fill('Learning@830$3mK2');
  await page.locator('select.form-control').selectOption('Teacher');
  await page.locator('#terms').check();

  await page.getByRole('link', { name: /terms and conditions/i }).click();
  await expect(page.locator('.blinkingText')).toBeVisible();

  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page).toHaveURL(/\/angularpractice\/shop/);
//next page
 const products = page.locator('app-card.col-lg-3 h4 a');
const count = await products.count();
const text = await products.allTextContents();
console.log(count);
console.log(text);

const card=page.locator('app-card.col-lg-3',{hasText:'iphone'});
await card.locator('button').click();

await page.locator('a.btn-primary').click();
await expect(page).toHaveTitle(/ProtoCommerce/);
await expect(page.getByRole('link',{name:'iphone X'})).toHaveText(/iphone X/);

//third page
/*await expect(page).toHaveURL(/angularpractice/);

await expect(page.locator('.jumbotron h1')).toHaveText(/Protractor Tutorial/);
await page.locator('input[class*="form-control"][name="name"]').fill('Vaishna');
await page.locator('[name="email"]').fill('vaishnaravinth14@gmail.com');
await page.locator('#exampleInputPassword1').fill('1234567');
await page.locator('#exampleCheck1').check();
await page.locator('select#exampleFormControlSelect1').selectOption('Female');

await page.getByRole('button',{name:'Submit'}).click();
await expect(page.locator('div.alert-dismissible')).toHaveText(/Success!/);*/





});

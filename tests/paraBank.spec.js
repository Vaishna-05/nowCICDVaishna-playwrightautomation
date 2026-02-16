import { test, expect } from '@playwright/test'

test.skip('paraBank', async ({ page }) => {

   await page.goto('https://www.amazon.in/');
   await page.locator('input#twotabsearchtextbox').fill('samsung')
   await page.locator('div.nav-right div span input').click();

   await expect (page.locator('a h2 span')).first().toBeVisible();

   const productList=await page.locator('a h2 span').count();
   console.log(productList);

   const productNames=await page.locator('a h2 span').allTextContents();
   console.log(productNames);



});

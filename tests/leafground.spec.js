import {test,expect} from '@playwright/test'

test('Leafground.com',async({page})=>{

await page.goto('https://www.leafground.com/alert.xhtml');
await page.on('dialog', async(dialog)=>{
  console.log(dialog.message())
  dialog.accept();

})
await page.locator('.card').filter('Alert (Simple Dialog)').locator('button[onclick*="alert("]').click();

})


test.only('window',async({page,context})=>{

await page.goto('https://www.leafground.com/window.xhtml');
console.log(context.pages().length);

await page.getByRole('button').filter({hasText:'Open Multiple'}).click();
//await page.getByRole('button', { name: 'Open with delay' }).click();
await expect.poll(() => context.pages().length).toBeGreaterThan(1);
console.log(context.pages().length);
})
import { test, expect } from '@playwright/test';

test('Rahulsheety', async ({ page,context }) => {

  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.locator("input[value='radio2']").check();
  await expect(page.locator("input[value='radio2']")).toBeChecked();
  await page.getByPlaceholder('Type to Select Countries').click();
  await page.locator('#dropdown-class-example').selectOption('Option3');
  await expect(page.locator('#dropdown-class-example')).toHaveText(/Option3/i);

console.log(await context.pages().length);

const [tab1]=await Promise.all([
    context.waitForEvent('page'),
    page.locator('#openwindow').click()
])

await tab1.waitForLoadState();
console.log(await tab1.url());
console.log(await context.pages().length);

await expect.poll(()=>context.pages().length).toBeGreaterThan(1);
await Promise.all(context.pages().slice(1).map(p=>p.close()));

console.log(await context.pages().length);


await page.getByPlaceholder('Enter Your Name').fill('Sia');
page.on('dialog',async(dialog)=>{
    await dialog.accept();
    console.log(await dialog.message());
})


await page.locator('input[onclick="displayAlert()"]').click();
await page.locator('input[onclick="displayConfirm()"]').click();










});

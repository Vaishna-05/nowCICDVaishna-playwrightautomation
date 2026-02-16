import {test,expect} from '@playwright/test'


test('leafground', async({page})=>{

await page.goto('https://www.leafground.com/');

await page.getByRole('link').filter({hasText:'Browser'}).click();
await page.locator('ul[role="menu"] li a span').filter({hasText:'Alert'}).click();

await expect(page).toHaveTitle('Alert');

const alertList=await page.locator('.card h5').allTextContents();
console.log(`List of alert: ${alertList}`);

await page.on('dialog',async dialog=>{

    dialog.accept();
    console.log(dialog.message());

})

const simpleAlert = page.locator('.card', {
  hasText: 'Alert (Simple Dialog)'
});

await simpleAlert.getByRole('button', { name: 'Show' }).first().click();


await expect(page.locator('#simple_result')).toHaveText(/You have successfully clicked an alert/i);



///////////
await page.getByRole('link').filter({hasText:'Browser'}).click();

await page.locator('ul[role="menu"] li a span').filter({hasText:'Frame'}).click();

console.log(page.frames().length);
const frame = await page
  .locator('iframe')
  .nth(1)
  .contentFrame();

await frame.getByRole('button', { name: 'Count Frames' }).click();



console.log(page.frames().length);
const count=page.frames();

for(let counts of count)
{
    console.log(counts.url())
}
})

test('next',async({page,context})=>{
    await page.goto('https://www.leafground.com/window.xhtml');


const [newPage]=await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button').filter({hasText:/^Open$/}).click()

])
await newPage.waitForLoadState()
console.log(newPage.url());

await page.bringToFront();

console.log(page.url());

})

test('next1',async({page,context})=>{
  await page.goto('https://www.leafground.com/window.xhtml');

  console.log(context.pages().length);
await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button').filter({hasText:/^Open Multiple$/}).click()

])
await expect.poll(context.pages().length).toBeGreaterThan(1)
console.log(context.pages().length);
  const count=context.pages();
  for(let counts of count)
  {
    console.log(await counts.url())
  }
})

test.only('select',async({page})=>{

await page.goto('https://www.leafground.com/select.xhtml');
await page.locator('select.ui-selectonemenu').selectOption('Playwright');
await page.locator('label', { hasText: 'Select Country' }).click();
await page.getByRole('option', { name: 'India' }).click();

await page.locator('label', { hasText: 'Select Language' }).click();
await page.getByRole('option', { name: 'Tamil' }).click();

})

















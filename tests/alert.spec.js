import {test,expect} from '@playwright/test';

test('alert handling',async({page})=>{

await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

await page.on('dialog', async dialog=>{

    console.log(dialog.message());

    if(dialog.type()==='prompt')
    {
dialog.accept('hi')
    }
    else{
        dialog.accept();
    }
})

await page.locator('ul li button').filter({hasText:'Click for JS Alert'}).click();
await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');

await page.locator('ul li button').filter({hasText:'Click for JS Confirm'}).click();
await expect(page.locator('#result')).toHaveText('You clicked: Ok');

await page.locator('ul li button').filter({hasText:'Click for JS Prompt'}).click();
await expect(page.locator('#result')).toHaveText('You entered: hi');

})
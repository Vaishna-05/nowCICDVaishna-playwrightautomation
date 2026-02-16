import {test,expect} from '@playwright/test'

test('frame',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/iframe');
    console.log(await page.frames().length);



for(const f of await  page.frames())
{
    if(f!==page.mainFrame())
    {
console.log(f.url());
    }
    
}
  const frame = page.frameLocator('#mce_0_ifr');
  const editor = frame.locator('#tinymce');

  await editor.click();        // focus editor
  await page.keyboard.press('Control+A');  // select all
  await page.keyboard.press('Backspace');  // delete old text
  await page.keyboard.type('Hello Vaishu');

  await expect(editor).toContainText('Hello Vaishu');



})
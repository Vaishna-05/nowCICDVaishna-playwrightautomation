import {test,expect} from '@playwright/test'

test('window', async({page,context})=>{

    await page.goto('https://the-internet.herokuapp.com/windows');
    console.log(await context.pages().length)

 const [newPromise]=await Promise.all([
    context.waitForEvent('page'),
    page.locator('div.example a').click()
 ]);

 

await newPromise.waitForLoadState();
     console.log(await context.pages().length)
     for(const p of await context.pages())
     {
if(p!==context.pages()[0])
{
   console.log(p.url());
}
     
     }


const newPage=await context.pages()[1];
console.log(await newPage.title());
await newPage.screenshot({path:'scr.png',fullPage:true});

  for(const p of context.pages())
     {
if(p!==await context.pages()[0])
{
   console.log(await p.close());
}
     
     }


})
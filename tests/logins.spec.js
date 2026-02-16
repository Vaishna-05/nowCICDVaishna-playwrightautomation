import {test,expect} from '@playwright/test'
test.describe('all test',()=>{

const names=[
    {userName:'standard_user',password:'secret_sauce',valid:true},
    {userName:'visual_user',password:'secret_sauce',valid:true},
    {userName:'error_user',password:'secret_sauce',valid:false}
   
]
for(const name of names)
{

test(`login test - ${name.userName}` ,async({page,context})=>{

await page.goto('https://www.saucedemo.com/');
await page.locator('#user-name').fill(name.userName);
await page.locator('#password').fill(name.password);
await page.locator('#login-button').click();

if(name.valid)
{
    await expect(page).toHaveTitle('Swag Labs');
    await context.storageState({path:`./storage/state-${name.userName}.json`});
    await page.screenshot({path:`./screenshot/${name.userName}.png`,fullPage:true});
}
else{
    console.log('its failed')
}


})
}






})

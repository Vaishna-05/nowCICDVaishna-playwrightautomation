import {test,expect} from '@playwright/test'

const data=[
    {Username:'standard_user',Password:'secret_sauce',vaild:true},
      //{Username:'locked_out_user',Password:'secret_sauce',valid:false},
       // {Username:'problem_user',Password:'secret_sauce',valid:true},
];

for(const datas of data)
{
    test(`Pratice -${datas.Username}`,async({page})=>{
        await page.goto('https://www.saucedemo.com/')

await page.getByPlaceholder('Username').fill(datas.Username);
await page.getByPlaceholder('Password').fill(datas.Password);
await page.getByRole('button',{name:'Login'}).click();

await expect(page).toHaveTitle('Swag Labs');
const text=await page.locator('div[data-test="secondary-header"]').allTextContents();

await expect(text.join(' ')).toContain('Products');

const list=await page.locator('.inventory_list a div').allTextContents();
console.log(list.join(' '));

const data=await page.locator('.inventory_list a div').count();

for(let i=0;i<data;i++)
{
    if(list[i].includes('Sauce Labs Fleece Jacket'))
    {
        await page.locator('.inventory_list a div').nth(i).click();
        break;
    }
}









    })
}
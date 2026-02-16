import {test,expect} from '@playwright/test'

test('inventery', async({page})=>{

await page.goto('https://www.saucedemo.com/');
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();

await expect(page).toHaveTitle('Swag Labs');

const products=await page.locator('div#inventory_container a div').allTextContents();
console.log(products);

const countlist=await page.locator('div#inventory_container a div');


const target=[
    'Sauce Labs Bolt T-Shirt',
    'Sauce Labs Onesie',
    'Sauce Labs Fleece Jacket'
];

for(let i=0;i<await countlist.count();i++)
{
    const name=await countlist.nth(i).textContent();
    console.log(name);

    if(target.includes(name.trim()))
    {
      await page.locator('.inventory_item').nth(i)
        .getByRole('button', { name: 'Add to cart' })
        .click();
    }
}

await expect(page.locator('.shopping_cart_badge')).toHaveText('3');
await page.locator('div.shopping_cart_container').click();

const cartList=await page.locator('div.cart_item a div').allTextContents();
console.log(cartList);
const cartListItems=await page.locator('div.cart_item a div')


for(let i=0;i<await cartListItems.count();i++)
{
  const listNames=  await cartListItems.nth(i).textContent();
  if(listNames.includes('Sauce Labs Onesie'))
  {
   await page.locator('.cart_item').nth(i).getByRole('button').click();

   
    break;
  }

}

await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
await page.locator('#checkout').click();
await expect(page.getByText('Checkout: Your Information')).toBeVisible();

})
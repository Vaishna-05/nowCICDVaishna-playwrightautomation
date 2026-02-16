import {expect} from '@playwright/test'
import creds from '../utlis/cred.json' assert { type: 'json' };
class Login{
    constructor(page)
    {
this.page=page;
this. username=page.locator('#username');
this. password=page.locator('#password');
this. selectOption=page.locator('select.form-control');
this. check=page.locator('#terms');
this. linkcheck=page.getByRole('link',{name:/terms and conditions/i});
this. blinking=page.locator('.blinkingText');
this. button=page.getByRole('button', { name: 'Sign In' });
  
    }
  async loginPage()
    {
  await this.username.fill(creds.validUser.username);
    await this.password.fill(creds.validUser.password);
await this.selectOption.selectOption('Teacher');
    await this.check.check();
    await this.linkcheck.click();
    await expect(this.page).toHaveURL(/loginpagePractise\/#$/)
        await expect(this.blinking).toHaveClass(/blinkingText/);
  await this.button.click();
   await expect(this.page).toHaveURL(/\/angularpractice\/shop/);

    }
}

export default Login;
import {test,expect} from '@playwright/test'


test.skip('fileUpload',async({page})=>{


   await page.goto('https://the-internet.herokuapp.com/upload', {
        timeout: 60000,   // 60s
        waitUntil: 'domcontentloaded'
    });

    await page.locator('#file-upload').setInputFiles('tests/storage/hi.txt');
    await page.locator('#file-submit').click();

    await expect(page.locator('#content h3')).toHaveText('File Uploaded!');

})
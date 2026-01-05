import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.locator('#checkBoxOption1').check();
  await page.locator('#checkBoxOption2').check();
  await page.getByRole('textbox', { name: 'Enter Your Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Name' }).fill('Git Update change');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  //update
  await page.getByRole('button', { name: 'Alert' }).click();
  await page.getByRole('textbox', { name: 'Type to Select Countries' }).click();
  await page.getByRole('textbox', { name: 'Type to Select Countries' }).fill('arm');
 
  await expect(page.getByRole('link', { name: 'Open Tab' })).toBeVisible();
  await expect(page.locator('body')).toContainText('Dropdown Example');
});

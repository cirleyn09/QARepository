import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('autenticar usuario', async ({ page }) => {

    await page.goto('/login');

    //await page.getByRole('link', { name: 'Login' }).click();

    await page.getByTestId('login-email').fill(process.env.PRACTICE_QA_EMAIL!);

    await page.getByTestId('login-password').fill(process.env.PRACTICE_QA_PASSWORD!);

    await page.getByTestId('login-submit').click();

    //await expect(page).toHaveURL(/dashboard/);
    await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();

    await page.context().storageState({
        path: authFile
    });

});
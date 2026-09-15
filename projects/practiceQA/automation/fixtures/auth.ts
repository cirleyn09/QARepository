import { test as base, expect } from '@playwright/test';

type AuthFixtures = {
    authenticatedUser: void;
};

export const test = base.extend<AuthFixtures>({
    authenticatedUser: [async ({ page }, use) => {
        const email = process.env.PRACTICE_QA_EMAIL;
        const password = process.env.PRACTICE_QA_PASSWORD;

        if (!email || !password) {
            throw new Error('PRACTICE_QA_EMAIL y PRACTICE_QA_PASSWORD son requeridos para las pruebas autenticadas');
        }

        await page.goto('/login');
        await page.getByTestId('login-email').fill(email);
        await page.getByTestId('login-password').fill(password);
        await page.getByTestId('login-submit').click();
        await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();

        await use();
    }, { auto: true }],
});

export { expect };

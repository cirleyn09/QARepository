import { Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly logoutButton: Locator;
    readonly invalidCredentialsErrorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByTestId('login-email');
        this.passwordInput = page.getByTestId('login-password');
        this.loginButton = page.getByTestId('login-submit');
        this.logoutButton = page.getByRole('button', { name: 'Logout' });
        this.invalidCredentialsErrorMessage = page
            .locator('#main-content')
            .getByText('Invalid email or password');
    }


    async login(email: string, password: string): Promise<void> {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickLoginButton();
    }

    async fillEmail(email: string): Promise<void> {
        await this.emailInput.fill(email);
    }

    async fillPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }

    async clickLoginButton(): Promise<void> {
        await this.loginButton.click();
    }
}
import { Page, Locator } from '@playwright/test';

export class ProductsPage {

    readonly page: Page;
    readonly shoppingCartLink: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logoutButton = page.getByRole('button', {
            name: 'Logout'
        });
        this.shoppingCartLink = page.getByRole('link', {
            name: 'Shopping cart'
        });
    }

    async addProduct(productName: string) {
        await this.page
            .getByRole('button', { name: `Add ${productName}` })
            .click();
    }

    async goToShoppingCart() {
        await this.shoppingCartLink.click();
    }

    async logout() {
        await this.logoutButton.click();
    }
}
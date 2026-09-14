import { test, expect } from '../../automation/fixtures/auth';
import { ProductsPage } from '../../automation/pages/productsPage';

test('agregar Wireless Bluetooth al carrito',
    {
        tag: ['@smoke'],
    },
    async ({ page }) => {

        const productsPage = new ProductsPage(page);

        await page.goto('/');

        await productsPage.addProduct('Wireless Bluetooth');

        await productsPage.goToShoppingCart();

    });


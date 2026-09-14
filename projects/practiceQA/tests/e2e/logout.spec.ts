import { test, expect } from '../../automation/fixtures/auth';
import { ProductsPage } from '../../automation/pages/productsPage';

test('cerrar sesion',
    {
        tag: ['@smoke', '@regression'],
    },
    async ({ page }) => {

        const productsPage = new ProductsPage(page);


        await productsPage.logout();

    });
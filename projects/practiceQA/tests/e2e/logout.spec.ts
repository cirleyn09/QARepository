import { test, expect } from '../../automation/fixtures/auth';
import { ProductsPage } from '../../automation/pages/productsPage';

test('cerrar sesion',
    {
        tag: ['@smoke', '@regression'],
    },
    async ({ page }) => {
        const productsPage = new ProductsPage(page);

        await test.step('Dado que estoy autenticado', async () => {
            await expect(productsPage.logoutButton).toBeVisible();
        });

        await test.step('Cuando cierro sesion', async () => {
            await productsPage.logout();
        });

        await test.step('Entonces debo ver la sesion cerrada', async () => {
            await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
            await expect(productsPage.logoutButton).toBeHidden();
        });
//});

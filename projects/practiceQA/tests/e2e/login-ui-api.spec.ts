import { test, expect } from '@playwright/test';
import { expectJsonResponse } from '../../automation/api/assertions';
import { buildNewUser } from '../../automation/api/auth';
import { LoginPage } from '../../automation/pages/loginPage';

test.describe('Crear usuario por API y login por UI', () => {

    test('debe registrar un usuario por API y permitir iniciar sesion por UI', async ({ request, page }) => {
        const newUser = buildNewUser();
        let createdUserEmail = '';

        try {
            await test.step('Dado que creo un usuario por API', async () => {
                const response = await request.post('/api/auth/register', {
                    data: newUser,
                });

                await expectJsonResponse(response, 201);

                const created = await response.json();
                createdUserEmail = created.user.email;

                expect(created.user.name).toBe(newUser.name);
                expect(created.user.email).toBe(newUser.email);
            });

            await test.step('Cuando inicio sesion por UI con el usuario creado', async () => {
                const loginPage = new LoginPage(page);

                await page.goto('/login');
                await loginPage.login(createdUserEmail, newUser.password);
            });

            await test.step('Entonces debo ver la sesion iniciada', async () => {
                await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
            });
        } finally {
            if (createdUserEmail) {
                const deleteResponse = await request.delete(`/api/auth/delete/${createdUserEmail}`);
                expect([200, 204, 404]).toContain(deleteResponse.status());
            }
        }
    });
});

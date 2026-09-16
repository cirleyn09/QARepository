import { test, expect } from '../../automation/fixtures/baseLogin';
import { users } from '../../automation/data/users';

test.describe('Login', () => {

    test('deberia mostrar los campos de inicio de sesion', {
        tag: ['@smoke', '@regression'],
    },
        async ({ loginPage }) => {
            await expect(loginPage.emailInput, 'El campo de email no es visible').toBeVisible();
            await expect(loginPage.passwordInput, 'El campo de contrasena no es visible').toBeVisible();
            await expect(loginPage.loginButton, 'El boton de inicio de sesion no es visible').toBeVisible();
        });

    test('deberia iniciar sesion correctamente cuando las credenciales son validas',
        {
            tag: ['@smoke', '@regression'],
        },
        async ({ loginPage, page }) => {
            await test.step('Cuando inicio sesion con credenciales validas', async () => {
                await loginPage.login(users.validUser.email, users.validUser.password);
            });

            await test.step('Entonces debo ver el boton de cerrar sesion', async () => {
                await expect(page).toHaveURL(/fullstack\.qa\.dev/);
                await expect(loginPage.logoutButton).toBeVisible();

            });
        });

    test('Deberia mostrar un mensaje de error cuando las credenciales son invalidas',
        {
            tag: ['@smoke', '@regression', '@negative'],
        },
        async ({ loginPage }) => {
            await test.step('Cuando inicio sesion con credenciales invalidas', async () => {
                await loginPage.login(users.invalidUser.email, users.invalidUser.password);
            });

            await test.step('Entonces debo ver un error de credenciales invalidas', async () => {
                await expect(loginPage.invalidCredentialsErrorMessage, 'No se muestra el mensaje de credenciales invalidas').toBeVisible();
            });
        });
});

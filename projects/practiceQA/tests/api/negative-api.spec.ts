import { test } from '@playwright/test';
import { expectJsonResponse } from '../../automation/api/assertions';
import { existingUser, invalidLoginCases } from '../../automation/api/auth';

test.describe('Auth API - casos negativos', () => {

    for (const { title, expectedStatus, payload } of invalidLoginCases) {
        test(title, async ({ request }) => {
            const response = await request.post('/api/auth/login', {
                data: payload,
            });

            await expectJsonResponse(response, expectedStatus);
        });
    }

    test('POST /api/auth/register - debe rechazar un usuario existente', async ({ request }) => {
        const response = await request.post('/api/auth/register', {
            data: existingUser,
        });

        await expectJsonResponse(response, 409);
    });
});

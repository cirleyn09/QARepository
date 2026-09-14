import { expect, type APIResponse } from '@playwright/test';

export async function expectJsonResponse(response: APIResponse, expectedStatus = 200): Promise<void> {
    expect(response.status()).toBe(expectedStatus);
    expect(response.headers()['content-type']).toContain('application/json');
}

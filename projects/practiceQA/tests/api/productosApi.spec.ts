import { test, expect } from '@playwright/test';
import { expectJsonResponse } from '../../automation/api/assertions';
import {
    expectProductsSortedByPriceAsc,
    getProductsFromResponse,
    productToCreate,
} from '../../automation/api/products';

test.describe('Filtros Productos', () => {

    test('POST /api/products - debe procesar una solicitud de producto', async ({ request }) => {
        const response = await request.post('/api/products', {
            data: productToCreate,
        });

        await expectJsonResponse(response);

        const productBody = await response.json();
        expect(productBody.success).toBe(true);
        expect(Array.isArray(productBody.data.suggestions)).toBeTruthy();
    });

    test('GET /api/products?sortBy=price&sortOrder=asc - debe obtener productos ordenados por precio', async ({ request }) => {
        const response = await request.get('/api/products?sortBy=price&sortOrder=asc');

        await expectJsonResponse(response);

        const body = await response.json();
        const products = getProductsFromResponse(body);

        expectProductsSortedByPriceAsc(products);
    });

    test('GET /api/products?categories=electronics - debe obtener productos de la categoria electronica', async ({ request }) => {
        const response = await request.get('/api/products?categories=electronics');

        await expectJsonResponse(response);

        const body = await response.json();
        const products = getProductsFromResponse(body);

        for (const product of products) {
            expect(product.category).toBe('electronics');
        }
    });

    test('GET /api/products?inStock=false - debe obtener productos agotados', async ({ request }) => {
        const response = await request.get('/api/products?inStock=false');

        await expectJsonResponse(response);

        const body = await response.json();
        const products = getProductsFromResponse(body);

        for (const product of products) {
            expect(product.inStock).toBe(false);
        }
    });
});

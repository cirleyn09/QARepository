import { expect } from '@playwright/test';

export type Product = {
    id: number | string;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: number;
    reviews: number;
    inStock: boolean;
};

type ProductsResponse = {
    data?: unknown;
};

export const productToCreate = {
    name: 'Teclado Gamer',
    price: 1200,
};

export function expectProductSchema(product: Product): void {
    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('price');
    expect(product).toHaveProperty('description');
    expect(product).toHaveProperty('category');
    expect(product).toHaveProperty('image');
    expect(product).toHaveProperty('rating');
    expect(product).toHaveProperty('reviews');
    expect(product).toHaveProperty('inStock');

    expect(typeof product.name).toBe('string');
    expect(typeof product.price).toBe('number');
    expect(typeof product.category).toBe('string');
    expect(typeof product.inStock).toBe('boolean');
}

export function getProductsFromResponse(body: ProductsResponse): Product[] {
    expect(Array.isArray(body.data)).toBeTruthy();

    const products = body.data as Product[];

    expect(products.length).toBeGreaterThan(0);
    products.forEach(expectProductSchema);

    return products;
}

export function expectProductsSortedByPriceAsc(products: Product[]): void {
    for (let index = 0; index < products.length - 1; index++) {
        expect(products[index].price).toBeLessThanOrEqual(products[index + 1].price);
    }
}

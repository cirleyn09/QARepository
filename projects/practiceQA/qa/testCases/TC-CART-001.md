# Test Case: Agregar producto

## General Information

| Field | Details |
| --- | --- |
| **ID** | `TC-CART-001` |
| **Module** | Cart |
| **Priority** | High |
| **Status** | Ready |

## Preconditions
- The application is available at https://fullstack.qa-practice.dev
- A product with stock is available in the catalog
- The user is on the product page or catalog page

## Test Data

```text
Product: any available product
```

## Steps
1. Select a product with stock.
2. Click the add-to-cart button.
3. Open the cart.

## Expected Result
- The product is added to the cart successfully.
- The cart count or item list updates immediately.
- The selected product appears correctly within the cart.

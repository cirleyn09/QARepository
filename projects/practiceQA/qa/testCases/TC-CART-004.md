# Test Case: Cart persistence

## General Information

| Field              | Details         |
| ------------------ | --------------- |
| **ID**       | `TC-CART-004` |
| **Module**   | Cart            |
| **Priority** | Medium          |
| **Status**   | Passed          |

## Preconditions

- The application is available at https://fullstack.qa-practice.dev
- At least one product is added to the cart

## Test Data

```text
Cart: product added successfully
```

## Steps

1. Add a product to the cart.
2. Refresh the page or navigate away and return.
3. Open the cart again.

## Expected Result

- The cart maintains its previous state when the session or browser state allows persistence.
- The product remains available in the cart after refresh or navigation.
- The price and quantity are still accurate.

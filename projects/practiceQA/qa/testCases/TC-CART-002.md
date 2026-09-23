# Test Case: Remove product

## General Information

| Field              | Details         |
| ------------------ | --------------- |
| **ID**       | `TC-CART-002` |
| **Module**   | Cart            |
| **Priority** | High            |
| **Status**   | Passed          |

## Preconditions

- The application is available at https://fullstack.qa-practice.dev
- At least one product is in the cart

## Test Data

```text
Cart: one or more products added
```

## Steps

1. Open the cart.
2. Select the remove option for one product.
3. Confirm the removal if applicable.

## Expected Result

- The product is removed from the cart.
- The cart total and item count update correctly.
- The cart reflects the updated state immediately.

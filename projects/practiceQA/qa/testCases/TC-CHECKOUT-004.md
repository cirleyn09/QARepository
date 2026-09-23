# Test Case: Purchase cancellation

## General Information

| Field              | Details             |
| ------------------ | ------------------- |
| **ID**       | `TC-CHECKOUT-004` |
| **Module**   | Checkout            |
| **Priority** | Medium              |
| **Status**   | Passed              |

## Preconditions

- The application is available at https://fullstack.qa-practice.dev
- The user is authenticated
- The cart contains one or more products

## Test Data

```text
Cart: valid product selected
```

## Steps

1. Add a product to the cart.
2. Open checkout.
3. Select the cancel or return option before confirming the order.

## Expected Result

- The purchase is not completed.
- The user is returned to the previous screen without placing the order.
- The cart remains in the expected state without unintended changes.

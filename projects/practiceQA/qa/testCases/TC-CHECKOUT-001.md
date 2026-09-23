# Test Case: Purchase successfully completed

## General Information

| Field              | Details             |
| ------------------ | ------------------- |
| **ID**       | `TC-CHECKOUT-001` |
| **Module**   | Checkout            |
| **Priority** | High                |
| **Status**   | Failed              |

## Preconditions

- The application is available at https://fullstack.qa-practice.dev
- The user is authenticated
- The cart contains at least one valid product

## Test Data

```text
User: valid authenticated user
Cart: at least one product with stock
```

## Steps

1. Add a valid product to the cart.
2. Open the checkout flow.
3. Complete all required information.
4. Confirm the purchase.

## Expected Result

- The checkout completes successfully.
- A confirmation message is shown.
- The order is confirmed and the user receives the appropriate success feedback.
- The cart is updated after the transaction.

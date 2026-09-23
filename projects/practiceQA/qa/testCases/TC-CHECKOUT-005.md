# Test Case: Confirmación correcta

## General Information

| Field              | Details                   |
| ------------------ | ------------------------- |
| **ID**       | `TC-CHECKOUT-005`       |
| **Module**   | Checkout                  |
| **Priority** | High                      |
| **Status**   | Failed (BUG-CHECKOUT-001) |

## Preconditions

- The application is available at https://fullstack.qa-practice.dev
- The user is authenticated
- The cart contains valid and available products

## Test Data

```text
User: authenticated
Cart: valid item(s)
Checkout data: complete and valid
```

## Steps

1. Add a valid product to the cart.
2. Start checkout.
3. Fill all required fields correctly.
4. Click the confirmation or place order button.
5. Review the completion confirmation.

## Expected Result

- The confirmation message is displayed correctly.
- The purchase is acknowledged as successful.
- The user sees the final post-purchase status without errors.
- The order confirmation information matches the selected cart content.

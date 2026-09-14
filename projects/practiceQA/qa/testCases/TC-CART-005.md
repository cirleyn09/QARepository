# Test Case: Carrito vacío

## General Information

| Field | Details |
| --- | --- |
| **ID** | `TC-CART-005` |
| **Module** | Cart |
| **Priority** | Medium |
| **Status** | Ready |

## Preconditions
- The application is available at https://fullstack.qa-practice.dev
- The cart is empty or all products have been removed

## Test Data

```text
Cart: empty
```

## Steps
1. Open the cart page.
2. Review the cart state.
3. Try to proceed with checkout if the option is visible.

## Expected Result
- The cart displays an empty state message or equivalent indication.
- No stale items or totals remain visible.
- The user is informed that the cart is empty.

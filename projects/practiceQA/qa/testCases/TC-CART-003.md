# Test Case: Actualizar cantidad

## General Information

| Field | Details |
| --- | --- |
| **ID** | `TC-CART-003` |
| **Module** | Cart |
| **Priority** | High |
| **Status** | Ready |

## Preconditions
- The application is available at https://fullstack.qa-practice.dev
- At least one product is already in the cart

## Test Data

```text
Product in cart: selected item
```

## Steps
1. Open the cart.
2. Increase or decrease the quantity of a product.
3. Save or confirm the action.

## Expected Result
- The cart quantity updates correctly.
- The total price is recalculated according to the new quantity.
- The updated quantity is displayed consistently in all relevant UI areas.

# Test Case: Datos inválidos

## General Information

| Field | Details |
| --- | --- |
| **ID** | `TC-CHECKOUT-003` |
| **Module** | Checkout |
| **Priority** | High |
| **Status** | Ready |

## Preconditions
- The application is available at https://fullstack.qa-practice.dev
- The user is authenticated
- The cart contains at least one product

## Test Data

```text
Name: invalid format
Email: not valid
Phone: malformed
Address: incomplete
```

## Steps
1. Open the checkout page.
2. Enter invalid values in one or several required fields.
3. Attempt to continue the purchase.

## Expected Result
- The form blocks submission and displays validation errors.
- Invalid values are rejected clearly and consistently.
- The user cannot complete the checkout with malformed data.

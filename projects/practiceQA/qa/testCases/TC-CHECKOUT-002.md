# Test Case: Campos obligatorios

## General Information

| Field | Details |
| --- | --- |
| **ID** | `TC-CHECKOUT-002` |
| **Module** | Checkout |
| **Priority** | High |
| **Status** | Ready |

## Preconditions
- The application is available at https://fullstack.qa-practice.dev
- The user is authenticated
- The cart contains one or more products

## Test Data

```text
Required checkout fields: empty or incomplete
```

## Steps
1. Open the checkout page.
2. Leave required fields blank.
3. Attempt to continue or place the order.

## Expected Result
- The system blocks checkout progress.
- Validation messages are displayed for missing mandatory fields.
- The user remains on the checkout step until required information is provided.

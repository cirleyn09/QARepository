# Test Case: Out-of-stock product

## General Information

| Field              | Details            |
| ------------------ | ------------------ |
| **ID**       | `TC-CATALOG-004` |
| **Module**   | Catalog            |
| **Priority** | High               |
| **Status**   | Passed             |

## Preconditions

- The application is available at https://fullstack.qa-practice.dev
- The user is on the catalog page
- A product without stock is available in the catalog

## Test Data

```text
Product: out-of-stock item
```

## Steps

1. Locate a product marked as out of stock.
2. Review its card details.
3. Attempt to add it to the cart if the UI allows.

## Expected Result

- The product is clearly shown as unavailable.
- The buying action is disabled or indicates the product is unavailable.
- The user is not allowed to complete a purchase for that item.

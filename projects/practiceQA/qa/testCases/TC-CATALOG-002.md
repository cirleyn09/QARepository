# Test Case: Filtro de productos

## General Information

| Field | Details |
| --- | --- |
| **ID** | `TC-CATALOG-002` |
| **Module** | Catalog |
| **Priority** | High |
| **Status** | Ready |

## Preconditions
- The application is available at https://fullstack.qa-practice.dev
- The user is on the catalog page

## Test Data

```text
Category: Electronics
```

## Steps
1. Select a category filter, such as Electronics.
2. Observe the product list.
3. Repeat with another filter category.

## Expected Result
- Only products belonging to the selected category are displayed.
- The product count updates according to the filter.
- The catalog remains consistent and usable after each filter action.

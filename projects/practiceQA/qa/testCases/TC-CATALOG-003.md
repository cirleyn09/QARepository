# Test Case: Ordenamiento (precio/nombre)

## General Information

| Field | Details |
| --- | --- |
| **ID** | `TC-CATALOG-003` |
| **Module** | Catalog |
| **Priority** | Medium |
| **Status** | Ready |

## Preconditions
- The application is available at https://fullstack.qa-practice.dev
- The user is on the catalog page

## Test Data

```text
Sort options: price ascending, price descending, name ascending, name descending
```

## Steps
1. Apply an ascending sort by price.
2. Observe the list order.
3. Change to descending price sort.
4. Repeat with a name-based sort if available.

## Expected Result
- Products are displayed in the expected sorted order.
- Sorting is consistent and reflects the selected criteria.
- No product is duplicated or omitted due to sorting.

# Test Case: Detalle de producto

## General Information

| Field | Details |
| --- | --- |
| **ID** | `TC-CATALOG-005` |
| **Module** | Catalog |
| **Priority** | High |
| **Status** | Ready |

## Preconditions
- The application is available at https://fullstack.qa-practice.dev
- The user is on the catalog page

## Test Data

```text
Product: any valid product from the catalog
```

## Steps
1. Click a product card from the catalog.
2. Review the product detail page.
3. Check the name, description, price, image, and status.

## Expected Result
- The detail page shows the correct product information.
- No mismatches exist between the catalog and the detail page.
- The product status, image, and price are correctly displayed.

# Test Case: Texto cortado o desbordado

## General Information

| Field              | Details    |
| ------------------ | ---------- |
| **ID**       | `UI-003` |
| **Module**   | UI         |
| **Priority** | High       |
| **Status**   | Passed     |

## Preconditions

- The application is available at https://fullstack.qa-practice.dev
- The user can access the Home, Login, and Register pages.
- Browser DevTools are available.

## Test Data

```text
Pages: Home, Login, Register
Elements: search input, section labels, auth links, categories, prices, availability labels
```

## Steps

1. Open the Home page.
2. Review **Search products**, sections, auth links, categories, prices, and availability labels.
3. Open the Login page.
4. Open the Register page.
5. Reduce the viewport width and repeat the visual review.

## Expected Result

- No text is cut off.
- No text exits its container.
- No text overlaps another component.
- Text wraps correctly when needed.

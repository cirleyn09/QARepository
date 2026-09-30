# Test Case: Layout responsive en mobile

## General Information

| Field              | Details    |
| ------------------ | ---------- |
| **ID**       | `UI-001` |
| **Module**   | UI         |
| **Priority** | High       |
| **Status**   | Passed     |

## Preconditions

- The application is available at https://fullstack.qa-practice.dev
- The user is on the main page.
- Browser DevTools are available.

## Test Data

```text
Viewport: iPhone SE / 375x667
Page: Home
```

## Steps

1. Open the main page.
2. Open DevTools.
3. Select the **iPhone SE / 375x667** viewport.
4. Review the search input, filters, products, and buttons.
5. Scroll horizontally and vertically.

## Expected Result

- All components adapt to the screen width.
- No horizontal scroll is displayed.
- No overlapping elements are observed.
- No element appears outside the viewport.

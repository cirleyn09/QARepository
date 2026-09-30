# Test Case: Alineación de botones de disponibilidad

## General Information

| Field              | Details    |
| ------------------ | ---------- |
| **ID**       | `UI-002` |
| **Module**   | UI         |
| **Priority** | Medium     |
| **Status**   | Passed     |

## Preconditions

- The application is available at https://fullstack.qa-practice.dev
- The user is on the main page.
- Browser DevTools are available.

## Test Data

```text
Viewports: 1920x1080, 1366x768, 375x667
Section: Availability
Buttons: All, In Stock, Out of Stock
```

## Steps

1. Open the main page.
2. Locate the **Availability** section.
3. Compare height, spacing, and alignment for the **All**, **In Stock**, and **Out of Stock** buttons.
4. Repeat the review in 1920x1080, 1366x768, and 375x667 resolutions.

## Expected Result

- The three buttons have consistent height, padding, spacing, and visual alignment.
- No button is displaced.
- No button overlaps another element.

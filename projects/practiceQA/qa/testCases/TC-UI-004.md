# Test Case: Consistencia de colores Light/Dark

## General Information

| Field              | Details    |
| ------------------ | ---------- |
| **ID**       | `UI-004` |
| **Module**   | UI         |
| **Priority** | High       |
| **Status**   | Passed     |

## Preconditions

- The application is available at https://fullstack.qa-practice.dev
- The theme selector is visible and enabled.
- The user can access the Home, Login, and Register pages.

## Test Data

```text
Pages: Home, Login, Register
Themes: Light, Dark
Elements: backgrounds, buttons, inputs, texts, links
```

## Steps

1. Open the Home page.
2. Take a screenshot in the initial theme.
3. Activate **Toggle theme**.
4. Review backgrounds, buttons, inputs, texts, and links.
5. Open the Login page and repeat the review.
6. Open the Register page and repeat the review.

## Expected Result

- Colors keep sufficient contrast in both themes.
- Visual styles remain consistent between pages.
- No dark text appears over a dark background.
- No light text appears over a light background.

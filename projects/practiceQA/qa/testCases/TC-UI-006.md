# Test Case: Consistencia visual del formulario Register

## General Information

| Field              | Details    |
| ------------------ | ---------- |
| **ID**       | `UI-007` |
| **Module**   | UI         |
| **Priority** | Medium     |
| **Status**   | Passed     |

## Preconditions

- The application is available at https://fullstack.qa-practice.dev
- The user can access the Register page.
- Browser DevTools are available.

## Test Data

```text
Route: /register
Elements: Full Name, Email, Password, Confirm Password, Create Account button
Viewport: mobile
```

## Steps

1. Open `/register`.
2. Review Full Name, Email, Password, and Confirm Password fields.
3. Compare field widths and spacing.
4. Test the form in a mobile viewport.

## Expected Result

- All inputs keep consistent width, spacing, and alignment.
- The **Create Account** button is clearly identifiable.
- The **Create Account** button is accessible in mobile viewport.
- The form keeps a clear visual hierarchy.

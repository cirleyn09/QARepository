# Test Case: Invalid email

## General Information

| Field              | Details          |
| ------------------ | ---------------- |
| **ID**       | `TC-LOGIN-004` |
| **Module**   | Login            |
| **Priority** | Medium           |
| **Status**   | Passed           |

## Preconditions

- The application is available at https://fullstack.qa-practice.dev
- The user is on the login page

## Test Data

```text
User: invalid-email-format
Password: ValidPassword123!
```

## Steps

1. Open the login page.
2. Enter an invalid email format.
3. Enter a valid password.
4. Click the login button.

## Expected Result

- The form shows an email validation error.
- The login request is not executed.
- The user stays on the login page.
- No authentication occurs.

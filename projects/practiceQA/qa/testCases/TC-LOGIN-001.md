# Test Case: Valid login

## General Information

| Field              | Details          |
| ------------------ | ---------------- |
| **ID**       | `TC-LOGIN-001` |
| **Module**   | Login            |
| **Priority** | High             |
| **Status**   | Passed           |

## Preconditions

- The application is available at https://fullstack.qa-practice.dev
- A valid user account exists in the system
- The user is on the login page

## Test Data

```text
User: valid.user@example.com
Password: ValidPassword123!
```

## Steps

1. Open the login page.
2. Enter a valid email address.
3. Enter the correct password.
4. Click the login button.

## Expected Result

- The user is successfully authenticated.
- The dashboard or home page is displayed.
- The login form is no longer visible.
- The session is created and the user can access protected content.

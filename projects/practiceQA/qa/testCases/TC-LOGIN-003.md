# Test Case: Empty fields

## General Information

| Field              | Details          |
| ------------------ | ---------------- |
| **ID**       | `TC-LOGIN-003` |
| **Module**   | Login            |
| **Priority** | High             |
| **Status**   | Passed           |

## Preconditions

- The application is available at https://fullstack.qa-practice.dev
- The user is on the login page

## Test Data

```text
User: empty
Password: empty
```

## Steps

1. Open the login page.
2. Leave the email field empty.
3. Leave the password field empty.
4. Click the login button.

## Expected Result

- The login request is blocked.
- Validation messages are displayed for required fields.
- The user cannot access the application.
- No session is created.

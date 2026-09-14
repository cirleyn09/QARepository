# Test Case: Login con contraseña incorrecta

## General Information

| Field | Details |
| --- | --- |
| **ID** | `TC-LOGIN-002` |
| **Module** | Login |
| **Priority** | High |
| **Status** | Ready |

## Preconditions
- The application is available at https://fullstack.qa-practice.dev
- A valid account exists
- The user is on the login page

## Test Data

```text
User: valid.user@example.com
Password: WrongPassword123!
```

## Steps
1. Open the login page.
2. Enter a valid email address.
3. Enter an incorrect password.
4. Click the login button.

## Expected Result
- The login action is rejected.
- An error message is displayed indicating incorrect credentials.
- The user remains on the login page.
- No authenticated session is created.

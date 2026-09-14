# Test Case: Bloqueo tras intentos fallidos

## General Information

| Field | Details |
| --- | --- |
| **ID** | `TC-LOGIN-005` |
| **Module** | Login |
| **Priority** | High |
| **Status** | Ready |

## Preconditions
- The application is available at https://fullstack.qa-practice.dev
- A valid user exists
- The user is on the login page

## Test Data

```text
User: valid.user@example.com
Password: WrongPassword123!
```

## Steps
1. Open the login page.
2. Enter the user email.
3. Enter a wrong password.
4. Submit the form several times consecutively.
5. Observe the system behavior after repeated attempts.

## Expected Result
- After multiple failed attempts, the system blocks further logins or displays a lockout message.
- The user receives clear feedback regarding the restriction.
- The account cannot be accessed until the cooldown or lockout period ends.
- The UI remains stable and informative.

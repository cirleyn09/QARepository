
# Test Case: Successful Login

## General Information

| Field              | Details          |
| ------------------ | ---------------- |
| **ID**       | `TC-LOGIN-001` |
| **Module**   | Authentication   |
| **Priority** | High             |
| **Status**   | Passed           |

## Preconditions

* The user must be registered.
* The user account must be active.

## Test Data

```text
User: test
Password: test123
```

## Steps

1. Go to the login screen.
2. Enter a valid email address.
3. Enter a valid password.
4. Click **Log in**.

## Expected Result

The system grants access and redirects the user to the dashboard.

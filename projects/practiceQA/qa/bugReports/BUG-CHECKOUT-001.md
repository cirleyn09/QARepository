# Bug Report

## General Information

* **ID:** BUG-CHECKOUT-001
* **Title:** Error when continuing to payment during checkout
* **Module:** Checkout
* **Environment:** QA
* **Date:** 23/Sep/2026
* **OS:** macOS
* **Browser:** Chrome
* **Severity:** High
* **Priority:** High
* **Status:** Open

---

## Description

When the user fills in the required checkout information and clicks "Continue to payment", an error message is displayed and the checkout flow cannot proceed. This blocks the purchase completion flow and prevents the user from reaching the payment step. This issue is related to test case TC-CHECKOUT-001.

---

## Steps to Reproduce

1. Open the application at https://fullstack.qa-practice.dev.
2. Log in with a valid user.
3. Add at least one product to the cart.
4. Navigate to the checkout flow.
5. Complete all required checkout fields.
6. Click the "Continue to payment" button.
7. Observe the error message.

---

## Expected Result

- The checkout flow should continue normally to the payment step.
- The user should be able to move forward without validation or flow errors.
- A payment method or confirmation screen should be displayed.

---

## Actual Result

After clicking "Continue to payment", an error message is shown and the user is prevented from advancing in the checkout process. The purchase cannot continue and the validation flow fails at this step.

---

## Evidence

```text
Jam: https://jam.dev/c/c23bf3bf-e806-4727-b122-c3742d755b29
```

---

## Additional Notes

- Related test case: TC-CHECKOUT-001
- The defect is reproducible in the checkout flow before payment confirmation.
- This issue prevents the user from completing the purchase and blocks the expected order flow.

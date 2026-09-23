# Bug Report

## General Information

* **ID:** BUG-CART-003
* **Title:** Cart totals do not update after changing product quantity
* **Module:** Cart
* **Environment:** QA
* **Date:** 21/Sep/2026
* **OS:** macOS
* **Browser:** Chrome
* **Severity:** High
* **Priority:** High
* **Status:** Open

---

## Description

When a user updates the quantity of a product in the shopping cart, the displayed item quantity changes, but the subtotal and total amount remain unchanged. This causes pricing errors and prevents the cart from reflecting the actual total after the quantity is modified; however, this issue occurs only in the preview—the values do update correctly once the user clicks "Save."

This issue is related to test case TC-CART-003, which validates the cart quantity update flow.

---

## Steps to Reproduce

1. Open the application at https://fullstack.qa-practice.dev.
2. Log in with a valid user.
3. Add at least one product to the cart.
4. Open the cart.
5. Change the quantity of an item in the cart to a different value.
6. Observe the subtotal and total values.

---

## Expected Result

- The updated quantity should be reflected correctly in the cart.
- The subtotal for the affected product should be recalculated based on the new quantity.
- The total cart amount should update to match the new subtotal.
- All monetary values displayed in the cart should remain consistent.

---

## Actual Result

After changing the quantity in the cart, the item quantity updates, but the subtotal and total do not recalculate. The displayed totals remain stale and do not reflect the new quantity, resulting in incorrect totals in the cart.

---

## Evidence

```text
Jam: (https://jam.dev/c/c37fca36-adee-4168-b59f-083a6840c3a8)
```

---

## Additional Notes

- Related test case: TC-CART-003
- The defect is reproducible in the cart quantity update flow.
- This issue affects the accuracy of the final amount shown to the user and may lead to incorrect checkout totals.

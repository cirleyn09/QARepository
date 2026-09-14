
# Final QA Report

## Project Information

| Field                             | Details      |
| --------------------------------- | ------------ |
| **Project**                 | Test         |
| **Environment**             | QA / Staging |
| **Testing Start Date**      | 09/07/2026   |
| **Testing Completion Date** | 09/10/2026   |
| **QA Owner**                | [QA Name]    |

---

## 1. Testing Objective

Validate the quality, stability, and expected behavior of the application before its release to production.

The QA cycle included testing of the defined functional requirements, critical user flows, regression scenarios, and identified defects.

---

## 2. Testing Scope

During this QA cycle, the following functionalities were validated:

* User registration.
* User login.

### Out of Scope

The following tests were not performed during this QA cycle:

* Load and stress testing.
* Penetration testing.

---

## 3. Execution Summary

| Metric                        | Result |
| ----------------------------- | -----: |
| **Planned Test Cases**  |     50 |
| **Executed Test Cases** |     50 |
| **Passed Test Cases**   |     40 |
| **Failed Test Cases**   |     10 |
| **Blocked Test Cases**  |      0 |
| **Not Executed**        |      0 |
| **Execution Rate**      |   100% |
| **Pass Rate**           |    80% |

---

## 4. Defects Found

During the QA cycle, defects were identified and classified according to their severity.

| Severity             |        Found |       Fixed |     Pending |
| -------------------- | -----------: | ----------: | ----------: |
| 🔴**Critical** |            1 |           1 |           0 |
| 🟠**High**     |            3 |           3 |           0 |
| 🟡**Medium**   |            4 |           2 |           2 |
| 🟢**Low**      |            3 |           2 |           1 |
| **Total**      | **11** | **8** | **3** |

All critical and high-severity defects were fixed and subsequently validated through retesting.

---

## 5. Pending Bugs

### BUG-142 – Duplicate Notification Sent to Resident

| Field              | Details       |
| ------------------ | ------------- |
| **Severity** | Medium        |
| **Module**   | Notifications |
| **Status**   | Pending       |

### Description

Under certain conditions, when the security guard scans the QR code while the network connection is slow, the resident may receive two entry notifications.

### Impact

This issue does not prevent access or affect the visitor's entry record.

### Decision

This issue is accepted as a known issue for this release, and its resolution will be scheduled for the next sprint.

---

## 6. Regression Validation

Regression testing was performed on the application's main critical flows.

### Validated Flows

* Login.

### Result

✅ **Regression testing passed successfully.**

---

## 7. QA Exit Criteria

| Criteria                                | Result |
| --------------------------------------- | ------ |
| 100% of critical test cases executed    | ✅ Met |
| No open critical bugs                   | ✅ Met |
| No open high-severity bugs              | ✅ Met |
| Critical flow regression testing passed | ✅ Met |

---

## 8. Approval

| Role                    | Approval                   |
| ----------------------- | -------------------------- |
| **QA**            | __________________________ |
| **Development**   | __________________________ |
| **Product Owner** | __________________________ |
| **Release Date**  | __________________________ |

---

## Final Release Status

### 🟢 GO – Approved for Production with Observations

The application meets the defined QA exit criteria and is approved for production deployment.

Remaining medium- and low-severity defects are considered non-blocking and have been documented for resolution in future development cycles.

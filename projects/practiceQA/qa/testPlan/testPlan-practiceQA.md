# Test Plan

## 1. Introduction

This QA test plan covers the Tech Store application used for practice automation and e-commerce flows. The objective is to validate that users can view products, filter and sort the catalog, inspect product details, manage cart status, and authenticate correctly without critical defects affecting the user journey.

## 2. Test Scope

### In scope

- Landing page and catalog loading
- Product list rendering
- Category filters
- Rating and price filters
- Product sorting
- Out-of-stock and low-stock states
- Product detail page
- Add to cart behavior
- Cart updates and UX feedback
- Login and logout flow
- Desktop browser compatibility
- Regression checks for core user flows

### Out of scope

- Real payment processing
- Inventory management backend operations
- Payment gateway integrations
- Load testing or stress testing
- Full accessibility audit
- Mobile-only validation beyond desktop functional checks

## 3. Test Strategy

The project will use a combination of:

- Smoke tests for critical app availability and page rendering
- Functional tests for each user action
- Exploratory testing for usability and defect discovery
- Regression testing after functional changes
- Browser compatibility validation in Chromium, Firefox, and WebKit

## 4. Test Environment

- Application: https://fullstack.qa-practice.dev
- Browser matrix: Chromium, Firefox, WebKit

## 5. Test Data

The application exposes a catalog of products with the following characteristics:

- 18 products
- Categories: Electronics, Accessories, Gaming, Audio, Storage
- Inventory states: In Stock, Out of Stock, Low stock
- Price range: approximately $29 to $250
- Rating values between 4.1 and 4.9
- Auth scenarios using valid and invalid user credentials

## 6. Risks and Dependencies

- Product availability can change dynamically
- Test selectors may change if the UI is updated
- Frontend flows may depend on environment setup and credentials
- Browser differences may affect layout or interaction timing
- Test execution requires stable network and configured environment values

## 7. Test Cases by Priority

### High Priority

- Homepage loads successfully
- Catalog displays all products correctly
- Filters by category work properly
- Sorting by price works correctly
- Product details open and display accurate information
- Add to cart updates item count and cart state
- Login with valid credentials succeeds
- Login with invalid credentials shows error state
- Out-of-stock items are handled correctly

### Medium Priority

- Rating filter returns expected products
- Price range filter works properly
- Product count updates when filters change
- Cart quantity updates for multiple items
- User can navigate between product pages and catalog
- UI remains stable on desktop browser variations

### Low Priority

- Minor visual inconsistencies
- Non-critical messaging polish
- Minor UX observations not affecting core flow

## 8. Entry and Exit Criteria

### Entry criteria

- Environment available and reachable
- Test data available
- Required credentials configured
- Dependencies installed and Playwright configured

### Exit criteria

- Critical and high priority test cases pass
- Defects are either fixed or documented with priority
- Test evidence is saved
- Final QA summary is generated

## 9. Deliverables

- Test plan
- Test case traceability
- Playwright execution report
- Evidence artifacts: screenshots, traces, videos
- Defect log
- Final QA report

## 10. Schedule

- Preparation: environment setup and planning
- Execution: smoke, functional, and regression validation
- Follow-up: retest fixes and final sign-off

## 11. Summary

This testing plan focuses on validating the key flows of the QA Practice e-commerce application with emphasis on functionality, cart behavior, product visibility, and authentication. The goal is to ensure product quality for the core user journey while maintaining efficient and repeatable automation coverage.

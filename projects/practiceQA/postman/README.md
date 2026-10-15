# API Testing with Postman

The `PracticeQA - API Testing` collection validates PracticeQA REST endpoints using Postman requests and test scripts.

## Files

- `collections/PracticeQA - API Testing.postman_collection.json`: collection of requests and validations.
- `environments/PracticeQA Environment.postman_environment.json`: environment containing the `base-url` variable.

## Coverage

- User registration: successful creation, duplicate email, invalid email format, and missing required fields.
- Login: successful authentication, empty credentials, incorrect password, and incorrect email.
- Logout: session termination and validations for missing or invalid tokens.
- Products: filtering by category.
- Automated validations of HTTP status codes, response format and content, user data, and tokens.

Registration generates a unique name and email for each run. Login stores the token as a collection variable for authenticated requests.

## Running in Postman

1. Import the `collections/PracticeQA - API Testing.postman_collection.json` collection.
2. Import `environments/PracticeQA Environment.postman_environment.json` and select the `PracticeQA Environment` environment.
3. Confirm that `base-url` points to the API host without the protocol. The included value is `fullstack.qa-practice.dev`.
4. Run an individual request or the entire collection using Collection Runner.

## Running with Newman

From the repository root, install the dependencies if you have not already done so, then run:

```bash
npm install
npm run test:postman
```

The project script runs Newman with this collection and environment, using the `htmlextra` reporter.

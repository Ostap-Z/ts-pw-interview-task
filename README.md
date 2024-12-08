# TypeScript Playwright Project

This project is a skeleton for end-to-end and API tests using TypeScript and Playwright.

It is designed for an interview task and includes a basic setup for the tests and tools to run them.
The project is configured to run tests for both the API and the UI.

## Continuous Integration (CI)

This project uses GitHub Actions for Continuous Integration. The workflow is configured to:

- Perform static code checks (linting and type checking)
- Run Playwright API and UI tests
- Generate and publish test reports to GitHub Pages

### Static Checks Job

Before running tests, the CI pipeline performs comprehensive static code analysis:

- **Linting**: Checks code quality and enforces coding standards using ESLint
- **Type Checking**: Ensures type safety using TypeScript compiler
- **Fail-Fast Mechanism**: Stops the workflow if any checks fail

### Workflow Triggers

- **Pull Request**: Automatically triggered on PRs to `main` branch
- **Manual Dispatch**: Can be manually triggered from [GitHub Actions](https://github.com/Ostap-Z/ts-pw-interview-task/actions)

### Test Report

After each workflow run:

- Test reports are generated using Playwright's HTML reporter
- You can access the latest test report from the [GitHub Pages](https://ostap-z.github.io/ts-pw-interview-task/)

## Project Setup

### Prerequisites

- Node.js (v20.18.0)
- npm (v8 or later)

### Installation

1. Clone the repository
2. Run `npm install`
3. Run `npm run prepare` to install Playwright browsers
4. Copy `.env.example` to `.env` and update the values:

   ```bash
   cp .env.example .env
   ```

### Environment Variables

The project uses the following environment variables:

- `API_BASE_URL`: Base URL for API tests (default: <http://localhost:3000/api>)
- `UI_BASE_URL`: Base URL for UI tests (default: <http://localhost:3000>)

### Running Tests

Available test commands:

- `npm test` - Run all tests (API + UI) across all browsers
- `npm run test:e2e` - Run UI tests in all browsers (Chrome, Firefox, Safari)
- `npm run test:api` - Run API tests only
- `npm run test:chrome` - Run UI tests in Chrome only
- `npm run test:firefox` - Run UI tests in Firefox only
- `npm run test:safari` - Run UI tests in Safari only
- `npm run test:debug` - Run tests in debug mode
- `npm run test:report` - Generate and show test report

### Project Structure

- `src/`: Application source code
- `tests/e2e/`: End-to-end test files
- `tests/api/`: API test files
- `playwright.config.ts`: Playwright configuration
- `tsconfig.json`: TypeScript configuration

### Development

- Lint code: `npm run lint`
- Fix linting issues: `npm run lint:fix`

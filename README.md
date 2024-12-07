# TypeScript Playwright Project

This project is a skeleton for end-to-end and API tests using TypeScript and Playwright.

It is designed for an interview task and includes a basic setup for the tests and tools to run them.
The project is configured to run tests for both the API and the UI.

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

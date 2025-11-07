# Testing guide for shell-app

This repository includes unit, integration and E2E testing scaffolds.

Unit & integration (Vitest + Testing Library + MSW)

- Run all unit tests:

```powershell
npm run test
```

- Run in watch mode:

```powershell
npm run test:watch
```

- Run coverage report:

```powershell
npm run test:coverage
```

Vitest configuration: `vitest.config.ts`.
MSW handlers are in `src/test/msw/` and started via `src/test/setup.ts`.

Example tests:
- `src/pages/__tests__/Dashboard.test.tsx`
- `src/pages/__tests__/Login.test.tsx`


E2E (Cypress)

- Open Cypress UI:

```powershell
npm run e2e:cypress
```

Cypress tests are under `cypress/e2e/`.


E2E (Playwright)

- Run Playwright tests:

```powershell
npm run e2e:playwright
```

Playwright tests are under `tests/playwright/`.


Notes & troubleshooting

- These tests mock `@eduable/*` modules in the unit tests. If you have local packages for those, consider updating `vitest` alias or creating improved mocks.
- If TypeScript type errors appear while running `npm run build`, vitest will still run tests because Vite's transformer is used (no type-check by default). To enable type-checking for tests, add a separate type-check step.
- To integrate tests in CI, run `npm ci` then `npm run test:coverage` and optionally `npm run e2e:playwright` with a running dev server.

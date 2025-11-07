import '@testing-library/jest-dom';
import { afterEach, beforeAll, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import { server } from './msw/server';

// Start MSW before all tests and close afterwards
beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
afterAll(() => server.close());

// Automatically clean up after each test
afterEach(() => {
  cleanup();
  server.resetHandlers();
});
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

// Simple MSW-like mock using fetch mocking
beforeEach(() => {
  // reset localStorage
  localStorage.clear();
  // mock fetch for login
  (global as any).fetch = vi.fn((url: string, opts: any) => {
    if (url.endsWith('/auth/login')) {
      const body = JSON.parse(opts.body);
      if (body.email === 'test@example.com' && body.password === 'password123') {
        return Promise.resolve({ ok: true, json: () => Promise.resolve({ access_token: 'tok', user: { id: '1', name: 'Test User' } }) });
      }
      return Promise.resolve({ ok: false });
    }
    return Promise.resolve({ ok: false });
  });
});

describe('Login', () => {
  it('renders form and logs in with correct creds', async () => {
    render(<Login />);
    await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'password123');
    await userEvent.click(screen.getByRole('button', { name: /sign in/i }));

    await waitFor(() => {
      expect(localStorage.getItem('access_token')).toBe('tok');
    });
  });

  it('shows error for wrong creds', async () => {
    render(<Login />);
    await userEvent.type(screen.getByLabelText(/email/i), 'bad@example.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'bad');
    await userEvent.click(screen.getByRole('button', { name: /sign in/i }));

    await waitFor(() => {
      expect(screen.getByText(/login failed/i) || screen.getByText(/Signing in.../)).toBeDefined();
    });
  });
});

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Dashboard from './Dashboard';

beforeEach(() => {
  localStorage.setItem('access_token', 'tok');
  (global as any).fetch = vi.fn((url: string) => {
    if (url.endsWith('/auth/me')) return Promise.resolve({ ok: true, json: () => Promise.resolve({ id: '1', name: 'Test User' }) });
    if (url.endsWith('/courses')) return Promise.resolve({ ok: true, json: () => Promise.resolve([{ id: 'c1', title: 'Physics' }]) });
    return Promise.resolve({ ok: false });
  });
});

describe('Dashboard', () => {
  it('loads user and courses', async () => {
    render(<Dashboard />);
    await waitFor(() => expect(screen.getByText(/welcome back/i)).toBeInTheDocument());
    expect(screen.getByText('Physics')).toBeInTheDocument();
  });
});

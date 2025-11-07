import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

// Mock shared-components and shared-utils
vi.mock('@eduable/shared-components', () => ({
  useAuth: () => ({ login: vi.fn(), logout: vi.fn() }),
}));

vi.mock('@eduable/shared-utils', () => ({
  FormValidators: {
    validateEmail: (v: any) => (!!v && v.includes('@')) || 'Invalid email',
    validateRequired: (v: any) => (!!v) || 'Required',
  },
}));

import Login from '../Login';

describe('Login', () => {
  it('renders login form and allows input', () => {
    render(<Login />);
    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);

    fireEvent.change(email, { target: { value: 'test@example.com' } });
    fireEvent.change(password, { target: { value: 'secret' } });

    expect((email as HTMLInputElement).value).toBe('test@example.com');
    expect((password as HTMLInputElement).value).toBe('secret');
  });
});

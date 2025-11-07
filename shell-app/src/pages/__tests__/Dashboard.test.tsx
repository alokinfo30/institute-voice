import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';

// Mock shared-components used by Dashboard
vi.mock('@eduable/shared-components', () => ({
  PageHeader: ({ title }: any) => <div data-testid="page-header">{title}</div>,
  useAuth: () => ({ user: { name: 'Test Student' } }),
}));

vi.mock('@mui/icons-material', () => ({
  School: () => <span data-testid="icon-school">S</span>,
  VideoLibrary: () => <span data-testid="icon-video">V</span>,
  LiveHelp: () => <span data-testid="icon-doubt">D</span>,
  TrendingUp: () => <span data-testid="icon-trend">T</span>,
  Analytics: () => <span>A</span>,
  People: () => <span>P</span>,
}));

// Import after mocks
import Dashboard from '../Dashboard';

describe('Dashboard', () => {
  it('renders page header and stat cards', () => {
    render(<Dashboard />);
    expect(screen.getByTestId('page-header')).toHaveTextContent('Welcome back, Test Student!');
    // check that stat card values appear
    expect(screen.getByText('12')).toBeInTheDocument();
    expect(screen.getByText('48')).toBeInTheDocument();
    expect(screen.getByText('23')).toBeInTheDocument();
    expect(screen.getByText('87%')).toBeInTheDocument();
  });
});

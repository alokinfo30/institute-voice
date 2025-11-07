import { describe, it, expect, beforeEach } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../test/utils';
import Dashboard from './Dashboard';

describe('Dashboard Component', () => {
  beforeEach(() => {
    renderWithProviders(<Dashboard />);
  });

  it('should render dashboard with stats', async () => {
    await waitFor(() => {
      expect(screen.getByText('12')).toBeInTheDocument(); // Courses enrolled
      expect(screen.getByText('48')).toBeInTheDocument(); // Videos watched
      expect(screen.getByText('23')).toBeInTheDocument(); // Doubts resolved
      expect(screen.getByText('87%')).toBeInTheDocument(); // Performance
    });
  });

  it('should display recent activities', async () => {
    await waitFor(() => {
      expect(screen.getByText('Completed Physics Chapter')).toBeInTheDocument();
      expect(screen.getByText('Submitted Math Assignment')).toBeInTheDocument();
      expect(screen.getByText('Asked doubt in Chemistry')).toBeInTheDocument();
      expect(screen.getByText('Watched Calculus video')).toBeInTheDocument();
    });
  });

  it('should display quick actions', () => {
    expect(screen.getByText('Continue Learning')).toBeInTheDocument();
    expect(screen.getByText('Ask a Doubt')).toBeInTheDocument();
    expect(screen.getByText('View Analytics')).toBeInTheDocument();
    expect(screen.getByText('Study Groups')).toBeInTheDocument();
  });

  it('should show welcome message with user name', async () => {
    await waitFor(() => {
      expect(screen.getByText(/welcome back, test user/i)).toBeInTheDocument();
    });
  });
});
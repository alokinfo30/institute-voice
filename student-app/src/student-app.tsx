import React from 'react';
import ReactDOM from 'react-dom';
// @ts-ignore - single-spa-react types will be resolved at runtime
import singleSpaReact from 'single-spa-react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider, appTheme } from '@eduable/shared-components';
import StudentApp from './StudentApp';

// Define types for error boundary
type ErrorBoundaryInfo = {
  componentStack: string;
  message?: string;
};

type ErrorBoundaryProps = {
  [key: string]: unknown;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

// Single SPA lifecycles
const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: () => (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>
            <StudentApp />
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  ),
  errorBoundary(err: Error, info: ErrorBoundaryInfo, props: ErrorBoundaryProps) {
    console.error('Student App Error:', err, info, props);
    return React.createElement('div', null, 'Error in Student App');
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

// Default export for direct import in shell app
export default () => (
  <ThemeProvider theme={appTheme}>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <StudentApp />
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  </ThemeProvider>
);
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider, appTheme } from '@eduable/shared-components';
import TeacherApp from './TeacherApp';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: () => (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>
            <TeacherApp />
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  ),
  errorBoundary: (err, info, props) => {
    console.error('Teacher App Error:', err, info, props);
    return React.createElement('div', null, 'Error in Teacher App');
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
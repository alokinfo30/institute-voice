import React from 'react';

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;
  public readonly context?: any;

  constructor(
    message: string,
    statusCode: number = 500,
    isOperational: boolean = true,
    context?: any
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.context = context;

    Error.captureStackTrace(this, this.constructor as any);
  }
}

export class ValidationError extends AppError {
  constructor(message: string, context?: any) {
    super(message, 400, true, context);
    this.name = 'ValidationError';
  }
}

export class AuthenticationError extends AppError {
  constructor(message: string = 'Authentication required') {
    super(message, 401, true);
    this.name = 'AuthenticationError';
  }
}

export class AuthorizationError extends AppError {
  constructor(message: string = 'Insufficient permissions') {
    super(message, 403, true);
    this.name = 'AuthorizationError';
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string = 'Resource') {
    super(`${resource} not found`, 404, true);
    this.name = 'NotFoundError';
  }
}

export class RateLimitError extends AppError {
  constructor(message: string = 'Rate limit exceeded') {
    super(message, 429, true);
    this.name = 'RateLimitError';
  }
}

// Global error handler
export const errorHandler = {
  handleError(error: Error) {
    // Log error with context
    this.logError(error as any);

    // Notify monitoring service
    this.notifyMonitoring(error);

    // Return user-friendly error response
    return this.getUserFriendlyError(error);
  },

  logError(error: any) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      name: error.name,
      message: error.message,
      stack: error.stack,
      ...(error instanceof AppError && { context: error.context }),
    };

    console.error('🚨 Application Error:', logEntry);

    // In production, send to logging service
    if (process.env.NODE_ENV === 'production') {
      this.sendToLoggingService(logEntry);
    }
  },

  notifyMonitoring(error: Error) {
    // Integrate with monitoring services like Sentry, DataDog, etc.
    if (process.env.MONITORING_DSN) {
      // Implementation for specific monitoring service
      console.log('📊 Sending to monitoring service:', error.message);
    }
  },

  getUserFriendlyError(error: Error) {
    if (error instanceof AppError) {
      return {
        error: true,
        message: error.message,
        code: error.statusCode,
        ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
      };
    }

    // Hide internal error details in production
    if (process.env.NODE_ENV === 'production') {
      return {
        error: true,
        message: 'Something went wrong',
        code: 500,
      };
    }

    return {
      error: true,
      message: error.message,
      code: 500,
      stack: (error as any).stack,
    };
  },

  sendToLoggingService(logEntry: any) {
    // Implementation for your logging service (ELK, Splunk, etc.)
    if (process.env.LOGGING_SERVICE_URL) {
      try {
        fetch(process.env.LOGGING_SERVICE_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(logEntry),
        }).catch(console.error);
      } catch (e) {
        console.error('Failed to send log', e);
      }
    }
  },
};

// Error boundary for React components
export const withErrorBoundary = (Component: React.ComponentType<any>) => {
  return class ErrorBoundary extends React.Component<any, { hasError: boolean; error?: Error }> {
    constructor(props: any) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
      return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      errorHandler.logError(error);
      console.error('Error Info:', errorInfo);
    }

    render() {
      if (this.state.hasError) {
        return (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Something went wrong</h2>
            <p>We're sorry for the inconvenience. Please try refreshing the page.</p>
            {process.env.NODE_ENV === 'development' && (
              <details style={{ textAlign: 'left', marginTop: '20px' }}>
                <summary>Error Details (Development)</summary>
                <pre>{this.state.error?.stack}</pre>
              </details>
            )}
          </div>
        );
      }

      return <Component {...(this.props as any)} />;
    }
  };
};

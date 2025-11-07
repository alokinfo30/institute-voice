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

    Error.captureStackTrace(this, this.constructor);
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
    this.logError(error);

    // Notify monitoring service
    this.notifyMonitoring(error);

    // Return user-friendly error response
    return this.getUserFriendlyError(error);
  },

  logError(error: Error) {
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
      stack: error.stack,
    };
  },

  sendToLoggingService(logEntry: any) {
    // Implementation for your logging service (ELK, Splunk, etc.)
    fetch(process.env.LOGGING_SERVICE_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(logEntry),
    }).catch(console.error);
  },
};

// Error boundary for React components
// The React ErrorBoundary implementation lives in `error-handler.impl.tsx`.
// Re-export the boundary so callers can import from the same module.
export { withErrorBoundary } from './error-handler.impl';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
export class AppError extends Error {
    constructor(message, statusCode = 500, isOperational = true, context) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        this.context = context;
        Error.captureStackTrace(this, this.constructor);
    }
}
export class ValidationError extends AppError {
    constructor(message, context) {
        super(message, 400, true, context);
        this.name = 'ValidationError';
    }
}
export class AuthenticationError extends AppError {
    constructor(message = 'Authentication required') {
        super(message, 401, true);
        this.name = 'AuthenticationError';
    }
}
export class AuthorizationError extends AppError {
    constructor(message = 'Insufficient permissions') {
        super(message, 403, true);
        this.name = 'AuthorizationError';
    }
}
export class NotFoundError extends AppError {
    constructor(resource = 'Resource') {
        super(`${resource} not found`, 404, true);
        this.name = 'NotFoundError';
    }
}
export class RateLimitError extends AppError {
    constructor(message = 'Rate limit exceeded') {
        super(message, 429, true);
        this.name = 'RateLimitError';
    }
}
// Global error handler
export const errorHandler = {
    handleError(error) {
        // Log error with context
        this.logError(error);
        // Notify monitoring service
        this.notifyMonitoring(error);
        // Return user-friendly error response
        return this.getUserFriendlyError(error);
    },
    logError(error) {
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
    notifyMonitoring(error) {
        // Integrate with monitoring services like Sentry, DataDog, etc.
        if (process.env.MONITORING_DSN) {
            // Implementation for specific monitoring service
            console.log('📊 Sending to monitoring service:', error.message);
        }
    },
    getUserFriendlyError(error) {
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
    sendToLoggingService(logEntry) {
        // Implementation for your logging service (ELK, Splunk, etc.)
        if (process.env.LOGGING_SERVICE_URL) {
            try {
                fetch(process.env.LOGGING_SERVICE_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(logEntry),
                }).catch(console.error);
            }
            catch (e) {
                console.error('Failed to send log', e);
            }
        }
    },
};
// Error boundary for React components
export const withErrorBoundary = (Component) => {
    return class ErrorBoundary extends React.Component {
        constructor(props) {
            super(props);
            this.state = { hasError: false };
        }
        static getDerivedStateFromError(error) {
            return { hasError: true, error };
        }
        componentDidCatch(error, errorInfo) {
            errorHandler.logError(error);
            console.error('Error Info:', errorInfo);
        }
        render() {
            if (this.state.hasError) {
                return (_jsxs("div", { style: { padding: '20px', textAlign: 'center' }, children: [_jsx("h2", { children: "Something went wrong" }), _jsx("p", { children: "We're sorry for the inconvenience. Please try refreshing the page." }), process.env.NODE_ENV === 'development' && (_jsxs("details", { style: { textAlign: 'left', marginTop: '20px' }, children: [_jsx("summary", { children: "Error Details (Development)" }), _jsx("pre", { children: this.state.error?.stack })] }))] }));
            }
            return _jsx(Component, { ...this.props });
        }
    };
};

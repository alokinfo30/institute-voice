export declare class AppError extends Error {
    readonly statusCode: number;
    readonly isOperational: boolean;
    readonly context?: any;
    constructor(message: string, statusCode?: number, isOperational?: boolean, context?: any);
}
export declare class ValidationError extends AppError {
    constructor(message: string, context?: any);
}
export declare class AuthenticationError extends AppError {
    constructor(message?: string);
}
export declare class AuthorizationError extends AppError {
    constructor(message?: string);
}
export declare class NotFoundError extends AppError {
    constructor(resource?: string);
}
export declare class RateLimitError extends AppError {
    constructor(message?: string);
}
export declare const errorHandler: {
    handleError(error: Error): {
        stack?: string | undefined;
        error: boolean;
        message: string;
        code: number;
    };
    logError(error: Error): void;
    notifyMonitoring(error: Error): void;
    getUserFriendlyError(error: Error): {
        stack?: string | undefined;
        error: boolean;
        message: string;
        code: number;
    };
    sendToLoggingService(logEntry: any): void;
};
export { withErrorBoundary } from './error-handler.impl';

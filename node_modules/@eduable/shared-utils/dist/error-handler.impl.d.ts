import React from 'react';
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
    } | {
        error: boolean;
        message: string;
        code: number;
        stack: any;
    };
    logError(error: any): void;
    notifyMonitoring(error: Error): void;
    getUserFriendlyError(error: Error): {
        stack?: string | undefined;
        error: boolean;
        message: string;
        code: number;
    } | {
        error: boolean;
        message: string;
        code: number;
        stack: any;
    };
    sendToLoggingService(logEntry: any): void;
};
export declare const withErrorBoundary: (Component: React.ComponentType<any>) => {
    new (props: any): {
        componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
        render(): import("react/jsx-runtime").JSX.Element;
        context: unknown;
        setState<K extends "hasError" | "error">(state: {
            hasError: boolean;
            error?: Error;
        } | ((prevState: Readonly<{
            hasError: boolean;
            error?: Error;
        }>, props: Readonly<any>) => {
            hasError: boolean;
            error?: Error;
        } | Pick<{
            hasError: boolean;
            error?: Error;
        }, K> | null) | Pick<{
            hasError: boolean;
            error?: Error;
        }, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<any>;
        state: Readonly<{
            hasError: boolean;
            error?: Error;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<any>, nextState: Readonly<{
            hasError: boolean;
            error?: Error;
        }>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<any>, prevState: Readonly<{
            hasError: boolean;
            error?: Error;
        }>): any;
        componentDidUpdate?(prevProps: Readonly<any>, prevState: Readonly<{
            hasError: boolean;
            error?: Error;
        }>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<{
            hasError: boolean;
            error?: Error;
        }>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<{
            hasError: boolean;
            error?: Error;
        }>, nextContext: any): void;
    };
    getDerivedStateFromError(error: Error): {
        hasError: boolean;
        error: Error;
    };
    contextType?: React.Context<any> | undefined;
};

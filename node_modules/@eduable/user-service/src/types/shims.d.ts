// Local shims to quiet TypeScript module resolution diagnostics in the editor/CI
// These are temporary; prefer installing the real packages and their type
// declarations or aligning the project's tsconfig/tsserver settings.
declare module '@nestjs/common' {
	// Minimal runtime/type stubs used by this service. Replace with real types
	// from @nestjs when available.
	export function Injectable(): ClassDecorator;
	export function Controller(path?: string): ClassDecorator;
	export function Module(metadata?: any): ClassDecorator;

	export class HttpException extends Error {
		constructor(message?: string, status?: number);
	}

	export class UnauthorizedException extends HttpException {
		constructor(message?: string);
	}
	export class ConflictException extends HttpException {
		constructor(message?: string);
	}
	export class NotFoundException extends HttpException {
		constructor(message?: string);
	}
}

declare module '@nestjs/jwt' {
	export class JwtService {
		sign(payload: any): string;
		verify<T = any>(token: string): T;
	}
}

declare module 'bcryptjs' {
	export function compare(data: string, encrypted: string): Promise<boolean>;
	export function hash(data: string, saltOrRounds: number): Promise<string>;
}

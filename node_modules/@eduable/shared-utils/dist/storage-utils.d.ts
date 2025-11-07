export declare class StorageUtils {
    static set(key: string, value: any): void;
    static get<T>(key: string, defaultValue?: T | null): T | null;
    static remove(key: string): void;
    static clear(): void;
    static setAuthToken(token: string): void;
    static getAuthToken(): string | null;
    static removeAuthToken(): void;
    static setUser(user: any): void;
    static getUser<T>(): T | null;
    static clearAuth(): void;
}

export class StorageUtils {
  static set(key: string, value: any): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error saving to localStorage key "${key}":`, error);
    }
  }

  static get<T>(key: string, defaultValue: T | null = null): T | null {
    try {
      const item = localStorage.getItem(key);
      if (item === null) return defaultValue;
      return JSON.parse(item);
    } catch (error) {
      console.error(`Error reading from localStorage key "${key}":`, error);
      return defaultValue;
    }
  }

  static remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing from localStorage key "${key}":`, error);
    }
  }

  static clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }

  // Auth specific methods
  static setAuthToken(token: string): void {
    this.set('auth_token', token);
  }

  static getAuthToken(): string | null {
    return this.get<string>('auth_token');
  }

  static removeAuthToken(): void {
    this.remove('auth_token');
  }

  static setUser(user: any): void {
    this.set('user_data', user);
  }

  static getUser<T>(): T | null {
    return this.get<T>('user_data');
  }

  static clearAuth(): void {
    this.removeAuthToken();
    this.remove('user_data');
  }
}
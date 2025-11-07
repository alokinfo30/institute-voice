export class StorageUtils {
    static set(key, value) {
        try {
            const serializedValue = JSON.stringify(value);
            localStorage.setItem(key, serializedValue);
        }
        catch (error) {
            console.error(`Error saving to localStorage key "${key}":`, error);
        }
    }
    static get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            if (item === null)
                return defaultValue;
            return JSON.parse(item);
        }
        catch (error) {
            console.error(`Error reading from localStorage key "${key}":`, error);
            return defaultValue;
        }
    }
    static remove(key) {
        try {
            localStorage.removeItem(key);
        }
        catch (error) {
            console.error(`Error removing from localStorage key "${key}":`, error);
        }
    }
    static clear() {
        try {
            localStorage.clear();
        }
        catch (error) {
            console.error('Error clearing localStorage:', error);
        }
    }
    // Auth specific methods
    static setAuthToken(token) {
        this.set('auth_token', token);
    }
    static getAuthToken() {
        return this.get('auth_token');
    }
    static removeAuthToken() {
        this.remove('auth_token');
    }
    static setUser(user) {
        this.set('user_data', user);
    }
    static getUser() {
        return this.get('user_data');
    }
    static clearAuth() {
        this.removeAuthToken();
        this.remove('user_data');
    }
}

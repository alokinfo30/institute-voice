import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect, createContext, useContext } from 'react';
import { apiClient, StorageUtils } from '@eduable/shared-utils';
const AuthContext = createContext(undefined);
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const initAuth = async () => {
            const token = StorageUtils.getAuthToken();
            const savedUser = StorageUtils.get('user_data');
            if (token && savedUser) {
                try {
                    // Verify token is still valid
                    const userData = await apiClient.get('/auth/me');
                    setUser(userData);
                    StorageUtils.setUser(userData);
                }
                catch (error) {
                    // Token is invalid
                    StorageUtils.clearAuth();
                }
            }
            setIsLoading(false);
        };
        initAuth();
    }, []);
    const login = async (email, password) => {
        try {
            setIsLoading(true);
            const response = await apiClient.post('/auth/login', {
                email,
                password,
            });
            StorageUtils.setAuthToken(response.access_token);
            StorageUtils.setUser(response.user);
            setUser(response.user);
        }
        catch (error) {
            throw new Error('Login failed. Please check your credentials.');
        }
        finally {
            setIsLoading(false);
        }
    };
    const logout = () => {
        StorageUtils.clearAuth();
        setUser(null);
        window.location.href = '/login';
    };
    const updateUser = (updatedUser) => {
        if (user) {
            const newUser = { ...user, ...updatedUser };
            setUser(newUser);
            StorageUtils.setUser(newUser);
        }
    };
    const value = {
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout,
        updateUser,
    };
    return _jsx(AuthContext.Provider, { value: value, children: children });
};

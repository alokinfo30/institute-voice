import { ReactNode } from 'react';
interface User {
    id: string;
    email: string;
    name: string;
    role: string;
    instituteId: string;
    avatar?: string;
}
interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    updateUser: (user: Partial<User>) => void;
}
export declare const useAuth: () => AuthContextType;
interface AuthProviderProps {
    children: ReactNode;
}
export declare const AuthProvider: React.FC<AuthProviderProps>;
export {};

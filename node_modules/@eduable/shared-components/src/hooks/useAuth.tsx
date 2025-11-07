import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { apiClient, StorageUtils } from '@eduable/shared-utils';

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

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const token = StorageUtils.getAuthToken();
      const savedUser = StorageUtils.get<User>('user_data');

      if (token && savedUser) {
        try {
          // Verify token is still valid
          const userData = await apiClient.get<User>('/auth/me');
          setUser(userData);
          StorageUtils.setUser(userData);
        } catch (error) {
          // Token is invalid
          StorageUtils.clearAuth();
        }
      }

      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await apiClient.post<{ access_token: string; user: User }>('/auth/login', {
        email,
        password,
      });

      StorageUtils.setAuthToken(response.access_token);
      StorageUtils.setUser(response.user);
      setUser(response.user);
    } catch (error) {
      throw new Error('Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = (): void => {
    StorageUtils.clearAuth();
    setUser(null);
    window.location.href = '/login';
  };

  const updateUser = (updatedUser: Partial<User>): void => {
    if (user) {
      const newUser = { ...user, ...updatedUser };
      setUser(newUser);
      StorageUtils.setUser(newUser);
    }
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

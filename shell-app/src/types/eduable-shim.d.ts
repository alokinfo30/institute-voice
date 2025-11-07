// Minimal declarations for local @eduable/* modules used by the app
declare module '@eduable/shared-components' {
  import { ComponentType } from 'react';
  export const PageHeader: ComponentType<any>;
  export const LoadingSpinner: ComponentType<any>;
  export const AuthProvider: ComponentType<any>;
  export const ErrorBoundary: ComponentType<any>;
  export const appTheme: any;
  export function useAuth(): any;
  export default {} as any;
}

declare module '@eduable/shared-utils' {
  export const FormValidators: any;
  export const StorageUtils: any;
  export const apiClient: any;
  export default {} as any;
}

declare module '@eduable/student-app';
declare module '@eduable/teacher-app';
declare module '@eduable/admin-app';

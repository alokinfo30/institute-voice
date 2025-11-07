export interface ValidationResult {
    isValid: boolean;
    errors: Record<string, string>;
}
export declare class FormValidators {
    static validateEmail(email: string): string | null;
    static validatePassword(password: string): string | null;
    static validateName(name: string): string | null;
    static validateRequired(value: string, fieldName: string): string | null;
    static validatePhone(phone: string): string | null;
}
export declare const validateForm: (fields: Record<string, any>, rules: Record<string, (value: any) => string | null>) => ValidationResult;

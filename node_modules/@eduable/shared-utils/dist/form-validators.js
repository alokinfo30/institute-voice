export class FormValidators {
    static validateEmail(email) {
        if (!email)
            return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email))
            return 'Please enter a valid email address';
        return null;
    }
    static validatePassword(password) {
        if (!password)
            return 'Password is required';
        if (password.length < 8)
            return 'Password must be at least 8 characters long';
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
            return 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
        }
        return null;
    }
    static validateName(name) {
        if (!name)
            return 'Name is required';
        if (name.length < 2)
            return 'Name must be at least 2 characters long';
        return null;
    }
    static validateRequired(value, fieldName) {
        if (!value || value.trim() === '')
            return `${fieldName} is required`;
        return null;
    }
    static validatePhone(phone) {
        if (!phone)
            return 'Phone number is required';
        const phoneRegex = /^\+?[\d\s-()]{10,}$/;
        if (!phoneRegex.test(phone))
            return 'Please enter a valid phone number';
        return null;
    }
}
export const validateForm = (fields, rules) => {
    const errors = {};
    Object.keys(rules).forEach(field => {
        const error = rules[field](fields[field]);
        if (error) {
            errors[field] = error;
        }
    });
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};

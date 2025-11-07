export declare class DateUtils {
    static formatDate(date: Date | string, formatStr?: string): string;
    static formatDateTime(date: Date | string, formatStr?: string): string;
    static timeAgo(date: Date | string): string;
    static relativeDate(date: Date | string): string;
    static isExpired(date: Date | string): boolean;
    static daysUntil(date: Date | string): number;
}

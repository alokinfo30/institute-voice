import { format, formatDistance, formatRelative, isToday, isYesterday, parseISO } from 'date-fns';
export class DateUtils {
    static formatDate(date, formatStr = 'MMM dd, yyyy') {
        const dateObj = typeof date === 'string' ? parseISO(date) : date;
        return format(dateObj, formatStr);
    }
    static formatDateTime(date, formatStr = 'MMM dd, yyyy HH:mm') {
        const dateObj = typeof date === 'string' ? parseISO(date) : date;
        return format(dateObj, formatStr);
    }
    static timeAgo(date) {
        const dateObj = typeof date === 'string' ? parseISO(date) : date;
        return formatDistance(dateObj, new Date(), { addSuffix: true });
    }
    static relativeDate(date) {
        const dateObj = typeof date === 'string' ? parseISO(date) : date;
        if (isToday(dateObj)) {
            return `Today at ${format(dateObj, 'HH:mm')}`;
        }
        if (isYesterday(dateObj)) {
            return `Yesterday at ${format(dateObj, 'HH:mm')}`;
        }
        return formatRelative(dateObj, new Date());
    }
    static isExpired(date) {
        const dateObj = typeof date === 'string' ? parseISO(date) : date;
        return dateObj < new Date();
    }
    static daysUntil(date) {
        const dateObj = typeof date === 'string' ? parseISO(date) : date;
        const diffTime = dateObj.getTime() - new Date().getTime();
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
}

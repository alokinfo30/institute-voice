import { format, formatDistance, formatRelative, isToday, isYesterday, parseISO } from 'date-fns';

export class DateUtils {
  static formatDate(date: Date | string, formatStr: string = 'MMM dd, yyyy'): string {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, formatStr);
  }

  static formatDateTime(date: Date | string, formatStr: string = 'MMM dd, yyyy HH:mm'): string {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, formatStr);
  }

  static timeAgo(date: Date | string): string {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return formatDistance(dateObj, new Date(), { addSuffix: true });
  }

  static relativeDate(date: Date | string): string {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    
    if (isToday(dateObj)) {
      return `Today at ${format(dateObj, 'HH:mm')}`;
    }
    
    if (isYesterday(dateObj)) {
      return `Yesterday at ${format(dateObj, 'HH:mm')}`;
    }
    
    return formatRelative(dateObj, new Date());
  }

  static isExpired(date: Date | string): boolean {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return dateObj < new Date();
  }

  static daysUntil(date: Date | string): number {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    const diffTime = dateObj.getTime() - new Date().getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
}
import getReadingTime from 'reading-time';

export function calculateReadingTime(text: string): string {
  const stats = getReadingTime(text);
  return stats.text; // e.g. "4 min read"
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export function formatISODate(date: Date): string {
  return date.toISOString();
}

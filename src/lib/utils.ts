import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Combine classnames with TailwindCSS
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

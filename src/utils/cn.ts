import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to combine and merge Tailwind CSS classes.
 * 
 * It first uses `clsx` to conditionally join class names,
 * then uses `twMerge` to intelligently merge Tailwind classes
 * (handling conflicts like `px-2` and `px-4`).
 * 
 * @param inputs - List of class names, conditionals, or arrays thereof.
 * @returns A single merged string of valid Tailwind CSS classes.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}

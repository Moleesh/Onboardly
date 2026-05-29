/**
 * @module UiUtils
 * @description Utility helpers for shared UI primitives.
 * @author auto
 * @since 1.0.0
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges conditional class names with Tailwind conflict resolution.
 * @param inputs - Class name fragments.
 * @returns A normalized class name string.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

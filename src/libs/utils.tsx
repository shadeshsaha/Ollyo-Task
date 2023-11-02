import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Combines multiple classes or class values into a single class string.
 * This function leverages clsx and tailwind-merge for class merging.
 *
 * @param inputs - A list of classes or class values to merge.
 * @returns A single class string representing the merged classes.
 */

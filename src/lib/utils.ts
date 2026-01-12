import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Function to parse JSON data
export const parseJSON = (data: any) => {
  return JSON.parse(JSON.stringify(data));
};
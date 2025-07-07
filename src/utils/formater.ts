/**
 * Formats a number or numeric string with commas as thousands separators.
 * 
 * @param num - The number or numeric string to format.
 * @returns The formatted string with commas (e.g., "1234567" -> "1,234,567").
 */
export function formatNumberWithCommas(num: number | string): string {
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

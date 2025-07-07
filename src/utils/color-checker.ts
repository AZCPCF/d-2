/**
 * Determines if a hex color string represents a dark color.
 *
 * Supports 3 or 6 digit hex codes, with or without leading '#'.
 *
 * @param hex - The hex color code string (e.g., "#abc" or "aabbcc").
 * @returns `true` if the color is dark, otherwise `false`.
 */
export default function isDarkColor(hex?: string): boolean {
  if (!hex) return false;

  // Expand shorthand hex (#abc -> #aabbcc)
  const shorthand = hex.replace(
    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    (_, r, g, b) => r + r + g + g + b + b
  );

  // Extract the full 6-digit hex color parts
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(shorthand);
  if (!result) return false;

  // Parse RGB components
  const [r, g, b] = result.slice(1).map((v) => parseInt(v, 16));

  // Calculate luminance based on Rec. 601 luma formula
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  // Return true if luminance is less than midpoint (128)
  return luminance < 128;
}

export default function isDarkColor(hex?: string): boolean {
  if (!hex) return false;
  const shorthand = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) =>
    r + r + g + g + b + b
  );
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(shorthand);
  if (!result) return false;

  const [r, g, b] = result.slice(1).map((v) => parseInt(v, 16));
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance < 128;
}

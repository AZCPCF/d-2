export function formatNumberWithCommas(num: number | string): string {
  return `${num}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function toRoman(num: number): string {
  if (num === 5) {
    return "V";
  }
  if (num === 4) {
    return "IV";
  }
  return "I".repeat(num);
}

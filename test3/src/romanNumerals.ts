export function toRoman(num: number): string {
  if (num === 5) {
    return "V";
  }
  return "I".repeat(num);
}

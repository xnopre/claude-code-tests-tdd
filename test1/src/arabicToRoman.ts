export function arabicToRoman(num: number): string {
  const values = [
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];

  let result = '';
  let remaining = num;

  for (const { value, numeral } of values) {
    while (remaining >= value) {
      result += numeral;
      remaining -= value;
    }
  }

  return result;
}

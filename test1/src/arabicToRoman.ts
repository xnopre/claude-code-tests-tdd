/**
 * Converts an Arabic number to its Roman numeral representation.
 * Supports numbers from 1 to 3999.
 *
 * @param num - The Arabic number to convert
 * @returns The Roman numeral string representation
 * @throws Error if the number is not in the valid range (1-3999)
 *
 * @example
 * arabicToRoman(4) // returns "IV"
 * arabicToRoman(1994) // returns "MCMXCIV"
 */
export function arabicToRoman(num: number): string {
  // Validation
  if (!Number.isInteger(num) || num < 1 || num > 3999) {
    throw new Error('Number must be an integer between 1 and 3999');
  }

  // Mapping of Arabic values to Roman numerals in descending order
  const values = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];

  let result = '';
  let remaining = num;

  // Iterate through values and build the Roman numeral string
  for (const { value, numeral } of values) {
    while (remaining >= value) {
      result += numeral;
      remaining -= value;
    }
  }

  return result;
}

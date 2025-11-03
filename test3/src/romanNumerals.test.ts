import { toRoman } from './romanNumerals';

describe('Roman Numerals Converter', () => {
  test('converts 1 to I', () => {
    expect(toRoman(1)).toBe('I');
  });
});

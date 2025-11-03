import { toRoman } from './romanNumerals';

describe('Roman Numerals Converter', () => {
  it('should convert 1 to I', () => {
    expect(toRoman(1)).toBe('I');
  });
});

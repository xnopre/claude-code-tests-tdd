import { arabicToRoman } from './arabicToRoman';

describe('arabicToRoman', () => {
  it('should convert 1 to I', () => {
    expect(arabicToRoman(1)).toBe('I');
  });

  it('should convert 2 to II', () => {
    expect(arabicToRoman(2)).toBe('II');
  });

  it('should convert 3 to III', () => {
    expect(arabicToRoman(3)).toBe('III');
  });

  it('should convert 4 to IV', () => {
    expect(arabicToRoman(4)).toBe('IV');
  });

  it('should convert 5 to V', () => {
    expect(arabicToRoman(5)).toBe('V');
  });
});

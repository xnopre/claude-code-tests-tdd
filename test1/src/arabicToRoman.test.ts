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

  it('should convert 6 to VI', () => {
    expect(arabicToRoman(6)).toBe('VI');
  });

  it('should convert 9 to IX', () => {
    expect(arabicToRoman(9)).toBe('IX');
  });

  it('should convert 10 to X', () => {
    expect(arabicToRoman(10)).toBe('X');
  });

  it('should convert 27 to XXVII', () => {
    expect(arabicToRoman(27)).toBe('XXVII');
  });

  it('should convert 48 to XLVIII', () => {
    expect(arabicToRoman(48)).toBe('XLVIII');
  });

  it('should convert 49 to XLIX', () => {
    expect(arabicToRoman(49)).toBe('XLIX');
  });

  it('should convert 50 to L', () => {
    expect(arabicToRoman(50)).toBe('L');
  });

  it('should convert 90 to XC', () => {
    expect(arabicToRoman(90)).toBe('XC');
  });

  it('should convert 100 to C', () => {
    expect(arabicToRoman(100)).toBe('C');
  });

  it('should convert 400 to CD', () => {
    expect(arabicToRoman(400)).toBe('CD');
  });

  it('should convert 500 to D', () => {
    expect(arabicToRoman(500)).toBe('D');
  });

  it('should convert 900 to CM', () => {
    expect(arabicToRoman(900)).toBe('CM');
  });

  it('should convert 1000 to M', () => {
    expect(arabicToRoman(1000)).toBe('M');
  });

  it('should convert 1994 to MCMXCIV', () => {
    expect(arabicToRoman(1994)).toBe('MCMXCIV');
  });

  it('should convert 3999 to MMMCMXCIX', () => {
    expect(arabicToRoman(3999)).toBe('MMMCMXCIX');
  });

  describe('input validation', () => {
    it('should throw error for numbers less than 1', () => {
      expect(() => arabicToRoman(0)).toThrow('Number must be an integer between 1 and 3999');
      expect(() => arabicToRoman(-5)).toThrow('Number must be an integer between 1 and 3999');
    });

    it('should throw error for numbers greater than 3999', () => {
      expect(() => arabicToRoman(4000)).toThrow('Number must be an integer between 1 and 3999');
    });

    it('should throw error for non-integer numbers', () => {
      expect(() => arabicToRoman(3.14)).toThrow('Number must be an integer between 1 and 3999');
    });
  });
});

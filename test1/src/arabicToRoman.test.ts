import { arabicToRoman } from './arabicToRoman';

describe('arabicToRoman', () => {
  it('should convert 1 to I', () => {
    expect(arabicToRoman(1)).toBe('I');
  });
});

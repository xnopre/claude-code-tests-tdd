import { toRoman } from './romanNumerals';

describe('Roman Numerals Converter', () => {
  test('converts 1 to I', () => {
    expect(toRoman(1)).toBe('I');
  });

  test('converts 2 to II', () => {
    expect(toRoman(2)).toBe('II');
  });

  test('converts 3 to III', () => {
    expect(toRoman(3)).toBe('III');
  });

  test('converts 4 to IV', () => {
    expect(toRoman(4)).toBe('IV');
  });

  test('converts 5 to V', () => {
    expect(toRoman(5)).toBe('V');
  });

  test('converts 6 to VI', () => {
    expect(toRoman(6)).toBe('VI');
  });

  test('converts 9 to IX', () => {
    expect(toRoman(9)).toBe('IX');
  });

  test('converts 10 to X', () => {
    expect(toRoman(10)).toBe('X');
  });

  test('converts 20 to XX', () => {
    expect(toRoman(20)).toBe('XX');
  });

  test('converts 40 to XL', () => {
    expect(toRoman(40)).toBe('XL');
  });

  test('converts 50 to L', () => {
    expect(toRoman(50)).toBe('L');
  });

  test('converts 90 to XC', () => {
    expect(toRoman(90)).toBe('XC');
  });

  test('converts 100 to C', () => {
    expect(toRoman(100)).toBe('C');
  });

  test('converts 400 to CD', () => {
    expect(toRoman(400)).toBe('CD');
  });

  test('converts 500 to D', () => {
    expect(toRoman(500)).toBe('D');
  });

  test('converts 900 to CM', () => {
    expect(toRoman(900)).toBe('CM');
  });

  test('converts 1000 to M', () => {
    expect(toRoman(1000)).toBe('M');
  });
});

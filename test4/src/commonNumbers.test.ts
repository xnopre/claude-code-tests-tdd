import { findCommonNumbers } from './commonNumbers';

describe('findCommonNumbers', () => {
  it('devrait retourner les nombres communs entre deux tableaux ordonnés', () => {
    const a = [1, 7, 8, 12, 23, 55, 67, 89];
    const b = [7, 12, 23, 105, 112, 130, 141];

    const result = findCommonNumbers(a, b);

    expect(result).toEqual([7, 12, 23]);
  });

  it('devrait garder le minimum des occurrences communes', () => {
    const a = [1, 5, 5, 7, 10, 10, 12];
    const b = [5, 5, 7, 10, 12, 12, 15];

    const result = findCommonNumbers(a, b);

    expect(result).toEqual([5, 5, 7, 10, 12]);
  });
});

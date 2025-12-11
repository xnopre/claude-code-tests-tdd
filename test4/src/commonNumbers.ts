export function findCommonNumbers(a: number[], b: number[], keepDuplicates: boolean = true): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      if (keepDuplicates || result.length === 0 || result[result.length - 1] !== a[i]) {
        result.push(a[i]);
      }
      i++;
      j++;
    } else if (a[i] < b[j]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}

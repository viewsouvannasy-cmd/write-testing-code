export function average(numbers: number[]): number {
  const totle = numbers.reduce((acc, num) => num + acc, 0);

  const results: number = totle / numbers.length;

  if (isNaN(results)) {
    throw new Error("Not implemented this value");
  }

  return results;
}

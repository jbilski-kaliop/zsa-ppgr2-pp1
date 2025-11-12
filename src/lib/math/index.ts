export function gcd(val1: number, val2: number): number {
  if (isNaN(val1) || isNaN(val2)) {
    return NaN;
  }

  val1 = Math.abs(val1);
  val2 = Math.abs(val2);

  const { min, max } = sortTwoValuesMinToMax(val1, val2);

  let gcd = 1;
  for (let i = 2; i <= min; i++) {
    if (min % i == 0 && max % i == 0) {
      gcd = i;
    }
  }

  return gcd;
}

export function isPrime(value: number): boolean {
  value = parseInt(`${value}`);

  if (isNaN(value) || value < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(value); i++) {
    if (value % i == 0) {
      return false;
    }
  }

  return true;
}

export function sortTwoValuesMinToMax(val1: number, val2: number): { min: number; max: number } {
  return {
    min: Math.min(val1, val2),
    max: Math.max(val1, val2),
  };
}

export function getPrimesInRange(val1: number, val2: number): number[] {
  const result: number[] = [];

  let { min, max } = sortTwoValuesMinToMax(val1, val2);

  if (max < 2) {
    return result;
  }
  if (min < 2) {
    min = 2;
  }

  for (let i = min; i <= max; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }

  return result;
}

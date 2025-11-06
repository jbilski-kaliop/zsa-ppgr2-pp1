export function gcd(val1: number, val2: number): number {
  if (isNaN(val1) || isNaN(val2)) {
    return NaN;
  }

  val1 = Math.abs(val1);
  val2 = Math.abs(val2);
  const min = Math.min(val1, val2);
  const max = Math.max(val1, val2);

  let gcd = 1;
  for (let i = 2; i <= min; i++) {
    if (min % i == 0 && max % i == 0) {
      gcd = i;
    }
  }

  return gcd;
}

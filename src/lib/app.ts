import { bindGcdActionToButtonAndInputs } from "@/lib/actions/gcd";
import { bindGetPrimesInRangeActionToButtonAndInputs, bindIsPrimeActionToButtonAndInput } from "@/lib/actions/prime";

const VAL_1_ID = "value1";
const VAL_2_ID = "value2";
const GCD_BUTTON_ID = "calcGcd";
const IS_PRIME_1_ID = "isPrime1";
const IS_PRIME_2_ID = "isPrime2";
const GET_PRIMES_ID = "getPrimesInRange";

export default function runApp(): void {
  bindGcdActionToButtonAndInputs(GCD_BUTTON_ID, VAL_1_ID, VAL_2_ID);
  bindIsPrimeActionToButtonAndInput(IS_PRIME_1_ID, VAL_1_ID);
  bindIsPrimeActionToButtonAndInput(IS_PRIME_2_ID, VAL_2_ID);
  bindGetPrimesInRangeActionToButtonAndInputs(GET_PRIMES_ID, VAL_1_ID, VAL_2_ID);
}

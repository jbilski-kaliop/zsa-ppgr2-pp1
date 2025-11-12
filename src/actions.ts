import { GCD_BUTTON_ID, VAL_1_ID, VAL_2_ID } from "@/config";
import type Action from "@/lib/actions/Action";
import GcdAction from "@/lib/actions/GcdAction";

export default [
  {
    btnId: GCD_BUTTON_ID,
    callback: () => new GcdAction(VAL_1_ID, VAL_2_ID),
  },
] as { btnId: string; callback: () => Action }[];

// TODO: reimplement and bind remaining actions
// bindIsPrimeActionToButtonAndInput(IS_PRIME_1_ID, VAL_1_ID);
// bindIsPrimeActionToButtonAndInput(IS_PRIME_2_ID, VAL_2_ID);
// bindGetPrimesInRangeActionToButtonAndInputs(GET_PRIMES_ID, VAL_1_ID, VAL_2_ID);

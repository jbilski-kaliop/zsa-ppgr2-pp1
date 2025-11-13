import { GCD_BUTTON_ID, GET_PRIMES_ID, IS_PRIME_1_ID, IS_PRIME_2_ID, VAL_1_ID, VAL_2_ID } from "@/config";
import type Action from "@/lib/actions/Action";
import GcdAction from "@/lib/actions/GcdAction";
import IsPrimeAction from "./lib/actions/IsPrimeAction";
import GetPrimeInRangeAction from "./lib/actions/GetPrimeInRangeAction";

export default [
  {
    btnId: GCD_BUTTON_ID,
    callback: () => new GcdAction(VAL_1_ID, VAL_2_ID),
  },
  {
    btnId: IS_PRIME_1_ID,
    callback: () => new IsPrimeAction(VAL_1_ID),
  },
  {
    btnId: IS_PRIME_2_ID,
    callback: () => new IsPrimeAction(VAL_2_ID),
  },
  {
    btnId: GET_PRIMES_ID,
    callback: () => new GetPrimeInRangeAction(VAL_1_ID, VAL_2_ID),
  },
] as { btnId: string; callback: () => Action }[];

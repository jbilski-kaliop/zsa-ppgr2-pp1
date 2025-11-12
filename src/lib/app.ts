import { bindGetPrimesInRangeActionToButtonAndInputs, bindIsPrimeActionToButtonAndInput } from "@/lib/actions/prime";
import { GCD_BUTTON_ID, GET_PRIMES_ID, IS_PRIME_1_ID, IS_PRIME_2_ID, VAL_1_ID, VAL_2_ID } from "@/config";
import GcdAction from "@/lib/actions/GcdAction";
import Action from "@/lib/actions/Action";
import { bindActionCallbackToButton } from "@/lib/dom";

export default class App {
  run() {
    this.bindActionToButton(GCD_BUTTON_ID, () => new GcdAction(VAL_1_ID, VAL_2_ID));

    // TODO: reimplement remaining actions
    bindIsPrimeActionToButtonAndInput(IS_PRIME_1_ID, VAL_1_ID);
    bindIsPrimeActionToButtonAndInput(IS_PRIME_2_ID, VAL_2_ID);
    bindGetPrimesInRangeActionToButtonAndInputs(GET_PRIMES_ID, VAL_1_ID, VAL_2_ID);
  }

  private bindActionToButton(btnId: string, callback: () => Action): void {
    bindActionCallbackToButton(btnId, () => {
      const action = callback();
      if (action instanceof Action) {
        action.execute();
      }
    });
  }
}

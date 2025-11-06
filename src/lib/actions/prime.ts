import { bindActionCallbackToButton, getIntValueFromInputElement } from "@/lib/dom";
import { isPrime } from "@/lib/math";

export function bindIsPrimeActionToButtonAndInput(buttonId: string, inputId: string): void {
  bindActionCallbackToButton(buttonId, () => {
    const value: number = getIntValueFromInputElement(inputId);
    if (isNaN(value)) {
      console.error(`Provided value '${value}' is invalid.`);
      return;
    }

    const result = isPrime(value);
    console.log(`Value ${value} is${result ? "" : " not"} prime.`);
  });
}

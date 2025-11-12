import { bindActionCallbackToButton, getIntValueFromInputElement } from "@/lib/dom";
import { getPrimesInRange, isPrime } from "@/lib/math";

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

export function bindGetPrimesInRangeActionToButtonAndInputs(
  buttonId: string,
  value1Id: string,
  value2Id: string,
): void {
  bindActionCallbackToButton(buttonId, () => {
    const val1: number = getIntValueFromInputElement(value1Id);
    const val2: number = getIntValueFromInputElement(value2Id);

    if (isNaN(val1) || isNaN(val2)) {
      console.error(`Either value 1: '${val1}' or value 2 '${val2}' has wrong format. Please check input values.`);
      return;
    }

    const result = getPrimesInRange(val1, val2);

    console.log(`Primes found: ${result.length}. Result: [${result.join(", ")}]`);
  });
}

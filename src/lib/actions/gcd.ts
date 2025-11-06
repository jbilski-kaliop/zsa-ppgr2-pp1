import { bindActionCallbackToButton, getIntValueFromInputElement } from "@/lib/dom";
import { gcd } from "@/lib/math";

export function bindGcdActionToButtonAndInputs(buttonId: string, value1Id: string, value2Id: string): void {
  bindActionCallbackToButton(buttonId, () => {
    const val1: number = getIntValueFromInputElement(value1Id);
    const val2: number = getIntValueFromInputElement(value2Id);

    if (isNaN(val1) || isNaN(val2)) {
      console.error(`Either value 1: '${val1}' or value 2 '${val2}' has wrong format. Please check input values.`);
      return;
    }

    const result = gcd(val1, val2);

    console.log(`GCD(${val1}, ${val2}) = ${result}`);
  });
}

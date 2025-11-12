import Action from "@/lib/actions/Action";
import { getIntValueFromInputElement } from "@/lib/dom";
import { gcd } from "@/lib/math";

export default class GcdAction extends Action {
  private val1Id: string;
  private val2Id: string;

  constructor(val1Id: string, val2Id: string) {
    super();

    this.val1Id = val1Id;
    this.val2Id = val2Id;
  }

  execute(): void {
    const val1: number = getIntValueFromInputElement(this.val1Id);
    const val2: number = getIntValueFromInputElement(this.val2Id);

    if (isNaN(val1) || isNaN(val2)) {
      console.error(`Either value 1: '${val1}' or value 2 '${val2}' has wrong format. Please check input values.`);
      return;
    }

    const result = gcd(val1, val2);

    console.log(`GCD(${val1}, ${val2}) = ${result}`);
  }
}

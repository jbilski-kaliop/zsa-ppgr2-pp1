import Action from "@/lib/actions/Action";
import { getIntValueFromInputElement } from "@/lib/dom";
import { isPrime } from "@/lib/math";

export default class IsPrimeAction extends Action {
  private value: string;

  constructor(value: string) {
    super();

    this.value = value;
  }

  execute(): void {
    const value: number = getIntValueFromInputElement(this.value);

    if (isNaN(value)) {
      console.error(`Provided value '${value}' is invalid.`);
      return;
    }

    const result = isPrime(value);
    console.log(`Value ${value} is${result ? "" : " not"} prime.`);
  }
}

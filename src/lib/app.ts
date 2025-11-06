import { getIntValueFromInputElement } from "@/lib/dom/input";
import { gcd, isPrime } from "@/lib/math";

export default function runApp(): void {
  const gcdBtnEl = document.getElementById("calcGcd") as HTMLButtonElement;
  if (gcdBtnEl instanceof HTMLButtonElement) {
    gcdBtnEl.addEventListener("click", function () {
      gcdBtnEl.disabled = true;

      setTimeout(() => {
        const val1: number = getIntValueFromInputElement("value1");
        const val2: number = getIntValueFromInputElement("value2");

        if (isNaN(val1) || isNaN(val2)) {
          console.error(`Either value 1: '${val1}' or value 2 '${val2}' has wrong format. Please check input values.`);
          gcdBtnEl.disabled = false;
          return;
        }

        const result = gcd(val1, val2);

        console.log(`GCD(${val1}, ${val2}) = ${result}`);
        gcdBtnEl.disabled = false;
      }, 50);
    });
  }

  const isPrime1El = document.getElementById("isPrime1") as HTMLButtonElement;
  if (isPrime1El instanceof HTMLButtonElement) {
    isPrime1El.addEventListener("click", function () {
      isPrime1El.disabled = true;

      setTimeout(() => {
        const val1: number = getIntValueFromInputElement("value1");
        if (isNaN(val1)) {
          console.error(`Value 1 has invalid input provided`);
          isPrime1El.disabled = false;
          return;
        }

        const result = isPrime(val1);

        console.log(`Value ${val1} is${result ? "" : " not"} prime.`);

        isPrime1El.disabled = false;
      }, 50);
    });
  }

  const isPrime2El = document.getElementById("isPrime2") as HTMLButtonElement;
  if (isPrime2El instanceof HTMLButtonElement) {
    isPrime2El.addEventListener("click", function () {
      isPrime2El.disabled = true;

      setTimeout(() => {
        const value: number = getIntValueFromInputElement("value2");
        if (isNaN(value)) {
          console.error(`Value 2 has invalid input provided`);
          isPrime2El.disabled = false;
          return;
        }

        const result = isPrime(value);

        console.log(`Value ${value} is${result ? "" : " not"} prime.`);

        isPrime2El.disabled = false;
      }, 50);
    });
  }
}

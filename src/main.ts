import { getIntValueFromInputElement } from "./lib/dom/input";
import { gcd } from "./lib/math";

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

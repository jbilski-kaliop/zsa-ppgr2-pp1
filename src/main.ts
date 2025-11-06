const gcdBtnEl = document.getElementById("calcGcd") as HTMLButtonElement;

if (gcdBtnEl instanceof HTMLButtonElement) {
  gcdBtnEl.addEventListener("click", function () {
    gcdBtnEl.disabled = true;

    setTimeout(() => {
      const val1El = document.getElementById("value1") as HTMLInputElement;
      const val2El = document.getElementById("value2") as HTMLInputElement;

      const val1: number = val1El instanceof HTMLInputElement ? parseInt(val1El.value) : NaN;
      const val2: number = val2El instanceof HTMLInputElement ? parseInt(val2El.value) : NaN;

      if (isNaN(val1) || isNaN(val2)) {
        console.error(`Either value 1: '${val1}' or value 2 '${val2}' has wrong format. Please check input values.`);
        gcdBtnEl.disabled = false;
        return;
      }

      let gcd = 1;

      const val1Abs = Math.abs(val1);
      const val2Abs = Math.abs(val2);

      const min = Math.min(val1Abs, val2Abs);
      const max = Math.max(val1Abs, val2Abs);

      for (let i = 2; i <= min; i++) {
        if (min % i == 0 && max % i == 0) {
          gcd = i;
        }
      }

      console.log(`GCD(${val1}, ${val2}) = ${gcd}`);
      gcdBtnEl.disabled = false;
    }, 50);
  });
}

export function bindActionCallbackToButton(buttonId: string, callback: Function): void {
  const buttonElement = document.getElementById(buttonId) as HTMLButtonElement;
  if (buttonElement instanceof HTMLButtonElement) {
    buttonElement.addEventListener("click", function () {
      buttonElement.disabled = true;

      setTimeout(() => {
        callback();

        buttonElement.disabled = false;
      }, 50);
    });
  }
}

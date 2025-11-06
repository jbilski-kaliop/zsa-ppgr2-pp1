export function getIntValueFromInputElement(elementId: string): number {
  const element = document.getElementById(elementId) as HTMLInputElement;
  return element instanceof HTMLInputElement ? parseInt(element.value) : NaN;
}

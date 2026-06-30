// Formato España: ES + 2 dígitos de control + 20 dígitos = 24 caracteres
const PATRON_IBAN_ESPANA = /^ES\d{22}$/;

export function normalizarIban(ibanOriginal: string): string {
  return ibanOriginal
    .toUpperCase()
    .replace(/[\s-]/g, ""); // quita espacios y guiones
}

export function estaBienFormadoIbanEspanol(ibanNormalizado: string): boolean {
  return PATRON_IBAN_ESPANA.test(ibanNormalizado);
}
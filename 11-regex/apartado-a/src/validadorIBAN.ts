export function esValidoChecksumIban(ibanNormalizado: string): boolean {
  if (ibanNormalizado.length < 4) return false;

  // Mueve los 4 primeros caracteres al final
  const reordenado = ibanNormalizado.slice(4) + ibanNormalizado.slice(0, 4);

  // Convierte letras a números (A=10, B=11, ..., Z=35)
  const cadenaNumerica = reordenado
    .split("")
    .map((caracter) => {
      const codigo = caracter.charCodeAt(0);
      if (codigo >= 65 && codigo <= 90) {
        return (codigo - 55).toString();
      }
      return caracter;
    })
    .join("");

  // Mod 97 calculado dígito a dígito (el número es demasiado grande para Number)
  let resto = 0;
  for (const digito of cadenaNumerica) {
    resto = (resto * 10 + Number(digito)) % 97;
  }

  return resto === 1;
}
/* ─── UI ───────────────────────────────────────────────────────────────────────
 Muestra el resultado de una validación por consola de forma legible.*/

import { ValidacionClave } from "./types";

export const mostrarResultado = (
  clave: string,
  resultado: ValidacionClave
): void => {
  const estado = resultado.esValida ? "✅ VÁLIDA" : "❌ INVÁLIDA";
  console.log(`\nClave: "${clave}"`);
  console.log(`Estado: ${estado}`);
  if (!resultado.esValida) {
    console.log(`Error:  ${resultado.error}`);
  }
};
/* ─── Motor ────────────────────────────────────────────────────────────────────
 Orquesta todas las validaciones en orden y devuelve el primer error
 encontrado, o esValida: true si todas pasan.*/

import { ValidacionClave } from "./types";
import {
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from "./helpers";

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const validaciones: ValidacionClave[] = [
    tieneLongitudMinima(clave),
    tieneMayusculasYMinusculas(clave),
    tieneNumeros(clave),
    tieneCaracteresEspeciales(clave),
    tieneNombreUsuario(nombreUsuario, clave),
    tienePalabrasComunes(clave, commonPasswords),
  ];

  const primerError = validaciones.find((v) => !v.esValida);

  return primerError ?? { esValida: true };
};
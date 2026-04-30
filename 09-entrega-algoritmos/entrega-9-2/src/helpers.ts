/* ─── Helpers ──────────────────────────────────────────────────────────────────
Funciones auxiliares puras: cada una evalúa una única condición
 y devuelve un ValidacionClave con esValida y, si falla, su error. */

import { ValidacionClave } from "./types";

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  const esValida = /[A-Z]/.test(clave) && /[a-z]/.test(clave);
  return {
    esValida,
    error: esValida
      ? undefined
      : "La clave debe de tener mayúsculas y minúsculas",
  };
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  const esValida = /[0-9]/.test(clave);
  return {
    esValida,
    error: esValida ? undefined : "La clave debe de tener números",
  };
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const esValida = /[^a-zA-Z0-9]/.test(clave);
  return {
    esValida,
    error: esValida
      ? undefined
      : "La clave debe de tener caracteres especiales",
  };
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  const esValida = clave.length >= 8;
  return {
    esValida,
    error: esValida
      ? undefined
      : "La clave debe de tener una longitud mínima de 8 caracteres",
  };
};

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  const esValida = !clave
    .toLowerCase()
    .includes(nombreUsuario.toLowerCase());
  return {
    esValida,
    error: esValida
      ? undefined
      : "La clave no debe tener el nombre del usuario",
  };
};

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const claveMinusculas = clave.toLowerCase();
  const esValida = !commonPasswords.some((palabra) =>
    claveMinusculas.includes(palabra.toLowerCase())
  );
  return {
    esValida,
    error: esValida
      ? undefined
      : "La clave no debe de contener palabras comunes",
  };
};
export let numeroParaAdivinar = 0;
export const setNumeroParaAdivinar = (numeroNuevo) => 
  (numeroParaAdivinar = numeroNuevo);


export const NO_ES_UN_NUMERO = 0;
export const EL_NUMERO_ES_MAYOR= 1;
export const EL_NUMERO_ES_MENOR=2;
export const ES_EL_NUMERO_SECRETO = 3;
export const GAME_OVER_MAXIMO_INTENTOS = 4;

export const MAXIMO_INTENTOS = 5;
export let intentos = 0;
export const setIntentos = (intentosNuevos) =>
  (intentos = intentosNuevos);

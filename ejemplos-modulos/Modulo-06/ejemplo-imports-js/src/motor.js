import {
  numeroParaAdivinar,
  NO_ES_UN_NUMERO,
  EL_NUMERO_ES_MAYOR,
  EL_NUMERO_ES_MENOR,
  ES_EL_NUMERO_SECRETO,
  GAME_OVER_MAXIMO_INTENTOS,
  MAXIMO_INTENTOS,
  intentos, 
} from './modelo';

export const generarNumeroAleatorio = () => Math.floor(Math.random() * 100) + 1;

const hasSuperadoMaximoIntentos = () => intentos >= MAXIMO_INTENTOS;
const iniciarNuevaPartida = () => {
  setNumeroParaAdivinar(generarNumeroAleatorio());
  setIntentos(0);

export const comprobarNumero = (texto) => {
  const numero = parseInt(texto);
  const esUnNumero = !isNaN(numero);

 if(!esUnNumero){
    return NO_ES_UN_NUMERO;
 }

if (numero === numeroParaAdivinar) {
  return ES_EL_NUMERO_SECRETO;
}

if (hasSuperadoMaximoIntentos()) {
  return GAME_OVER_MAXIMO_INTENTOS;
}

    return numero > numeroParaAdivinar
    ? EL_NUMERO_ES_MAYOR
    : EL_NUMERO_ES_MENOR;
  };
  /* Primero me das un número y comprobamos que sea un número. Si no lo es, devolvemos NO_ES_UN_NUMERO. 
  A continuación, comparamos el número con el número para adivinar y devolvemos el estado correspondiente. */
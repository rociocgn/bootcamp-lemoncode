import { partida, MAXIMO_INTENTOS, Estado } from "./modelo";

export const generarNumeroAleatorio = (): number => Math.floor(Math.random() * 101);

const hasSuperadoMaximoIntentos = () : boolean => partida.intentos >= MAXIMO_INTENTOS;

export const comprobarNumeroB = (texto : string, numeroParaAdivinar : number) : Estado => {
  const numero = parseInt(texto);
  const esUnNumero = !isNaN(numero);

  if(!esUnNumero) {
    return "NO_ES_UN_NUMERO";
  } 

  if(numero === numeroParaAdivinar) {
    return "ES_EL_NUMERO_SECRETO";
  }
    
  return numero < numeroParaAdivinar ? "EL_NUMERO_ES_MENOR" : "EL_NUMERO_ES_MAYOR";
};


export const comprobarNumero = (texto : string) => {
  const numero = parseInt(texto);
  const esUnNumero = !isNaN(numero);

 if(!esUnNumero) {
    return "NO_ES_UN_NUMERO";
 }

if (numero === partida.numeroParaAdivinar) {
  return "ES_EL_NUMERO_SECRETO";
}

if (hasSuperadoMaximoIntentos()) {
  return "GAME_OVER_MAXIMO_INTENTOS";
}

    return numero > partida.numeroParaAdivinar
    ? "EL_NUMERO_ES_MAYOR"
    : "EL_NUMERO_ES_MENOR";
  };

  export const iniciaPartidaMotor = () => {
    partida.numeroParaAdivinar = generarNumeroAleatorio();
    partida.intentos++;
  };
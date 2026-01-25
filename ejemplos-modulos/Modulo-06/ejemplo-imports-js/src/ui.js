import { act } from 'react';
import {
  numeroParaAdivinar,
  NO_ES_UN_NUMERO,
  EL_NUMERO_ES_MAYOR,
  EL_NUMERO_ES_MENOR,
  ES_EL_NUMERO_SECRETO,
  GAME_OVER_MAXIMO_INTENTOS,
  MAXIMO_INTENTOS,
  intentos,
  setIntentos,
} from './modelo.js';

import { comprobarNumero } from './motor.js';

export const actualizarIntentosRestantes = () => {
  document.getElementById("intentos-restantes").innerHTML = `${intentos} de ${MAXIMO_INTENTOS}`;
}
// También podríamos haber hecho `Intentos Restantes: ${MAXIMO_INTENTOS - intentos}`

export const iniciarNuevaPartidaUI = () => {
    actualizarIntentosRestantes();
}; 

export const gestionarGameOver = (estado) => {
  if(estado === GAME_OVER_MAXIMO_INTENTOS){
    document.getElementById("comprobar").disabled = true;
  }
}


export const muestraMensajeComprobacion = (texto, estado) => {
  let mensaje = '';

switch (estado) {
    case NO_ES_UN_NUMERO:
        mensaje = `${texto} no es un número válido.`; 
        break;
    case EL_NUMERO_ES_MAYOR:
        mensaje = `Uy! El número ${texto} es mayor que el número secreto. Inténtalo de nuevo.`; 
        break;
    case EL_NUMERO_ES_MENOR:
        mensaje = `Uy! El número ${texto} es menor que el número secreto. Inténtalo de nuevo.`; 
        break;
    case ES_EL_NUMERO_SECRETO:
        mensaje = `¡Felicidades! Has adivinado el número!!!🎉🎉🎉.`; 
        break;
    case GAME_OVER_MAXIMO_INTENTOS:
        mensaje = `🪦Game Over! Has superado el número máximo de intentos. El número era ${numeroParaAdivinar}.`; 
        break;
    default:
        mensaje = 'No se ha podido determinar el estado.';
        break;
  }
  document.getElementById("resultado").innerHTML = mensaje;
}
// Podemos incluso partir en dos este método si queremos, por un lado los cases y por otro la actualización del DOM

export const handleCompruebaClick = () => {
    const texto = document.getElementById('numero').value;
    const estado = comprobarNumero(texto);
    muestraMensajeComprobacion(texto, estado);
    setIntentos(intentos + 1); // TO DO: Aquí podríamos haber implementado una función que se llamara incrementaIntentos
    actualizarIntentosRestantes();   
    gestionarGameOver(estado);
}
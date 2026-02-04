import { partida, Estado, MAXIMO_INTENTOS } from './modelo.js';
import { comprobarNumero, iniciaPartidaMotor } from './motor.js';

export const actualizarIntentosRestantes = () => {
    const elementoIntentos = document.getElementById("intentos-restantes");

if (elementoIntentos) {
    elementoIntentos.innerHTML = `${partida.intentos} de ${MAXIMO_INTENTOS}`;   
} else {
    console.error("No se encontró el elemento con id 'intentos-restantes'");
}
};

export const gestionarGameOver = (estado: Estado) => {
  if(estado === "GAME_OVER_MAXIMO_INTENTOS"){
    const elementoComprobar = document.getElementById("comprobar");
    if (elementoComprobar && elementoComprobar instanceof HTMLButtonElement) {
        elementoComprobar.disabled = true;
    } else {
        console.error("No se encontró el elemento con id 'comprobar' o no es un botón");
    }
  }
};

export const muestraMensajeComprobacion = (texto : string, estado: Estado) => {
  let mensaje : string = '';

switch (estado) {
    case "NO_ES_UN_NUMERO":
        mensaje = `${texto} no es un número válido.`; 
        break;
    case "EL_NUMERO_ES_MAYOR":
        mensaje = `Uy! El número ${texto} es mayor que el número secreto. Inténtalo de nuevo.`; 
        break;
    case "EL_NUMERO_ES_MENOR":
        mensaje = `Uy! El número ${texto} es menor que el número secreto. Inténtalo de nuevo.`; 
        break;
    case "ES_EL_NUMERO_SECRETO":
        mensaje = `¡Felicidades! Has adivinado el número!!!🎉🎉🎉.`; 
        break;
    case "GAME_OVER_MAXIMO_INTENTOS":
        mensaje = `🪦Game Over! Has superado el número máximo de intentos. El número era ${partida.numeroParaAdivinar}.`; 
        break;
    default:
        mensaje = 'No se ha podido determinar el estado.';
        break;
  }
  const elementoResultado = document.getElementById("resultado");
    if (elementoResultado) {
    elementoResultado.innerHTML = mensaje;
    } else {
    console.error("No se encontró el elemento con id 'resultado'");
    }
}

export const iniciaPartidaUI = () => {
    iniciaPartidaMotor();
    actualizarIntentosRestantes();
}


export const handleCompruebaClick = () => {
    let texto : string = "";
    const elementoInput = document.getElementById("numero");

    if (elementoInput && elementoInput instanceof HTMLInputElement) {
        texto = elementoInput.value;
    }

    const estado: Estado = comprobarNumero(texto);
        muestraMensajeComprobacion(texto, estado);
        partida.intentos++;
        actualizarIntentosRestantes();
        gestionarGameOver(estado);
    };

    
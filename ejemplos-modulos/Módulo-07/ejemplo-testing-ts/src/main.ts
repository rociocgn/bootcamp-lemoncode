import { partida, Estado, MAXIMO_INTENTOS } from './modelo.js';

const generarNumeroAleatorio = (): number => Math.floor(Math.random() * 101);
//TO DO: Mover esto a DOM Loaded
partida.numeroParaAdivinar = generarNumeroAleatorio();

const hasSuperadoMaximoIntentos = () : boolean => partida.intentos >= MAXIMO_INTENTOS;

const actualizarIntentosRestantes = () => {
    const elementoIntentos = document.getElementById("intentos-restantes");

if (elementoIntentos) {
    elementoIntentos.innerHTML = `${partida.intentos} de ${MAXIMO_INTENTOS}`;   
} else {
    console.error("No se encontró el elemento con id 'intentos-restantes'");
}
};

document.addEventListener('DOMContentLoaded', actualizarIntentosRestantes);

const gestionarGameOver = (estado: Estado) => {
  if(estado === "GAME_OVER_MAXIMO_INTENTOS"){
    const elementoComprobar = document.getElementById("comprobar");
    if (elementoComprobar && elementoComprobar instanceof HTMLButtonElement) {
        elementoComprobar.disabled = true;
    } else {
        console.error("No se encontró el elemento con id 'comprobar' o no es un botón");
    }
  }
};

const muestraMensajeComprobacion = (texto : string, estado: Estado) => {
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

const comprobarNumero = (texto : string) => {
  const numero = parseInt(texto);
  const esUnNumero = !isNaN(numero);

 if(!esUnNumero){
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


const botonComprobar = document.getElementById('comprobar');
    if (botonComprobar && botonComprobar instanceof HTMLButtonElement) {
    botonComprobar?.addEventListener('click', () => {
        const elementoInput = document.getElementById("numero");
        if (elementoInput && elementoInput instanceof HTMLInputElement) {
            const texto: string = elementoInput.value;
            const estado: Estado = comprobarNumero(texto);
            muestraMensajeComprobacion(texto, estado);
            partida.intentos++;
            actualizarIntentosRestantes();
            gestionarGameOver(estado);
        } else {
            console.error("No se encontró el elemento con id 'numero' o no es un campo de entrada");
        }
    });
} else {
    console.error("No se encontró el elemento con id 'comprobar' o no es un botón");
}
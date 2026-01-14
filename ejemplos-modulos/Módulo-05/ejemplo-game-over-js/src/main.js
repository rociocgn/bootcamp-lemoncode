const generarNumeroAleatorio = () => Math.floor(Math.random() * 100) + 1;

const numeroParaAdivinar = generarNumeroAleatorio();

const NO_ES_UN_NUMERO = 0;
const EL_NUMERO_ES_MAYOR= 1;
const EL_NUMERO_ES_MENOR=2;
const ES_EL_NUMERO_SECRETO = 3;
const GAME_OVER_MAXIMO_INTENTOS = 4;

const MAXIMO_INTENTOS = 5;
let intentos = 0;

const actualizarIntentosRestantes = () => {
  document.getElementById("intentos-restantes").innerHTML = `${intentos} de ${MAXIMO_INTENTOS}`;
}
// También podríamos haber hecho `Intentos Restantes: ${MAXIMO_INTENTOS - intentos}`

document.addEventListener('DOMContentLoaded', actualizarIntentosRestantes);

const hasSuperadoMaximoIntentos = () => intentos >= MAXIMO_INTENTOS;
const gestionarGameOver = (estado) => {
  if(estado === GAME_OVER_MAXIMO_INTENTOS){
    document.getElementById("comprobar").disabled = true;
  }
}

const muestraMensajeComprobacion = (texto, estado) => {
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

const comprobarNumero = (texto) => {
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

const handleCompruebaClick = () => {
    const texto = document.getElementById('numero').value;
    const estado = comprobarNumero(texto);
    muestraMensajeComprobacion(texto, estado);
    intentos++;
    actualizarIntentosRestantes();   
    gestionarGameOver(estado);
}


const botonComprobar = document.getElementById('comprobar');
botonComprobar.addEventListener('click', handleCompruebaClick);

  /* if (numero === numeroParaAdivinar) {
      resultado = ES_EL_NUMERO_SECRETO;
    } else {
      resultado = NO_ES_EL_NUMERO_SECRETO;
    }
  } else {
    resultado = NO_ES_UN_NUMERO;
  }*/



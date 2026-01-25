/*
motor.js <==== ui.js 
    ↓           ↓
      modelo.js 
*/


import { iniciarNuevaPartida } from './motor.js';

import {
  handleCompruebaClick,
  iniciarNuevaPartidaUI
} from './ui.js';

const iniciarPartida = () => {
  iniciarNuevaPartida();
  iniciarNuevaPartidaUI();
}
/* const iniciarNuevaPartida = () => {
  setNumeroParaAdivinar(generarNumeroAleatorio());
  setIntentos(0);
  actualizarIntentosRestantes();
};*/

// TO DO: Esto se puede hacer mejor
document.addEventListener('DOMContentLoaded', iniciarPartida);


const botonComprobar = document.getElementById('comprobar');
botonComprobar.addEventListener('click', handleCompruebaClick);




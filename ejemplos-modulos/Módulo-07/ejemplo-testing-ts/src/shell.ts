import { partida } from './modelo.js';
import { generarNumeroAleatorio } from './motor.js';
import { handleCompruebaClick, iniciaPartidaUI} from './ui.js';

//TO DO: Mover esto a DOM Loaded
partida.numeroParaAdivinar = generarNumeroAleatorio();



document.addEventListener('DOMContentLoaded', iniciaPartidaUI);

const btnComprobar = document.getElementById('comprobar');
if (btnComprobar !== null && btnComprobar !== undefined && btnComprobar instanceof HTMLButtonElement) {
    btnComprobar.addEventListener('click', handleCompruebaClick);
};

const btnNuevaPartida = document.getElementById("nueva-partida")
if(btnNuevaPartida !== null && btnNuevaPartida !== undefined && btnNuevaPartida instanceof HTMLButtonElement) {
     btnNuevaPartida.addEventListener("click", iniciaPartidaUI);
     partida.intentos = 0;
}
   

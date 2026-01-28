import { actualizarPuntuacion, gestionarPlantarse, dameCarta, gestionarSimulacion } from "./motor.js";
import { puntuacion } from "./motor.ts";


export const mostrarUrlCarta = (url: string) => {
    const elementoImagen = document.getElementById('carta');

    if (elementoImagen !== null && elementoImagen !== undefined && elementoImagen instanceof HTMLImageElement) {
        elementoImagen.src = url;
    }
}

export const mostrarPuntuacion = () => {
    const elementoPuntuacion = document.getElementById('puntuacion');

    if (elementoPuntuacion !== null && elementoPuntuacion !== undefined && elementoPuntuacion instanceof HTMLSpanElement) {
        elementoPuntuacion.textContent = `${puntuacion}`;
    }
}


export const mostrarMensaje = (texto: string) => {
  const mensaje = document.getElementById("mensaje");
  if (mensaje && mensaje instanceof HTMLParagraphElement) {
    mensaje.textContent = texto;
  }
};

export const finalizarPartida = () => {
    const btnDameCarta = document.getElementById("dame-carta");
    if (btnDameCarta && btnDameCarta instanceof HTMLButtonElement) {
        btnDameCarta.disabled = true;
    }
};

const btnPlantarse = document.getElementById("plantarse");
if (btnPlantarse !== null && btnPlantarse !== undefined && btnPlantarse instanceof HTMLButtonElement) {
    btnPlantarse.addEventListener("click", gestionarPlantarse);
}

const btnDameCarta = document.getElementById('dame-carta');

if (btnDameCarta !== null && btnDameCarta !== undefined && btnDameCarta instanceof HTMLButtonElement) {
    btnDameCarta.addEventListener('click', () => {
        dameCarta();
    })
} else {
    console.log('Error!!!');
}

const imagenInicial = (): void => {
  const img = document.getElementById("carta");
  if (img !== null && img !== undefined && img instanceof HTMLImageElement) {
    img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
};

const mensajeInicial = (): void => {
  const mensaje = document.getElementById("mensaje");
    if (mensaje !== null && mensaje !== undefined && mensaje instanceof HTMLParagraphElement) {
        mensaje.textContent = "";
    }
}

export const iniciarNuevaPartida = (): void => {
  actualizarPuntuacion(0);
  mostrarPuntuacion();
  imagenInicial();
  mensajeInicial();

 const btnDameCarta = document.getElementById("dame-carta");
    if (btnDameCarta !== null && btnDameCarta !== undefined && btnDameCarta instanceof HTMLButtonElement) {
        btnDameCarta.disabled = false;
    }
};

const btnNuevaPartida = document.getElementById("nueva-partida");
if (btnNuevaPartida !== null && btnNuevaPartida !== undefined && btnNuevaPartida instanceof HTMLButtonElement) {
    btnNuevaPartida.addEventListener("click", iniciarNuevaPartida);
}


const botonQueHabriaPasado = document.getElementById("que-habria-pasado");
if (botonQueHabriaPasado !== null && botonQueHabriaPasado !== undefined && botonQueHabriaPasado instanceof HTMLButtonElement) {
    botonQueHabriaPasado.addEventListener("click", gestionarSimulacion);
}
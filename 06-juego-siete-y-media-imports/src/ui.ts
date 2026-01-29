 import { partida, actualizarPuntuacion } from "./modelo";
 import { 
    obtenerMensajePlantarse, 
    obtenerUrlCarta, 
    generarNumeroAleatorio, 
    generarNumeroCarta, 
    mostrarUrlCarta, 
    obtenerPuntosCarta, 
    sumarPuntos,
    obtenerMensajeSimulacion
    } from "./motor";

export const mostrarPuntuacion = () => { 
    const elementoPuntuacion = document.getElementById('puntuacion'); 
    if (elementoPuntuacion !== null && elementoPuntuacion !== undefined && elementoPuntuacion instanceof HTMLSpanElement) { 
        elementoPuntuacion.textContent = `${partida.puntuacion}`; 
    } 
}; 

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

export const gestionarGameOver = (): void => { 
    mostrarMensaje("¡Game Over!"); 
    finalizarPartida(); 
}; 

export const gestionarPlantarse = (): void => { 
    finalizarPartida();

    const mensaje = obtenerMensajePlantarse(partida.puntuacion);
    mostrarMensaje(mensaje); 
}; 

const btnPlantarse = document.getElementById("plantarse"); 
if (btnPlantarse !== null && btnPlantarse !== undefined && btnPlantarse instanceof HTMLButtonElement) { 
    btnPlantarse.addEventListener("click", gestionarPlantarse); 
};

export const comprobarPartida = () => { 
    if (partida.puntuacion === 7.5) { 
        obtenerMensajePlantarse(partida.puntuacion); 
    } 
    if (partida.puntuacion > 7.5) { 
        gestionarGameOver(); 
    } 
};

const dameCarta = () => { 
    const numeroAleatorio = generarNumeroAleatorio(); 
    const carta = generarNumeroCarta(numeroAleatorio); 
    const urlCarta = obtenerUrlCarta(carta); 
    mostrarUrlCarta(urlCarta); 
    const puntosCarta = obtenerPuntosCarta(carta); 
    const puntosSumados = sumarPuntos(puntosCarta); 
    actualizarPuntuacion(puntosSumados); 
    mostrarPuntuacion(); 
    comprobarPartida(); 
}; 

const btnDameCarta = document.getElementById('dame-carta'); 
if (btnDameCarta !== null && btnDameCarta !== undefined && btnDameCarta instanceof HTMLButtonElement) { 
    btnDameCarta.addEventListener('click', dameCarta); 
} else { 
    console.log('Error!!!'); 
    };


export const imagenInicial = (): void => { 
    const img = document.getElementById("carta"); 
    if (img !== null && img !== undefined && img instanceof HTMLImageElement) { 
        img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"; 
    } 
}; 

export const mensajeInicial = (): void => { 
    const mensaje = document.getElementById("mensaje"); 
    if (mensaje !== null && mensaje !== undefined && mensaje instanceof HTMLParagraphElement) { 
        mensaje.textContent = ""; 
    } 
};

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
}; 

const gestionarSimulacion = (): void => { 
    const numero = generarNumeroAleatorio(); 
    const carta = generarNumeroCarta(numero); 
    const puntosCarta = obtenerPuntosCarta(carta); 
    
    const urlCarta = obtenerUrlCarta(carta); 
    mostrarUrlCarta(urlCarta); 
    
    const mensaje = obtenerMensajeSimulacion(partida.puntuacion, puntosCarta); 
    mostrarMensaje(mensaje); 
}; 

const botonQueHabriaPasado = document.getElementById("que-habria-pasado"); 
if (botonQueHabriaPasado !== null && botonQueHabriaPasado !== undefined && botonQueHabriaPasado instanceof HTMLButtonElement) { 
    botonQueHabriaPasado.addEventListener("click", gestionarSimulacion);
};
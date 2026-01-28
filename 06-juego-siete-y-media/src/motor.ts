import { mostrarMensaje, mostrarPuntuacion, mostrarUrlCarta, finalizarPartida } from "./ui";
import { obtenerPuntosCarta, sumarPuntos } from "./modelo";

export let puntuacion: number = 0;

const obtenerUrlCarta = (numeroCarta: number): string => {
    let src = "";

    switch (numeroCarta) {
        case 1:
            src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
            break;
        case 2:
            src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
            break;
        case 3:
            src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
            break;
        case 4:
            src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
            break;
        case 5:
            src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
            break;
        case 6:
            src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
            break;
        case 7:
            src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
            break;
        case 10:
            src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
            break;
        case 11:
            src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
            break;
        case 12:
            src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
            break;
        default:
            src = "";
    }

    return src;
};

const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 10) + 1;
}

const generarNumeroCarta = (numeroAlea: number) => {
    if (numeroAlea > 7) {
        return numeroAlea + 2;
    }

    return numeroAlea;
}


export const actualizarPuntuacion = (nuevosPuntos: number) => {
    puntuacion = nuevosPuntos;
}


const obtenerMensajePlantarse = (puntuacion: number): string => {
  if (puntuacion < 4) {
    return "Has sido muy conservador";
  }

  if (puntuacion === 5) {
    return "Te ha entrado el canguelo eh?";
  }

  if (puntuacion === 6 || puntuacion === 7) {
    return "Casi, casi...";
  }

  if (puntuacion === 7.5) {
    return "¡Lo has clavado! ¡Enhorabuena!";
  }

  return "";
};


const gestionarGameOver = (): void => {
  mostrarMensaje("¡Game Over!");
  finalizarPartida();
};


export const gestionarPlantarse = (): void => {
  finalizarPartida();

  const mensaje = obtenerMensajePlantarse(puntuacion);
  mostrarMensaje(mensaje);
};


const comprobarPartida = () => {
    if (puntuacion === 7.5) {
        obtenerMensajePlantarse(puntuacion);
    }

    if (puntuacion > 7.5) {
        gestionarGameOver();
    }
}


export const dameCarta = () => {
    const numeroAleatorio = generarNumeroAleatorio();
    const carta = generarNumeroCarta(numeroAleatorio);
    const urlCarta = obtenerUrlCarta(carta);
    mostrarUrlCarta(urlCarta);
    const puntosCarta = obtenerPuntosCarta(carta);
    const puntosSumados = sumarPuntos(puntosCarta);
    actualizarPuntuacion(puntosSumados);
    mostrarPuntuacion();
    comprobarPartida();
}


const obtenerMensajeSimulacion = (puntuacion : number, puntosCarta: number): string => {
    if (puntuacion + puntosCarta > 7.5) {
        return `Si hubieras seguido jugando, habrías perdido con una puntuación de ${puntuacion + puntosCarta}`;
    }
    return `Si hubieras seguido jugando, habrías tenido una puntuación de ${puntuacion + puntosCarta}`;
};


export const gestionarSimulacion = (): void => {
    const numero = generarNumeroAleatorio();
    const carta = generarNumeroCarta(numero);
    const puntosCarta = obtenerPuntosCarta(carta);
    const urlCarta = obtenerUrlCarta(carta);
    mostrarUrlCarta(urlCarta);
    
    
    
    const mensaje = obtenerMensajeSimulacion(puntuacion, puntosCarta);
    mostrarMensaje(mensaje);
};
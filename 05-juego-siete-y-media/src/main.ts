let puntuacion: number = 0;

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

const mostrarUrlCarta = (url: string) => {
    const elementoImagen = document.getElementById('carta');

    if (elementoImagen !== null && elementoImagen !== undefined && elementoImagen instanceof HTMLImageElement) {
        elementoImagen.src = url;
    }
}

const obtenerPuntosCarta = (numeroCarta: number) => {
    if (numeroCarta > 7) {
        return 0.5;
    }

    return numeroCarta;
}

const sumarPuntos = (puntos: number) => {
    return puntos + puntuacion;
}

const actualizarPuntuacion = (nuevosPuntos: number) => {
    puntuacion = nuevosPuntos;
}

const mostrarPuntuacion = () => {
    const elementoPuntuacion = document.getElementById('puntuacion');

    if (elementoPuntuacion !== null && elementoPuntuacion !== undefined && elementoPuntuacion instanceof HTMLSpanElement) {
        elementoPuntuacion.textContent = `${puntuacion}`;
    }
}


let juegoTerminado: boolean = false;
const mostrarMensaje = (texto: string) => {
  const mensaje = document.getElementById("mensaje");
  if (mensaje) {
    mensaje.textContent = texto;
  }
};

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

const finalizarPartida = () => {
    juegoTerminado = true;
    const btnDameCarta = document.getElementById("dame-carta");
    if (btnDameCarta) {
        btnDameCarta.setAttribute("disabled", "true");
    }
};

const gestionarGameOver = (): void => {
  mostrarMensaje("¡Game Over!");
  finalizarPartida();
};

const gestionarPlantarse = (): void => {
  if (juegoTerminado) return;

  finalizarPartida();

  const mensaje = obtenerMensajePlantarse(puntuacion);
  mostrarMensaje(mensaje);
};

const btnPlantarse = document.getElementById("plantarse");
if (btnPlantarse !== null && btnPlantarse !== undefined && btnPlantarse instanceof HTMLButtonElement) {
    btnPlantarse.addEventListener("click", gestionarPlantarse);
}


const comprobarPartida = () => {
    if (puntuacion === 7.5) {
        console.log('Hemos ganado la partida');
    }

    if (puntuacion > 7.5) {
        gestionarGameOver();
    }
}

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
}

const btnDameCarta = document.getElementById('dame-carta');

if (btnDameCarta !== null && btnDameCarta !== undefined && btnDameCarta instanceof HTMLButtonElement) {
    btnDameCarta.addEventListener('click', () => {
        dameCarta();
    })
} else {
    console.log('Error!!!');
}


const estadoInicial = (): void => {
  puntuacion = 0;
  juegoTerminado = false;
  mostrarPuntuacion();
}

const imagenInicial = (): void => {
  const img = document.getElementById("carta");
  if (img !== null && img !== undefined && img instanceof HTMLImageElement) {
    img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
};

const mensajeInicial = (): void => {
  const mensaje = document.getElementById("mensaje");
    if (mensaje !== null && mensaje !== undefined && mensaje instanceof HTMLDivElement) {
        mensaje.textContent = "";
    }
}

const iniciarNuevaPartida = (): void => {
  estadoInicial();
  imagenInicial();
  mensajeInicial();

 const btnDameCarta = document.getElementById("dame-carta");
    if (btnDameCarta !== null && btnDameCarta !== undefined && btnDameCarta instanceof HTMLButtonElement) {
        btnDameCarta.removeAttribute("disabled");
    }
};

document.addEventListener("DOMContentLoaded", iniciarNuevaPartida);

const btnNuevaPartida = document.getElementById("nueva-partida");
if (btnNuevaPartida !== null && btnNuevaPartida !== undefined && btnNuevaPartida instanceof HTMLButtonElement) {
    btnNuevaPartida.addEventListener("click", iniciarNuevaPartida);
}

// Apartado Adicional "¿Qué habría pasado si...?"
const obtenerCartaAleatoria = (): number => {
  const numeroAleatorio = generarNumeroAleatorio();
  return generarNumeroCarta(numeroAleatorio);
};

 
const simularResultadoPartida = () => {
  let puntuacionSimulada = puntuacion;
  let ultimaCarta = 0;


  while (puntuacionSimulada <= 7.5) {
    ultimaCarta = obtenerCartaAleatoria();
    puntuacionSimulada += obtenerPuntosCarta(ultimaCarta);
  }

  return {
    puntuacionFinal: puntuacionSimulada,
    ultimaCarta: ultimaCarta,
  };
};

const obtenerMensajeSimulacion = (puntuacionFinal: number,ultimaCarta: number): string => {
  if (puntuacionFinal > 7.5) {
    return `Si hubieras seguido jugando, habrías sacado una última carta de ${ultimaCarta} y habrías perdido la partida.`;
  }

  return `Si hubieras seguido jugando, tu puntuación final habría sido ${puntuacionFinal.toFixed(1)}.`;
};

const mostrarMensajeSimulacion = (texto: string): void => {
  const mensaje = document.getElementById("mensaje");
  if (mensaje) {
    mensaje.textContent = texto;
  }
};

const mostrarCartaSimulacion = (numeroCarta: number): void => {
  const url = obtenerUrlCarta(numeroCarta);
  mostrarUrlCarta(url);
};

const gestionarSimulacion = (): void => {
  if (!juegoTerminado) return;

  const resultado = simularResultadoPartida();

  const mensaje = obtenerMensajeSimulacion(
    resultado.puntuacionFinal,
    resultado.ultimaCarta
  );

  mostrarCartaSimulacion(resultado.ultimaCarta);
  mostrarMensajeSimulacion(mensaje);
};

const botonQueHabriaPasado = document.getElementById("que-habria-pasado");
if (botonQueHabriaPasado !== null && botonQueHabriaPasado !== undefined && botonQueHabriaPasado instanceof HTMLButtonElement) {
    botonQueHabriaPasado.addEventListener("click", gestionarSimulacion);
}
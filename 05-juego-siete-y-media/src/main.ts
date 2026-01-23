let puntuacion: number = 0;
const mostrarPuntuacion = () => {
    const elementoPuntuacion = document.getElementById("puntuacion");
    if (elementoPuntuacion) {
        elementoPuntuacion.innerText = `Puntuación: ${puntuacion}`;
    } else {
        console.error("No se encontró el elemento con id 'puntuacion'");
    }
};

const dameCarta = () : number => {
    let generarCartaAleatoria = Math.floor(Math.random() * 10) + 1;

    if (generarCartaAleatoria > 7) {
        generarCartaAleatoria += 2;
    }

    return generarCartaAleatoria;
};  

const obtenerValorCarta = (carta: number) : number => {
    if (carta > 7) {
        return 0.5;
    } 
    return carta;
};


const iniciarPartida = () : void => {
    puntuacion = 0;
    juegoTerminado = false;

    mostrarPuntuacion();

    const img = document.getElementById("carta") as HTMLImageElement;
    if (img) {
        img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    }

    const mensaje = document.getElementById("mensaje");
    if (mensaje) {
        mensaje.textContent = "";
    }

    botonDameCarta?.removeAttribute("disabled");
};

document.addEventListener("DOMContentLoaded", () => {
    iniciarPartida();
}); 


const muestraCarta = (carta : number) : void => {
    const img = document.getElementById("carta") as HTMLImageElement;
        if (!img) return;

        let src="";

        switch(carta) {
            case 1:
                src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
                break;
            case 2:
                src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
                break;
            case 3:
                src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
                break;
            case 4:
                src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
                break;
            case 5:
                src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
                break;
            case 6:
                src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
                break;
            case 7:
                src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
                break;
            case 10:
                src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
                break;
            case 11:
                src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
                break;
            case 12:
                src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
                break;
            default:
                src="";
        }
        img.src = src;
};


let juegoTerminado: boolean = false;
const gestionarGameOver = () : void => {
    const mensaje = document.getElementById("mensaje");
    if (mensaje) {
        mensaje.textContent = "¡Game Over!";
    }

    juegoTerminado = true;
    botonDameCarta?.setAttribute("disabled", "true");
}


const gestionarPlantarse = () : void => {
     if (juegoTerminado) return;

    juegoTerminado = true;
    botonDameCarta?.setAttribute("disabled", "true");

    const mensaje = document.getElementById("mensaje");
    if (!mensaje) return;

    if (puntuacion < 4) {
        mensaje.textContent = "Has sido muy conservador";
    } else if (puntuacion == 5) {
        mensaje.textContent = "Te ha entrado el canguelo eh?";
    } else if (puntuacion == 6 || puntuacion == 7) {
        mensaje.textContent = "Casi, casi...";
    } else if (puntuacion == 7.5) {
        mensaje.textContent = "¡Lo has clavado! ¡Enhorabuena!";
    }
};

const botonPlantarse = document.getElementById("plantarse");
botonPlantarse?.addEventListener("click", gestionarPlantarse);
   

const botonNuevaPartida = document.getElementById("nueva-partida");
botonNuevaPartida?.addEventListener("click", iniciarPartida);


const botonDameCarta = document.getElementById("dame-carta");
    botonDameCarta?.addEventListener("click", () => {
        const carta = dameCarta();
        muestraCarta(carta);
        const valorCarta = obtenerValorCarta(carta);
        puntuacion += valorCarta;
        mostrarPuntuacion();

        if (puntuacion > 7.5) {
            gestionarGameOver();
        }
    });

    // Apartado adiconal : Qué habría pasado si hubiera seguido pidiendo cartas

    const botonQueHabriaPasado = document.getElementById("que-habria-pasado");
    botonQueHabriaPasado?.addEventListener("click", () => {
        if (!juegoTerminado) return;

        let puntuacionSimulada = puntuacion;
        let ultimaCarta = 0;

        while (puntuacionSimulada <= 7.5) {
            ultimaCarta = dameCarta();
            puntuacionSimulada += obtenerValorCarta(ultimaCarta);
        }
       
        muestraCarta(ultimaCarta); 

        const mensaje = document.getElementById("mensaje");
        if (mensaje) {
            mensaje.textContent = `Si hubieras seguido jugando, tu puntuación final habría sido ${puntuacionSimulada.toFixed(1)}.`;
        }   
    });


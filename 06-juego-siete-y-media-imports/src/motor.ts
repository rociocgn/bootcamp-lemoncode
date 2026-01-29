import { partida } from "./modelo.js";

export const obtenerUrlCarta = (numeroCarta: number): string => { 
    let src = ""; 
    
    switch (numeroCarta) { 
        case 1: src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg"; 
        break; 

        case 2: src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg"; 
        break; 
        
        case 3: src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg"; 
        break; 
        
        case 4: src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg"; 
        break; 
        
        case 5: src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg"; 
        break; 
        
        case 6: src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg"; 
        break; 
        
        case 7: src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg"; 
        break; 
        
        case 10: src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
        break; 
        
        case 11: src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg"; 
        break; 
        
        case 12: src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg"; 
        break; 
        
        default: src = ""; 

    } return src; 
}; 

export const generarNumeroAleatorio = () => { 
    return Math.floor(Math.random() * 10) + 1; 
}; 
    
export const generarNumeroCarta = (numeroAlea: number) => { 
    if (numeroAlea > 7) { 
        return numeroAlea + 2; 
    } 
    return numeroAlea; 
}; 

    
export const mostrarUrlCarta = (url: string) => { 
        const elementoImagen = document.getElementById('carta'); 
        if (elementoImagen !== null && elementoImagen !== undefined && elementoImagen instanceof HTMLImageElement) { 
            elementoImagen.src = url; 
        } 
    }; 
            

export const obtenerPuntosCarta = (numeroCarta: number) => { 
    if (numeroCarta > 7) { 
        return 0.5; 
    } return numeroCarta; 
}; 

export const sumarPuntos = (puntos: number) => { 
    return puntos + partida.puntuacion; 
}; 

export const obtenerMensajePlantarse = (puntuacion: number): string => { 
    if (puntuacion <= 4) { 
        return "Has sido muy conservador"; 
    } 
    if (puntuacion === 4.5 || puntuacion === 5 || puntuacion === 5.5) { 
        return "Te ha entrado el canguelo eh?"; 
    } 
    if (puntuacion === 6 || puntuacion === 6.5 || puntuacion === 7) { 
        return "Casi, casi..."; 
    } 
    if (puntuacion === 7.5) { 
        return "¡Lo has clavado! ¡Enhorabuena!"; 
    } 

    return ""; 
}; 

export const obtenerMensajeSimulacion = (puntuacion : number, puntosCarta: number): string => { 
    if (puntuacion + puntosCarta > 7.5) {
        return `Si hubieras seguido jugando, habrías perdido con una puntuación de ${puntuacion + puntosCarta}`; 

    } return `Si hubieras seguido jugando, habrías tenido una puntuación de ${puntuacion + puntosCarta}`; 
}; 
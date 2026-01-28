import { puntuacion } from "./motor.ts";

export const obtenerPuntosCarta = (numeroCarta: number) => {
    if (numeroCarta > 7) {
        return 0.5;
    }

    return numeroCarta;
}

export const sumarPuntos = (puntos: number) => {
    return puntos + puntuacion;
}


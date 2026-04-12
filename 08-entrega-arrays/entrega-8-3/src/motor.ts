// ─── motor.ts ───────────────────────────────────────────────────────────────

import { Carta, Tablero } from "./modelo";

// ─── Barajar ─────────────────────────────────────────────────────────────────

/**
 * Devuelve un nuevo array con las cartas en orden aleatorio
 * usando el algoritmo Fisher-Yates.
 */
export const barajarCartas = (cartas: Carta[]): Carta[] => {
  const a = [...cartas];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// ─── Voltear ──────────────────────────────────────────────────────────────────

/**
 * Una carta se puede voltear si:
 *  - La partida no está bloqueada (no hay ya dos cartas levantadas).
 *  - La carta no está ya encontrada.
 *  - La carta no está ya volteada.
 */
export const sePuedeVoltearLaCarta = (
  tablero: Tablero,
  indice: number
): boolean => {
  if (tablero.estadoPartida === "PartidaNoIniciada") return false;
  if (tablero.estadoPartida === "DosCartasLevantadas") return false;
  if (tablero.estadoPartida === "PartidaCompleta") return false;
  if (tablero.cartas[indice].encontrada) return false;
  if (tablero.cartas[indice].estaVuelta) return false;
  return true;
};

/**
 * Voltea la carta en la posición indicada y actualiza
 * el estado del tablero (UnaCartaLevantada / DosCartasLevantadas).
 */
export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  tablero.cartas[indice].estaVuelta = true;

  if (tablero.estadoPartida === "CeroCartasLevantadas") {
    tablero.estadoPartida = "UnaCartaLevantada";
    tablero.indiceCartaVolteadaA = indice;
  } else if (tablero.estadoPartida === "UnaCartaLevantada") {
    tablero.estadoPartida = "DosCartasLevantadas";
    tablero.indiceCartaVolteadaB = indice;
  }
};

// ─── Comprobar pareja ─────────────────────────────────────────────────────────

/**
 * Dos cartas son pareja si tienen el mismo idFoto.
 */
export const sonPareja = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero
): boolean => tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto;

/**
 * Marca ambas cartas como encontradas y comprueba
 * si la partida ha terminado.
 */
export const parejaEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;
  tablero.cartas[indiceA].estaVuelta = false;
  tablero.cartas[indiceB].estaVuelta = false;
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;

  if (esPartidaCompleta(tablero)) {
    tablero.estadoPartida = "PartidaCompleta";
  } else {
    tablero.estadoPartida = "CeroCartasLevantadas";
  }
};

/**
 * Vuelve a poner boca abajo las dos cartas que no formaban pareja.
 */
export const parejaNoEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.cartas[indiceA].estaVuelta = false;
  tablero.cartas[indiceB].estaVuelta = false;
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
  tablero.estadoPartida = "CeroCartasLevantadas";
};

// ─── Fin de partida ───────────────────────────────────────────────────────────

/**
 * La partida es completa cuando todas las cartas están encontradas.
 */
export const esPartidaCompleta = (tablero: Tablero): boolean =>
  tablero.cartas.every((carta) => carta.encontrada);

// ─── Iniciar partida ──────────────────────────────────────────────────────────

/**
 * Reinicia el tablero barajando las cartas y poniendo
 * el estado a CeroCartasLevantadas.
 */
export const iniciaPartida = (tablero: Tablero): void => {
  tablero.cartas = barajarCartas(tablero.cartas);
  tablero.estadoPartida = "CeroCartasLevantadas";
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
};
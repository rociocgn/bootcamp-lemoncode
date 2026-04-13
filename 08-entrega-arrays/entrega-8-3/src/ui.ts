// ─── ui.ts ────────────────────────────────────────────────────────────────────

import { crearTableroInicial, Tablero } from "./modelo";
import {
  iniciaPartida,
  sePuedeVoltearLaCarta,
  voltearLaCarta,
  sonPareja,
  parejaEncontrada,
  parejaNoEncontrada,
} from "./motor";

// ─── Estado global ────────────────────────────────────────────────────────────

let tablero: Tablero = crearTableroInicial();
let intentos = 0;
let parejasEncontradas = 0;
let bloqueado = false;

// ─── Referencias al DOM ───────────────────────────────────────────────────────

const contenedorTablero = document.getElementById("tablero");
const btnIniciar = document.getElementById("btn-iniciar");
const spanIntentos = document.getElementById("intentos");
const spanParejas = document.getElementById("parejas");
const divMensaje = document.getElementById("mensaje");
const divGanaste = document.getElementById("ganaste");
const spanTotalIntentos = document.getElementById("total-intentos");

// ─── Render ───────────────────────────────────────────────────────────────────

const crearHTMLCarta = (idx: number): string => `
  <div class="carta-inner">
    <div class="cara cara-atras"></div>
    <div class="cara cara-frente">
      <img data-indice-imagen="${idx}"
           src="${tablero.cartas[idx].imagen}"
           alt="carta ${tablero.cartas[idx].idFoto}" />
    </div>
  </div>
`;

const crearDivCarta = (idx: number): HTMLDivElement => {
  const carta = tablero.cartas[idx];
  const divCarta = document.createElement("div");

  divCarta.className =
    "carta" +
    (carta.estaVuelta || carta.encontrada ? " volteada" : "") +
    (carta.encontrada ? " encontrada" : "");

  divCarta.dataset.indiceArray = String(idx);
  divCarta.innerHTML = crearHTMLCarta(idx);
  divCarta.addEventListener("click", () => manejarClick(idx));

  return divCarta;
};

const renderizarTablero = (): void => {
  if (!(contenedorTablero instanceof HTMLDivElement)) return;

  contenedorTablero.innerHTML = "";
  tablero.cartas.forEach((_, idx) => {
    contenedorTablero.appendChild(crearDivCarta(idx));
  });

  if (spanIntentos instanceof HTMLSpanElement)
    spanIntentos.textContent = String(intentos);
  if (spanParejas instanceof HTMLSpanElement)
    spanParejas.textContent = String(parejasEncontradas);
};

// ─── Lógica de pareja ─────────────────────────────────────────────────────────

const comprobarPareja = (indiceCartaA: number, indiceCartaB: number): void => {
  intentos++;

  if (sonPareja(indiceCartaA, indiceCartaB, tablero)) {
    parejaEncontrada(tablero, indiceCartaA, indiceCartaB);
    parejasEncontradas++;
    renderizarTablero();

    if (tablero.estadoPartida === "PartidaCompleta") {
      if (divMensaje instanceof HTMLDivElement)
        divMensaje.textContent = "";
      if (divGanaste instanceof HTMLDivElement)
        divGanaste.style.display = "block";
      if (spanTotalIntentos instanceof HTMLSpanElement)
        spanTotalIntentos.textContent = String(intentos);
    } else {
      if (divMensaje instanceof HTMLDivElement)
        divMensaje.textContent = "¡Pareja encontrada! Elige otra carta.";
    }
  } else {
    bloqueado = true;
    if (divMensaje instanceof HTMLDivElement)
      divMensaje.textContent = "No coinciden. Volviendo boca abajo…";

    setTimeout(() => {
      parejaNoEncontrada(tablero, indiceCartaA, indiceCartaB);
      bloqueado = false;
      renderizarTablero();
      if (divMensaje instanceof HTMLDivElement)
        divMensaje.textContent = "Elige una carta.";
    }, 1000);
  }
};

// ─── Lógica de click ──────────────────────────────────────────────────────────

const manejarClick = (indice: number): void => {
  if (bloqueado) return;

  if (sePuedeVoltearLaCarta(tablero, indice)) {
    voltearLaCarta(tablero, indice);
    renderizarTablero();

    if (tablero.estadoPartida === "UnaCartaLevantada") {
      if (divMensaje instanceof HTMLDivElement)
        divMensaje.textContent = "Ahora elige la segunda carta.";
      return;
    }

    const indiceCartaA = tablero.indiceCartaVolteadaA;
    const indiceCartaB = tablero.indiceCartaVolteadaB;

    if (indiceCartaA !== undefined && indiceCartaB !== undefined) {
      comprobarPareja(indiceCartaA, indiceCartaB);
    }
  } else {
    if (divMensaje instanceof HTMLDivElement)
      divMensaje.textContent = "Esta carta no se puede voltear.";
  }
};

// ─── Iniciar partida ──────────────────────────────────────────────────────────

if (btnIniciar instanceof HTMLButtonElement) {
  btnIniciar.addEventListener("click", () => {
    tablero = crearTableroInicial();
    iniciaPartida(tablero);
    intentos = 0;
    parejasEncontradas = 0;
    bloqueado = false;
    if (divGanaste instanceof HTMLDivElement)
      divGanaste.style.display = "none";
    if (divMensaje instanceof HTMLDivElement)
      divMensaje.textContent = "Elige una carta.";
    renderizarTablero();
  });
}

// ─── Arranque inicial ─────────────────────────────────────────────────────────

renderizarTablero();
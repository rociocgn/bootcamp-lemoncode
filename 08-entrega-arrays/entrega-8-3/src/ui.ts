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
let bloqueado = false;          // evita clicks mientras se ejecuta el timeout

// ─── Referencias al DOM ───────────────────────────────────────────────────────

const contenedorTablero = document.getElementById(
  "tablero"
) as HTMLDivElement;
const btnIniciar = document.getElementById(
  "btn-iniciar"
) as HTMLButtonElement;
const spanIntentos = document.getElementById("intentos") as HTMLSpanElement;
const spanParejas = document.getElementById("parejas") as HTMLSpanElement;
const divMensaje = document.getElementById("mensaje") as HTMLDivElement;
const divGanaste = document.getElementById("ganaste") as HTMLDivElement;
const spanTotalIntentos = document.getElementById(
  "total-intentos"
) as HTMLSpanElement;

// ─── Render ───────────────────────────────────────────────────────────────────

const renderizarTablero = (): void => {
  contenedorTablero.innerHTML = "";

  tablero.cartas.forEach((carta, idx) => {
    const divCarta = document.createElement("div");
    divCarta.className =
      "carta" +
      (carta.estaVuelta || carta.encontrada ? " volteada" : "") +
      (carta.encontrada ? " encontrada" : "");

    // data attributes para mapear div <-> posición del array
    divCarta.dataset.indiceArray = String(idx);

    divCarta.innerHTML = `
      <div class="carta-inner">
        <div class="cara cara-atras"></div>
        <div class="cara cara-frente">
        <img data-indice-imagen="${idx}" src="${carta.imagen}" alt="carta ${carta.idFoto}" />
        </div>
      </div>
    `;

    divCarta.addEventListener("click", () => manejarClick(idx));
    contenedorTablero.appendChild(divCarta);
  });

  spanIntentos.textContent = String(intentos);
  spanParejas.textContent = String(parejasEncontradas);
};

// ─── Lógica de click ──────────────────────────────────────────────────────────

const manejarClick = (indice: number): void => {
  if (bloqueado) return;
  if (!sePuedeVoltearLaCarta(tablero, indice)) return;

  voltearLaCarta(tablero, indice);  // solo una vez
  renderizarTablero();

  if (tablero.estadoPartida === "UnaCartaLevantada") {
    divMensaje.textContent = "Ahora elige la segunda carta.";
    return;
  }

  // Si llegamos aquí estamos en DosCartasLevantadas
  const a = tablero.indiceCartaVolteadaA;
  const b = tablero.indiceCartaVolteadaB;

  if (a === undefined || b === undefined) return;

  intentos++;

  if (sonPareja(a, b, tablero)) {
    parejaEncontrada(tablero, a, b);
    parejasEncontradas++;
    renderizarTablero();

    if (tablero.estadoPartida === "PartidaCompleta") {
      divMensaje.textContent = "";
      divGanaste.style.display = "block";
      spanTotalIntentos.textContent = String(intentos);
    } else {
      divMensaje.textContent = "¡Pareja encontrada! Elige otra carta.";
    }
  } else {
    bloqueado = true;
    divMensaje.textContent = "No coinciden. Volviendo boca abajo…";

    setTimeout(() => {
      parejaNoEncontrada(tablero, a, b);
      bloqueado = false;
      renderizarTablero();
      divMensaje.textContent = "Elige una carta.";
    }, 1000);
  }
};

// ─── Iniciar partida ──────────────────────────────────────────────────────────

btnIniciar.addEventListener("click", () => {
  tablero = crearTableroInicial();
  iniciaPartida(tablero);
  intentos = 0;
  parejasEncontradas = 0;
  bloqueado = false;
  divGanaste.style.display = "none";
  divMensaje.textContent = "Elige una carta.";
  renderizarTablero();
});

// ─── Arranque inicial ─────────────────────────────────────────────────────────

renderizarTablero();
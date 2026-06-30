import { obtenerPersonajes } from "./api.js";
import { normalizarListadoPersonajes } from "./modelo.js";
import {
  mostrarCargando,
  ocultarCargando,
  mostrarError,
  pintarPersonajes,
  obtenerValorBusqueda,
  limpiarCampoBusqueda,
} from "./ui.js";

// ---- Referencias a los elementos con los que interactúa el usuario ----
const botonBuscar = document.getElementById("searchBtn");
const botonReiniciar = document.getElementById("resetBtn");
const campoBusqueda = document.getElementById("searchInput");

// Pide los datos a la API, los normaliza y pide a la UI que los pinte
async function buscarYMostrarPersonajes(filtro) {
  mostrarCargando();

  try {
    const datosBrutos = await obtenerPersonajes(filtro);
    const personajes = normalizarListadoPersonajes(datosBrutos);
    ocultarCargando();
    pintarPersonajes(personajes, filtro);
  } catch (error) {
    ocultarCargando();
    mostrarError(error.message);
    console.log(error);
  }
}

// ============================================================
//  Eventos
// ============================================================

botonBuscar.addEventListener("click", function () {
  const textoBuscado = obtenerValorBusqueda();
  buscarYMostrarPersonajes(textoBuscado);
});

botonReiniciar.addEventListener("click", function () {
  limpiarCampoBusqueda();
  buscarYMostrarPersonajes("");
});

campoBusqueda.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    const textoBuscado = obtenerValorBusqueda();
    buscarYMostrarPersonajes(textoBuscado);
  }
});

// ============================================================
//  Arranque: al cargar la página se piden todos los personajes
// ============================================================

buscarYMostrarPersonajes("");
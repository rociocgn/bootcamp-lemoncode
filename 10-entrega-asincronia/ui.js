import { obtenerUrlImagen } from "./api.js";

// ---- Referencias al DOM ----
const elementoContenedor   = document.getElementById("personajesContainer");
const elementoCargando     = document.getElementById("loadingMsg");
const elementoError        = document.getElementById("errorMsg");
const elementoVacio        = document.getElementById("emptyMsg");
const elementoContador     = document.getElementById("resultsCount");
const elementoInputBuscar  = document.getElementById("searchInput");

/**
 * Muestra el estado de carga y limpia los resultados/errores previos.
 */
function mostrarCargando() {
  elementoCargando.classList.remove("hidden");
  elementoContenedor.innerHTML = "";
  elementoError.classList.add("hidden");
  elementoVacio.classList.add("hidden");
  elementoContador.textContent = "";
}

/**
 * Oculta el estado de carga.
 */
function ocultarCargando() {
  elementoCargando.classList.add("hidden");
}

// ============================================================
//  ui.js
//  Responsabilidad: pintar y manipular el DOM.
//  No hace peticiones HTTP ni decide qué es un personaje válido.
// ============================================================

import { obtenerUrlImagen } from "./api.js";

// ---- Referencias al DOM ----
const elementoContenedor = document.getElementById("personajesContainer");
const elementoCargando = document.getElementById("loadingMsg");
const elementoError = document.getElementById("errorMsg");
const elementoVacio = document.getElementById("emptyMsg");
const elementoContador = document.getElementById("resultsCount");
const elementoInputBuscar = document.getElementById("searchInput");

// Muestra el estado de carga y limpia resultados anteriores
function mostrarCargando() {
  elementoCargando.classList.remove("hidden");
  elementoContenedor.innerHTML = "";
  elementoError.classList.add("hidden");
  elementoVacio.classList.add("hidden");
  elementoContador.textContent = "";
}

// Oculta el estado de carga
function ocultarCargando() {
  elementoCargando.classList.add("hidden");
}

// Muestra un mensaje de error
function mostrarError(mensaje) {
  elementoError.textContent = "❌ Error: " + mensaje;
  elementoError.classList.remove("hidden");
}

// Muestra el mensaje de "sin resultados"
function mostrarVacio() {
  elementoVacio.classList.remove("hidden");
}

// Calcula y muestra el texto del contador de resultados
function actualizarContador(cantidad, filtro) {
  if (cantidad === 0) {
    elementoContador.textContent = "";
    return;
  }

  let plural = "";
  if (cantidad !== 1) {
    plural = "s";
  }

  let texto = "";
  if (filtro) {
    texto = cantidad + " personaje" + plural + " encontrado" + plural + " con «" + filtro + "»";
  } else {
    texto = cantidad + " personaje" + plural + " en el archivo";
  }

  elementoContador.textContent = texto;
}

// Crea el elemento HTML (tarjeta) de un personaje
function crearTarjetaPersonaje(personaje) {
  const urlImagen = obtenerUrlImagen(personaje.imagen);

  let habilidadesHtml = "";
  for (let i = 0; i < personaje.habilidades.length; i++) {
    habilidadesHtml += '<span class="badge">' + personaje.habilidades[i] + "</span>";
  }

  let apodoHtml = "";
  if (personaje.apodo && personaje.apodo !== personaje.nombre) {
    apodoHtml = '<p class="card__apodo">"' + personaje.apodo + '"</p>';
  }

  let especialidadHtml = "";
  if (personaje.especialidad) {
    especialidadHtml = "<dt>Especialidad</dt><dd>" + personaje.especialidad + "</dd>";
  }

  let amigoHtml = "";
  if (personaje.amigo) {
    amigoHtml = "<dt>Mejor amigo</dt><dd>" + personaje.amigo + "</dd>";
  }

  let bloqueHabilidadesHtml = "";
  if (habilidadesHtml !== "") {
    bloqueHabilidadesHtml =
      '<div class="card__habilidades">' +
      '<span class="card__habilidades-label">Habilidades:</span>' +
      '<div class="badges">' + habilidadesHtml + "</div>" +
      "</div>";
  }

  const tarjeta = document.createElement("article");
  tarjeta.classList.add("card");
  tarjeta.innerHTML =
    '<div class="card__img-wrapper">' +
    '<img src="' + urlImagen + '" alt="' + personaje.nombre + '" class="card__img" loading="lazy" ' +
    'onerror="this.src=\'https://placehold.co/180x220/f5e6c8/3a2a1a?text=Sin+imagen\'" />' +
    "</div>" +
    '<div class="card__body">' +
    '<h2 class="card__nombre">' + personaje.nombre + "</h2>" +
    apodoHtml +
    '<dl class="card__info">' + especialidadHtml + amigoHtml + "</dl>" +
    bloqueHabilidadesHtml +
    "</div>";

  return tarjeta;
}

// Pinta el listado completo de personajes en el contenedor principal
function pintarPersonajes(personajes, filtro) {
  elementoContenedor.innerHTML = "";

  if (personajes.length === 0) {
    mostrarVacio();
    actualizarContador(0, filtro);
    return;
  }

  actualizarContador(personajes.length, filtro);

  for (let i = 0; i < personajes.length; i++) {
    const tarjeta = crearTarjetaPersonaje(personajes[i]);
    tarjeta.style.animationDelay = (i * 60) + "ms";
    elementoContenedor.appendChild(tarjeta);
  }
}

// Devuelve el texto que el usuario ha escrito en el buscador
function obtenerValorBusqueda() {
  return elementoInputBuscar.value;
}

// Vacía el campo de búsqueda
function limpiarCampoBusqueda() {
  elementoInputBuscar.value = "";
}

export {
  mostrarCargando,
  ocultarCargando,
  mostrarError,
  pintarPersonajes,
  obtenerValorBusqueda,
  limpiarCampoBusqueda,
};
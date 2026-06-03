
const API_BASE = "http://localhost:3000";
const ENDPOINT = `${API_BASE}/personajes`;

// ---- Referencias al DOM ----
const searchInput      = document.getElementById("searchInput");
const searchBtn        = document.getElementById("searchBtn");
const resetBtn         = document.getElementById("resetBtn");
const container        = document.getElementById("personajesContainer");
const loadingMsg       = document.getElementById("loadingMsg");
const errorMsg         = document.getElementById("errorMsg");
const emptyMsg         = document.getElementById("emptyMsg");
const resultsCount     = document.getElementById("resultsCount");

// ---- Estado ----
let currentFilter = "";


//  Funciones de UI (mostrar / ocultar secciones)

function showLoading() {
  loadingMsg.classList.remove("hidden");
  container.innerHTML = "";
  errorMsg.classList.add("hidden");
  emptyMsg.classList.add("hidden");
  resultsCount.textContent = "";
}

function hideLoading() {
  loadingMsg.classList.add("hidden");
}

function showError(message) {
  errorMsg.textContent = `❌ Error: ${message}`;
  errorMsg.classList.remove("hidden");
}

function showEmpty() {
  emptyMsg.classList.remove("hidden");
}


//  Construcción de la URL con filtro opcional

function buildUrl(nombre) {
  if (nombre && nombre.trim() !== "") {
    return `${ENDPOINT}?nombre_like=${encodeURIComponent(nombre.trim())}`;
  }
  return ENDPOINT;
}


//  Llamada a la API


async function fetchPersonajes(nombre = "") {
  const url = buildUrl(nombre);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`La API respondió con estado ${response.status}`);
  }

  const data = await response.json();
  return data;
}


//  Renderizado de tarjetas


function crearTarjeta(personaje) {
  const imagenUrl = `${API_BASE}/${personaje.imagen}`;

  const habilidades = Array.isArray(personaje.habilidades)
    ? personaje.habilidades.map(h => `<span class="badge">${h}</span>`).join("")
    : "";

  const card = document.createElement("article");
  card.classList.add("card");
  card.innerHTML = `
    <div class="card__img-wrapper">
      <img
        src="${imagenUrl}"
        alt="${personaje.nombre}"
        class="card__img"
        loading="lazy"
        onerror="this.src='https://placehold.co/180x220/f5e6c8/3a2a1a?text=Sin+imagen'"
      />
    </div>
    <div class="card__body">
      <h2 class="card__nombre">${personaje.nombre}</h2>
      ${personaje.apodo && personaje.apodo !== personaje.nombre
        ? `<p class="card__apodo">"${personaje.apodo}"</p>`
        : ""}
      <dl class="card__info">
        ${personaje.especialidad ? `<dt>Especialidad</dt><dd>${personaje.especialidad}</dd>` : ""}
        ${personaje.amigo        ? `<dt>Mejor amigo</dt><dd>${personaje.amigo}</dd>`        : ""}
      </dl>
      ${habilidades
        ? `<div class="card__habilidades">
             <span class="card__habilidades-label">Habilidades:</span>
             <div class="badges">${habilidades}</div>
           </div>`
        : ""}
    </div>
  `;
  return card;
}

function renderPersonajes(personajes) {
  container.innerHTML = "";

  if (personajes.length === 0) {
    showEmpty();
    resultsCount.textContent = "";
    return;
  }

  const label = currentFilter
    ? `${personajes.length} personaje${personajes.length !== 1 ? "s" : ""} encontrado${personajes.length !== 1 ? "s" : ""} con «${currentFilter}»`
    : `${personajes.length} personaje${personajes.length !== 1 ? "s" : ""} en el archivo`;

  resultsCount.textContent = label;

  personajes.forEach((personaje, index) => {
    const card = crearTarjeta(personaje);
    card.style.animationDelay = `${index * 60}ms`;
    container.appendChild(card);
  });
}


//  Función principal de búsqueda


async function buscarPersonajes(nombre = "") {
  currentFilter = nombre;
  showLoading();

  try {
    const personajes = await fetchPersonajes(nombre);
    hideLoading();
    renderPersonajes(personajes);
  } catch (error) {
    hideLoading();
    showError(error.message || "No se pudo conectar con la API. ¿Está arrancado el servidor?");
    console.error(error);
  }
}


//  Manejadores de eventos

searchBtn.addEventListener("click", () => {
  buscarPersonajes(searchInput.value);
});

resetBtn.addEventListener("click", () => {
  searchInput.value = "";
  buscarPersonajes("");
});

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    buscarPersonajes(searchInput.value);
  }
});


//  Arranque: carga inicial con todos los personajes

buscarPersonajes();
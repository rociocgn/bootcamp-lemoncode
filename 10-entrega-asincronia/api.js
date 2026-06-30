const URL_BASE = "http://localhost:3000";
const URL_PERSONAJES = URL_BASE + "/personajes";

// Construye la URL final, añadiendo el filtro de nombre si existe
function construirUrl(nombre) {
  if (nombre !== "" && nombre !== undefined) {
    return URL_PERSONAJES + "?nombre_like=" + nombre;
  } else {
    return URL_PERSONAJES;
  }
}

// Pide a la API el listado de personajes (todos o filtrados por nombre)
async function obtenerPersonajes(nombre) {
  const url = construirUrl(nombre);
  const respuesta = await fetch(url);

  if (respuesta.ok === false) {
    throw new Error("La API respondió con estado " + respuesta.status);
  }

  const datos = await respuesta.json();
  return datos;
}

// Construye la URL completa de la imagen de un personaje
function obtenerUrlImagen(nombreImagen) {
  return URL_BASE + "/" + nombreImagen;
}

export { obtenerPersonajes, obtenerUrlImagen };
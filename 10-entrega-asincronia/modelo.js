// Comprueba si un personaje recibido de la API tiene los datos mínimos
function esPersonajeValido(personaje) {
  if (personaje === null || personaje === undefined) {
    return false;
  }
  if (typeof personaje.nombre !== "string") {
    return false;
  }
  return true;
}

// Se asegura de que el personaje tenga todos los campos, aunque vengan vacíos
function normalizarPersonaje(personaje) {
  const habilidades = Array.isArray(personaje.habilidades) ? personaje.habilidades : [];

  const personajeNormalizado = {
    id: personaje.id || "",
    nombre: personaje.nombre || "Sin nombre",
    apodo: personaje.apodo || "",
    especialidad: personaje.especialidad || "",
    habilidades: habilidades,
    amigo: personaje.amigo || "",
    imagen: personaje.imagen || "",
  };

  return personajeNormalizado;
}

// Recorre el listado completo y normaliza cada personaje válido
function normalizarListadoPersonajes(listado) {
  const listadoNormalizado = [];

  if (Array.isArray(listado) === false) {
    return listadoNormalizado;
  }

  for (let i = 0; i < listado.length; i++) {
    if (esPersonajeValido(listado[i])) {
      listadoNormalizado.push(normalizarPersonaje(listado[i]));
    }
  }

  return listadoNormalizado;
}

export { normalizarListadoPersonajes };
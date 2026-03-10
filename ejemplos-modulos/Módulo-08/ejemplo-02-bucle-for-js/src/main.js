
const nombres = ['Juan', 'María', 'Pedro', 'Ana'];

const mostrarNombreEnPagina = (nombre) => {
    const div = document.getElementById("lista-nombres");
    const parrafo = document.createElement("p");

    parrafo.textContent = nombre;
    div.appendChild(parrafo);
};

for (let i = 0; i < nombres.length; i++) {
    mostrarNombreEnPagina(nombres[i]);
}
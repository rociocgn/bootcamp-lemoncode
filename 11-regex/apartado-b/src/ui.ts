import { extraerImagenes } from "./extractorImagenes";

function pintarImagenes(urls: string[]): void {
  const contenedor = document.getElementById("contenedor-imagenes") as HTMLDivElement;

  if (urls.length === 0) {
    contenedor.innerHTML = `<p class="aviso">No se han encontrado imágenes.</p>`;
    return;
  }

  contenedor.innerHTML = urls
    .map(
      (url) => `
        <div class="tarjeta-imagen">
          <img src="${url}" alt="Imagen extraída" />
          <p class="url-imagen">${url}</p>
        </div>
      `
    )
    .join("");
}

function configurarFormulario(): void {
  const boton = document.getElementById("boton-extraer") as HTMLButtonElement;
  const textarea = document.getElementById("textarea-html") as HTMLTextAreaElement;

  boton.addEventListener("click", () => {
    const imagenes = extraerImagenes(textarea.value);
    const urls = imagenes.map((imagen) => imagen.url);
    pintarImagenes(urls);
  });
}

document.addEventListener("DOMContentLoaded", configurarFormulario);
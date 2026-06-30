import { ImagenExtraida } from "./tipos";

// Busca tags <img ... src="URL" ... >
// - <img            -> empieza por <img
// - [^>]*?           -> cualquier atributo antes de src (de forma no codiciosa)
// - src="([^"]*)"    -> captura el contenido del atributo src
// - [^>]*>           -> el resto de atributos hasta el cierre del tag
const PATRON_TAG_IMG = /<img[^>]*?src="([^"]*)"[^>]*>/g;

export function extraerImagenes(html: string): ImagenExtraida[] {
  const resultados: ImagenExtraida[] = [];

  // Usamos matchAll porque el patrón tiene el flag "g" (global)
  const coincidencias = html.matchAll(PATRON_TAG_IMG);

  for (const coincidencia of coincidencias) {
    const url = coincidencia[1]; // grupo capturado: el valor de src
    resultados.push({ url });
  }

  return resultados;
}
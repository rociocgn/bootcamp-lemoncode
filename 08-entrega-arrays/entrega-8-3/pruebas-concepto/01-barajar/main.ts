// ─── POC 1 - Barajar un array de cartas ──────────────────────────────────────

interface InfoCarta {
  idFoto: number;
  imagen: string;
}

const cartas: InfoCarta[] = [
  { idFoto: 0, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png" },
  { idFoto: 1, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png" },
  { idFoto: 2, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png" },
  { idFoto: 3, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/4.png" },
  { idFoto: 4, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/5.png" },
  { idFoto: 5, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png" },
];

/**
 * Devuelve un nuevo array barajado usando el algoritmo Fisher-Yates.
 * Nunca muta el array original.
 */
const barajarCartas = <T>(array: T[]): T[] => {
  const resultado = [...array];
  for (let i = resultado.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [resultado[i], resultado[j]] = [resultado[j], resultado[i]];
  }
  return resultado;
};

const cartasBarajadas = barajarCartas(cartas);

console.log("Cartas originales:", cartas);
console.log("Cartas barajadas:", cartasBarajadas);
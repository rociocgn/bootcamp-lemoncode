// ENTREGA 8.3. JUEGO DE PAREJAS DE CARTAS

// PRUEBA DE CONCEPTO 1
const cartas = [ "🐝", "🦉", "🐔", "🐶", "🐷", "🦁","🐝", "🦉", "🐔", "🐶", "🐷", "🦁"]

const shuffleArray = <T>(array: T[]) => {
  const nuevoArrayCartas = [...array];

    for (let i = nuevoArrayCartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Intercambiar elementos
        [nuevoArrayCartas[i], nuevoArrayCartas[j]] = [nuevoArrayCartas[j], nuevoArrayCartas[i]];
    }
    return nuevoArrayCartas;
}

const cartasBarajadas = shuffleArray(cartas);
console.log(cartasBarajadas);
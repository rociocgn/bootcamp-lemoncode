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

// PRUEBA DE CONCEPTO 2. DAR VUELTA A LAS CARTAS
const carta = document.getElementById("carta");
const imagen = document.getElementById("imagenCarta") as HTMLImageElement;

if (carta && imagen) {
  carta.addEventListener("click", () => {
    imagen.src = "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/1.png"; // imagen de la carta
  });
}


// PRUEBA DE CONCEPTO 3. MOSTRAR GRID DE CARTAS 
/* Esto lo realizamos en el HTML con un div con id "carta" y una imagen dentro de ese div. 
Luego, en el CSS, le damos estilo para mostrarlo como un grid. */
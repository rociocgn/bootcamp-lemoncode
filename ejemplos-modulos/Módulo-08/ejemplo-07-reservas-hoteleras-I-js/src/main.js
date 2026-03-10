
const reservas = [ 
  { 
    id: 23453, 
    precio: 250, 
    habitacion: "standard", 
    prepago: false, 
    completadaConExito: true, 
  }, 
  { 
    id: 56456, 
    precio: 150, 
    habitacion: "superior", 
    prepago: false, 
    completadaConExito: true, 
  }, 
  { 
    id: 43243, 
    precio: 550, 
    habitacion: "standard", 
    prepago: true, 
    completadaConExito: false,
  }, 
  { 
    id: 23223, 
    precio: 550, 
    habitacion: "standard", 
    prepago: true, 
    completadaConExito: true,
  }, 
  { 
    id: 89232, 
    precio: 650, 
    habitacion: "superior", 
    prepago: true, 
    completadaConExito: false,
  }, 
]; 
 

let algunaHaFallado = false;

for (let i = 0; i < reservas.length; i++) {
    if (!reservas[i].completadaConExito) {
        algunaHaFallado = true;
        break;
    }
}

console.log("Alguna reserva ha fallado:", algunaHaFallado);


let reservasFallidas = [];

for (let i = 0; i < reservas.length; i++) {
    if (!reservas[i].completadaConExito) {
        reservasFallidas = [...reservasFallidas, reservas[i]];
    }
}

console.log("Reservas fallidas:", reservasFallidas);


let indiceDeReserva = -1;

for (let i = 0; i < reservas.length; i++) {
  if(reservas[i].habitacion === "standard") {
    indiceDeReserva = i;
    break;
  }
}

if (indiceDeReserva !== -1) {
  const reservaModificada = {
    ...reservas[indiceDeReserva],
    habitacion: "superior",
  };

  const nuevoArrayDeReservas = [
    ...reservas.slice(0, indiceDeReserva),
    reservaModificada,
    ...reservas.slice(indiceDeReserva + 1),
  ];
}

console.log(nuevoArrayDeReservas);
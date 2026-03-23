interface Reserva { 
  id: number; 
  precio: number; 
  habitacion: string; 
  prepago: boolean; 
  completadaConExito: boolean; 
} 


const reservas: Reserva[] = [ 
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


// 1. EVERY
const todasLasReservasCompletadasConExito = reservas.every((reserva) : boolean => reserva.completadaConExito); 

console.log("¿Todas las reservas se completaron con éxito?", todasLasReservasCompletadasConExito);


// 2. MAP
// Aplicamos un descuento del 10% a las reservas.

const reservasConDescuento = reservas.map((reserva) : Reserva => 
  ({
    ...reserva,
    precio: reserva.precio * 0.9
  })
);

console.log("Precios de las reservas:", reservasConDescuento);

// 3. REDUCE
// Calculamos el ingreso total de las reservas.

const ingresoTotal = reservas.reduce((total : number, reserva : Reserva) : number => total + reserva.precio, 0);
// Recuerda que "total" es el acumulador que se va actualizando con cada iteración, y "reserva.precio" es el valor que se suma al total en cada paso. El segundo argumento "0" es el valor inicial del acumulador.

console.log("Ingreso total de las reservas:", ingresoTotal);

// TE TOCA:
  // 4. SOME
  const hayReservasNoCompletadasConExito : boolean = reservas.some((reserva) : boolean => !reserva.completadaConExito);

  console.log(hayReservasNoCompletadasConExito);


  // 5. FILTER
  const reservasNoCompletadasConExito : Reserva[] = reservas.filter((reserva) : boolean => !reserva.completadaConExito);

  console.log(reservasNoCompletadasConExito);


  // 6. FIND
  const primeraReservaNoCompletadaConExito : Reserva | undefined = reservas.find((reserva) : boolean => !reserva.completadaConExito);

  console.log(primeraReservaNoCompletadaConExito);

  /*También vamos a buscar la primera reserva que tenga habitación standard. Luego haremos un upgrade a superior*/

  const primeraReservaStandard : Reserva | undefined = reservas.find((reserva) : boolean => reserva.habitacion === "standard");

  console.log(primeraReservaStandard);

    if (primeraReservaStandard) {
      primeraReservaStandard.habitacion = "superior";
    }

  console.log("Reserva después del upgrade:", primeraReservaStandard);


  // 7. FINDINDEX
  const indicePrimeraReservaNoCompletadaConExito : number = reservas.findIndex((reserva) : boolean => !reserva.completadaConExito);

  console.log(indicePrimeraReservaNoCompletadaConExito);


  // 8. SORTED
  const reservasOrdenadasPorPrecio : Reserva[] = reservas.toSorted((reservaA, reservaB) : number => reservaA.precio - reservaB.precio);

  console.log(reservas);
  console.log(reservasOrdenadasPorPrecio);

  // Si queremos ordenarlas de mayor a menor, simplemente invertimos la resta:

  const reservasOrdenadasPorPrecioDeMayorAMenor : Reserva[] = reservas.toSorted((reservaA, reservaB) : number => reservaB.precio - reservaA.precio);

  console.log(reservasOrdenadasPorPrecioDeMayorAMenor);


  // 9. FOREACH
  reservas.forEach((reserva) => console.log(reserva.id));
 

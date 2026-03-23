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

// 1. EVERY
/*Este método nos devuelve true si todos los elementos del array cumplen la condición que le pasamos.
En este caso, queremos saber si todas las reservas han sido completadas con éxito.*/

  // Ahora
const estanTodasCompletadasConExito = reservas.every((reserva) => reserva.completadaConExito);

// Lo que hacíamos antes
const estanTodasCompletadasConExito2 = () => {
  let estanTodasCompletadasConExito = true;

  for (let i = 0; i < reservas.length; i++) {
    if (!reservas[i].completadaConExito) {
      estanTodasCompletadasConExito = false;
    }
  }
  return estanTodasCompletadasConExito;
};

// 2. FILTER
/*Este método nos devuelve un nuevo array con los elementos que cumplen la condición que le pasamos. 
En este caso, queremos obtener un nuevo array con las reservas que no han sido completadas con éxito.*/

const reservasNoCompletadasConExito = reservas.filter((reserva) => !reserva.completadaConExito);

console.log(reservasNoCompletadasConExito);


// 3. FIND
/*Este método nos devuelve el primer elemento del array que cumple la condición que le pasamos. si ninguno la cumple, devuelve undefined.
En este caso, queremos obtener la primera reserva que no ha sido completada con éxito.*/

const primeraReservaNoCompletadaConExito = reservas.find((reserva) => !reserva.completadaConExito);

console.log(primeraReservaNoCompletadaConExito);

/*También vamos a buscar la primera reserva que tenga habitación standard. Luego haremos un upgrade a superior*/

const primeraReservaStandard = reservas.find((reserva) => reserva.habitacion === "standard");

console.log(primeraReservaStandard);

if (primeraReservaStandard) {
  primeraReservaStandard.habitacion = "superior";
}


// 4. FINDINDEX
/*Este método nos devuelve el índice del primer elemento del array que cumple la condición que le pasamos. Si ninguno la cumple, devuelve -1.
En este caso, queremos obtener el índice de la primera reserva que no ha sido completada con éxito.*/

const indicePrimeraReservaNoCompletadaConExito = reservas.findIndex((reserva) => !reserva.completadaConExito);

console.log(indicePrimeraReservaNoCompletadaConExito);

//5. TOSORTED
/*Este método nos devuelve un nuevo array con los elementos ordenados según la función de comparación que le pasamos. Por defecto, lo hace de menor a mayor.

¿Cómo trabaja ToSorted? Si el resultado es negativo, el primer elemento va antes que el segundo; si el resultado es positivo, 
el segundo elemento va antes que el primero y si el resultado es 0 (los dos son iguales), no se mueven

En este caso, queremos obtener un nuevo array con las reservas ordenadas por precio de menor a mayor.*/

const reservasOrdenadasPorPrecio = reservas.toSorted((reservaA, reservaB) => reservaA.precio - reservaB.precio);

console.log(reservas);
console.log(reservasOrdenadasPorPrecio);

// Si queremos ordenarlas de mayor a menor, simplemente invertimos la resta:

const reservasOrdenadasPorPrecioDeMayorAMenor = reservas.toSorted((reservaA, reservaB) => reservaB.precio - reservaA.precio);

console.log(reservasOrdenadasPorPrecioDeMayorAMenor);

// 6. MAP
/*Este método nos devuelve un nuevo array con los resultados de aplicar la función que le pasamos a cada elemento del array original. 
En este caso, queremos obtener un nuevo array con el precio de cada reserva tras aplicar un descuento del 10%. ES MUTABLE*/

const preciosConDescuento = reservas.map((reserva) => reserva.precio * 0.9); // Explicación paso a paso en el vídeo del Bootcamp.
console.log(preciosConDescuento);

// 7. REDUCE
/*Este método nos devuelve un único valor que se obtiene al aplicar la función que le pasamos a cada elemento del array, acumulando el resultado.
En este caso, queremos obtener el total de ingresos que han generado las reservas.*/

const totalIngresos = reservas.reduce((acumulador, reserva) => acumulador + reserva.precio, 0);

console.log(totalIngresos);


// 8. SOME
/*Este método nos devuelve true si al menos un elemento del array cumple la condición que le pasamos. 
En este caso, queremos saber si hay alguna reserva que no ha sido completada con éxito.*/

const hayReservasNoCompletadasConExito = reservas.some((reserva) => !reserva.completadaConExito);

console.log(hayReservasNoCompletadasConExito);


//También queremos saber si hay alguna reserva que tenga habitación superior y no haya sido completada con éxito:

const hayReservasSuperioresNoCompletadasConExito = reservas.some((reserva) => reserva.habitacion === "superior" && !reserva.completadaConExito);

console.log(hayReservasSuperioresNoCompletadasConExito);

// 9. FOREACH
/*Este método nos permite ejecutar una función para cada elemento del array. No devuelve nada.
En este caso, queremos imprimir por consola el id de cada reserva.*/

reservas.forEach((reserva) => console.log(reserva.id));

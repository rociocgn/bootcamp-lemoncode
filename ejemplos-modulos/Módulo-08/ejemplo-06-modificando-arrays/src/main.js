
const numeros = [1, 2, 3, 4, 5];

numeros[0] = 10; // Modificando el primer elemento del array
console.log(numeros); // [10, 2, 3, 4, 5]

const ana = { nombre: 'Ana', edad: 20 };

const personas = [
  ana,
  { nombre: 'Juan', edad: 30 },
  { nombre: 'María', edad: 25 },
];

personas[0] = {
  ...personas[0],
  edad: 21, // Modificando la edad de Ana (sólo aquí)
}

/* Como le pasamos a JS dos datos iguales (edad) prevalece el último valor introducido*/
console.log(ana); // { nombre: 'Ana', edad: 20 }
console.log(personas[0]); // { nombre: 'Ana', edad: 21 }
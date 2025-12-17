// CREAMOS LA FUNCIÓN DE CÁLCULO DEL AHORRO DE IVA

interface CalculoDiasinIVA {
    precioSinIVA: number;
    ahorro: number;
}

const calculoDiasinIVA = (precioTotal: number): CalculoDiasinIVA => {
    const precioBase = precioTotal / 1.21;
    
    //2. CALCULAMOS EL AHORRO
    const ahorroIVA = precioTotal - precioBase;

    
    //3. DEVOLVEMOS EL AHORRO
    return {
        precioSinIVA: precioBase,
        ahorro: ahorroIVA,
    };
}

// CREAMOS LA FUNCIÓN DE INTERACCIÓN CON EL USUARIO
    //1. OBTENEMOS LOS ELEMENTOS DEL DOM
const botonCalculo = document.getElementById('botonCalculo') as HTMLButtonElement;
const inputPrecioTotal = document.getElementById('precioTotal') as HTMLInputElement;
const spanPrecioBase = document.getElementById('precioBase') as HTMLSpanElement;
const spanAhorroIVA = document.getElementById('ahorroIVA') as HTMLSpanElement;

/*
Debemos plantear qué ocurre si el usuario introduce un valor no numérico o negativo. En este caso, podríamos mostrar un mensaje de error o simplemente no realizar el cálculo.
¿Qué debería hacer la app en estos casos?
    - NO calcular
    - Mostrar un mensaje de error (Avisar al usuario)

SI el valor del input NO es válido (NaN o negativo), NO hacer el cálculo y mostrar un mensaje de error.
SI NO es así, HACER el cálculo y mostrar el resultado.
Dentro del addEventListener, podemos añadir una validación para comprobar si el valor introducido es válido antes de proceder con el cálculo.
*/

    //2. CREAMOS EL EVENTO AL HACER CLICK EN EL BOTÓN
botonCalculo.addEventListener('click', () => {
    //3. OBTENEMOS EL VALOR DEL INPUT
    const precioTotal = Number(inputPrecioTotal.value);

    //VALIDACIÓN DEL INPUT
    if (isNaN(precioTotal) || precioTotal <= 0) {
        alert('Por favor, introduce un valor numérico válido y positivo para el precio total.');
        return; // Salimos de la función si el valor no es válido
    }
    //4. LLAMAMOS A LA FUNCIÓN DE CÁLCULO
    const resultado = calculoDiasinIVA(precioTotal);

    //5. MOSTRAMOS EL RESULTADO EN EL HTML
    spanPrecioBase.textContent = resultado.precioSinIVA.toFixed(2); // Redondeamos a 2 decimales
    spanAhorroIVA.textContent = resultado.ahorro.toFixed(2);
});

// NOTA: Hemos separado la lógica de cálculo de la lógica de interacción con el usuario para mantener el código limpio y modular.

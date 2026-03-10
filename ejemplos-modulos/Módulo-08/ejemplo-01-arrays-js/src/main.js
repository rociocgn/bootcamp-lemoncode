
const nombres = ['Juan', 'María', 'Pedro', 'Ana'];

nombres[0] // Accede al primer elemento del array
nombres[nombres.length - 1] // Accede al último elemento del array


for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === 'Maria') {
        console.log('¡Esa María OOOEE!');
    }else {
        console.log(nombres[i]);
    }
}
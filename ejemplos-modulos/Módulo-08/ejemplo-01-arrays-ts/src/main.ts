const edades : number[] = [25, 30, 35, 40, 45];

const peliculas : string[] = ["Inception", "The Matrix", "Interstellar", "The Dark Knight"];

interface Cliente {
    id : number,
    nombre : string,
}

const clientes : Cliente[] = [
    { 
        id: 1, 
        nombre: "Juan" 
    },
    { 
        id: 2, 
        nombre: "María" 
    },
    { 
        id: 3, 
        nombre: "Pedro" 
    },
];

const batiburrillo : (number | string | boolean)[] = [25, "Inception", true, 30, "The Matrix", false];
interface Persona {
    nombre: string;
    edad: number;
}

const ana : Persona = {
    nombre: "Ana",
    edad: 20
}

const personas : Persona[] = [
    ana,
    { nombre: "Luis", edad: 30},
    { nombre: "Maria", edad: 25}
]   

personas[0].edad = 21;

personas[1] = {
    ...personas[1],
    edad: 31
}
    
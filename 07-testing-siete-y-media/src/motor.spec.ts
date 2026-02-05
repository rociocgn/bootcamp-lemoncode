import { vi } from "vitest";
import { partida } from "./modelo";
import { obtenerPuntosCarta, obtenerMensajePlantarse, obtenerMensajeSimulacion, generarNumeroAleatorio, generarNumeroCarta } from "./motor";


describe("obtenerMensajeSimulacion", () => {
    it("Cuando la puntuación supera los 7.5 puntos, debería devolver el mensaje 'Si hubieras seguido jugando, habrías perdido con una puntuación de ${puntuacion + puntosCarta}'", () => {

        //Arrange
        const puntosCarta : number = 3.5;
        const puntuacion : number = 5;
        const mensaje = "Si hubieras seguido jugando, habrías perdido con una puntuación de 8.5";

        //Act
        const resultado = obtenerMensajeSimulacion(puntosCarta, puntuacion);

        //Assert
        expect(resultado).toBe(mensaje);
    });

    it("Cuando la puntuación no supera los 7.5 puntos, debería devolver el mensaje 'Si hubieras seguido jugando, habrías tenido una puntuación de ${puntuacion + puntosCarta}'", () => {

        //Arrange
        const puntosCarta : number = 1.5;
        const puntuacion : number = 5;
        const mensaje = "Si hubieras seguido jugando, habrías tenido una puntuación de 6.5";

        //Act
        const resultado = obtenerMensajeSimulacion(puntosCarta, puntuacion);

        //Assert
        expect(resultado).toBe(mensaje);
    });
});


describe("obtenerMensajePlantarse", () => {
    it("Cuando la puntuación es inferior a 4, debería devolver el mensaje 'Has sido muy conservador'", () => {

        //Arrange
        const mensaje : string = "Has sido muy conservador";
        const puntuacionEsperada : number = 3;

        vi.spyOn(partida, "puntuacion", "get").mockReturnValue(puntuacionEsperada);

        //Act
        const resultado = obtenerMensajePlantarse();

        //Assert
        expect(resultado).toBe(mensaje);
    });

    it("Cuando la puntuación es un valor entre 4.5 - 5.5, debería devolver el mensaje 'Te ha entrado el canguelo eh?'", () => {

        //Arrange
        const mensaje : string = "Te ha entrado el canguelo eh?";
        const puntuacionEsperada : number = 5;

        vi.spyOn(partida, "puntuacion", "get").mockReturnValue(puntuacionEsperada);

        //Act
        const resultado = obtenerMensajePlantarse();

        //Assert
        expect(resultado).toBe(mensaje);
    });

    it("Cuando la puntuación es un valor entre 6 - 7, debería devolver el mensaje 'Casi, casi...'", () => {

        //Arrange
        const mensaje : string = "Casi, casi...";
        const puntuacionEsperada : number = 6.5;

        vi.spyOn(partida, "puntuacion", "get").mockReturnValue(puntuacionEsperada);

        //Act
        const resultado = obtenerMensajePlantarse();

        //Assert
        expect(resultado).toBe(mensaje);
    });

      it("Cuando la puntuación es 7.5 , debería devolver el mensaje '¡Lo has clavado! ¡Enhorabuena!'", () => {

        //Arrange
        const mensaje : string = "¡Lo has clavado! ¡Enhorabuena!";
        const puntuacionEsperada : number = 7.5;

        vi.spyOn(partida, "puntuacion", "get").mockReturnValue(puntuacionEsperada);

        //Act
        const resultado = obtenerMensajePlantarse();

        //Assert
        expect(resultado).toBe(mensaje);
    });
});

describe("obtenerPuntosCarta", () => {
    it("Si la puntuación es mayor que 7, debería devolver 0.5 puntos", () => {

        //Arrange
        const numeroCarta : number = 10;
        const puntuacionEsperada : number = 0.5;

        //Act
        const resultado = obtenerPuntosCarta(numeroCarta);

        //Assert
        expect(resultado).toBe(puntuacionEsperada);
    });

    it("Si la puntuación es inferior a 7, debería devolver el mismo valor que aparece en la carta", () => {

        //Arrange
        const numeroCarta : number = 5;
        const puntuacionEsperada : number = 5;

        //Act
        const resultado = obtenerPuntosCarta(numeroCarta);

        //Assert
        expect(resultado).toBe(puntuacionEsperada);
    });
});


//APARTADO OPCIONAL

describe("generarNumeroAleatorio", () => {
    it("Forzamos a Math.random a devolver 0 y el resultado debería ser 1", () => {

        //Arrange
        const numeroEsperado = 1;
        vi.spyOn(global.Math, "random").mockReturnValue(0);

        //Act
        const resultado = generarNumeroAleatorio();


        //Assert
        expect(resultado).toBe(numeroEsperado);
    });

        it("Forzamos a Math.random a devolver 1 y el resultado debería ser 10", () => {

        //Arrange
        const numeroEsperado = 10;
        vi.spyOn(global.Math, "random").mockReturnValue(0.999);

        //Act
        const resultado = generarNumeroAleatorio();


        //Assert
        expect(resultado).toBe(numeroEsperado);
    });

     it("Forzamos a Math.random a devolver 0.4 y el resultado debería ser 5", () => {

        //Arrange
        const numeroEsperado = 5;
        vi.spyOn(global.Math, "random").mockReturnValue(0.4);

        //Act
        const resultado = generarNumeroAleatorio();


        //Assert
        expect(resultado).toBe(numeroEsperado);
    });
});


describe("generarNumeroCarta", () => {
     it("Si el número aletaorio generado es mayor que 7, se le debería de sumar 2 al valor", () => {

        //Arrange
        const numeroAle : number = 10;
        const valorEsperado : number = 12;

        //Act
        const resultado = generarNumeroCarta(numeroAle);

        //Assert
        expect(resultado).toBe(valorEsperado);
    });

      it("Si el número aletaorio generado es inferior o igual a 7, se debería devolver el valor obtenido", () => {

        //Arrange
        const numeroAle : number = 5;
        const valorEsperado : number = 5;

        //Act
        const resultado = generarNumeroCarta(numeroAle);

        //Assert
        expect(resultado).toBe(valorEsperado);
    });
});

// La función obtenerPuntosCarta ya fue testeada en el apartado obligatorio, por lo que no se repite en el opcional
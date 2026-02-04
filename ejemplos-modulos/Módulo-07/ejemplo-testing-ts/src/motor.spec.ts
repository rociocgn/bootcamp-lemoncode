import {vi} from "vitest";
import { Estado, partida } from "./modelo";
import { comprobarNumero, comprobarNumeroB } from "./motor";


describe("comprobarNumeroB", () => {
    it("El número es mayor que el número a acertar", () => {

        //Arrange
        const texto : string = "24";
        const numeroParaAdivinar : number = 23;
        const resultadoEsperado : Estado = "EL_NUMERO_ES_MAYOR";

        //Act
        const resultado : Estado = comprobarNumeroB(texto, numeroParaAdivinar); 

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("El número es menor que el número a acertar", () => {

        //Arrange
        const texto : string = "22";
        const numeroParaAdivinar : number = 23;
        const resultadoEsperado : Estado = "EL_NUMERO_ES_MENOR";

        //Act
        const resultado : Estado = comprobarNumeroB(texto, numeroParaAdivinar); 

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });

     it("El número es igual que el número a acertar", () => {

        //Arrange
        const texto : string = "23";
        const numeroParaAdivinar : number = 23;
        const resultadoEsperado : Estado = "ES_EL_NUMERO_SECRETO";

        //Act
        const resultado : Estado = comprobarNumeroB(texto, numeroParaAdivinar); 

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("El texto no es un número", () => {

        //Arrange
        const texto : string = "Esto no es un número";
        const numeroParaAdivinar : number = 23;
        const resultadoEsperado : Estado = "NO_ES_UN_NUMERO";

        //Act
        const resultado : Estado = comprobarNumeroB(texto, numeroParaAdivinar); 

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });

})

describe("comprobarNumero", () => {
    it("Debería devolver NO_ES_UN_NUMERO si el texto introducido no es un número", () => {
        //Arrange
        const texto = "Esto no es un número";
        const resultadoEsperado : Estado = "NO_ES_UN_NUMERO";

        //Act
        const resultado : Estado = comprobarNumero(texto);

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("Debería devoler ES_EL_NUMERO_SECRETO cuando el texto es igual que el número a acertar", () => {

        //Arrange
        const resultadoEsperado : Estado = "ES_EL_NUMERO_SECRETO";
        const texto : string = "23";
        vi.spyOn(partida, "numeroParaAdivinar", "get").mockReturnValue(23);

        //Act
        const resultado : Estado = comprobarNumero(texto);

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("Debería devolver EL_NUMERO_ES_MENOR si el texto es menor que el número a acertar", () => {

        //Arrange
        const resultadoEsperado : Estado = "EL_NUMERO_ES_MENOR";
        const texto : string = "22";
        vi.spyOn(partida, "numeroParaAdivinar", "get").mockReturnValue(23);

        //Act
        const resultado : Estado = comprobarNumero(texto);

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    
    it("Debería devolver EL_NUMERO_ES_MAYOR si el texto es mayor que el número a acertar", () => {

        //Arrange
        const resultadoEsperado : Estado = "EL_NUMERO_ES_MAYOR";
        const texto : string = "24";
        vi.spyOn(partida, "numeroParaAdivinar", "get").mockReturnValue(23);

        //Act
        const resultado : Estado = comprobarNumero(texto);

        //Assert
        expect(resultado).toBe(resultadoEsperado)
    });

    it("Debería devolver GAME_OVER_MAXIMO_INTENTOS si se supera el máximo de intentos", () => {

        //Arrange
        const resultadoEsperado : Estado = "GAME_OVER_MAXIMO_INTENTOS";
        const texto : string = "30";
        vi.spyOn(partida, "numeroParaAdivinar", "get").mockReturnValue(23);

        const maximoIntentos = 5;
        vi.spyOn(partida, "intentos", "get").mockReturnValue(maximoIntentos);

        //Act
        const resultado : Estado = comprobarNumero(texto)

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });
});
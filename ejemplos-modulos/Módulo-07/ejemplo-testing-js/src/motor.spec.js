import { describe, expect, it } from "vitest";
import { NO_ES_UN_NUMERO, ES_EL_NUMERO_SECRETO, EL_NUMERO_ES_MAYOR, EL_NUMERO_ES_MENOR,  GAME_OVER_MAXIMO_INTENTOS } from "./modelo"; 
import { comprobarNumero, comprobarNumeroB, generarNumeroAleatorio } from "./motor";

import * as modelo from "./modelo";
import { beforeEach } from "vitest";

describe("comprobarNumeroB", () => {
  it("El número introducido es mayor que el número a acertar", () => {

    //Arrange
    const texto = "25";
    const numeroParaAdivinar = 24;

    //Act
    const resultado = comprobarNumeroB(texto, numeroParaAdivinar);

    //Assert
    expect(resultado).toBe(EL_NUMERO_ES_MAYOR);
  });

  it("El número introducido es menor que el número a acertar", () => {
    
    //Arrange
    const texto= "23";
    const numeroParaAdivinar = 24;

    //Act
    const resultado = comprobarNumeroB(texto, numeroParaAdivinar);

    //Assert
    expect(resultado).toBe(EL_NUMERO_ES_MENOR);
  });

  it("EL número introducido es el que teníamos que acertar", () => {
    
    //Arrange
    const texto = "24";
    const numeroParaAdivinar = 24;

    //Act
    const resultado = comprobarNumeroB(texto, numeroParaAdivinar);

    //Assert
    expect(resultado).toBe(ES_EL_NUMERO_SECRETO);
  });

  it("El número introducido no es un núemro", () => {

    //Arrange
    const texto = "Esto no es un número";
    const numeroParaAdivinar = 24;

    //Act
    const resultado = comprobarNumeroB(texto, numeroParaAdivinar);

    //Assert
    expect(resultado).toBe(NO_ES_UN_NUMERO);
  })
})


describe("generarNumeroAleatorio", () => {
  it("Forzamos Math.random para que devuelva 0 y el resultado debería ser 0", () => {

    // Arrange
    const numeroEsperado = 0;

    const spyOnMathRandom = vi.spyOn(global.Math, "random").mockReturnValue(0);

    //Act
    const resultado = generarNumeroAleatorio();

    //Assert
    expect(resultado).toBe(numeroEsperado);
  });

  it("Forzamos a Math.random para que devuelva 1 (0.99 en su caso) y el resultado debería ser 100", () => {

    //Arrange
    const numeroEsperado = 100;

    const spyOnMathRandom = vi.spyOn(global.Math, "random").mockReturnValue(0.999);

    //Act
    const resultado = generarNumeroAleatorio();

    //Assert
    expect(resultado).toBe(numeroEsperado);
  });

  it("Forzamos a Math.random para que devuelva 0.37 y el resultado debería ser 37", () => {

    //Arrange
    const numeroEsperado = 37;

    const spyOnMathRandom = vi.spyOn(global.Math, "random").mockReturnValue(0.37);

    //Act
    const resultado = generarNumeroAleatorio();

    //Assert
    expect(resultado).toBe(numeroEsperado);
  });

  it("Forzamos a Math.random para que devuelva 0.50 y el resultado debería ser 50", () => {

    //Arrange
    const numeroEsperado = 50;

    const spyOnMathRandom = vi.spyOn(global.Math, "random").mockReturnValue(0.50);

    //Act
    const resultado = generarNumeroAleatorio();

    //Assert
    expect(resultado).toBe(numeroEsperado);
  })
});


describe("comprobarNumero", () => {
  beforeEach(() => {
    vi.spyOn(modelo, "numeroParaAdivinar", "get").mockReturnValue(23);
  });

  it("Debería devolver NO_ES_UN_NUMERO si texto no es un número", () => {
    
    //Arrange
    const texto = "esto no es un número";

    //Act 
    const resultado = comprobarNumero(texto);

    //Assert
    expect(resultado).toBe(NO_ES_UN_NUMERO);
  });

  it("Debería devolver ES_EL_NUMERO_SECRETO si texto es el número para adivinar", () => {
    
    //Arrange
    const texto = "23";

    //Act
    const resultado = comprobarNumero(texto);

    //Assert
    expect(resultado).toBe(ES_EL_NUMERO_SECRETO);
  });

  it("Debería devolver EL_NUMERO_ES_MAYOR si texto es mayor que el número para adivinar", () => {

    //Arrange
    const texto = "50";

    //Act
    const resultado = comprobarNumero(texto);

    //Assert
    expect(resultado).toBe(EL_NUMERO_ES_MAYOR);
  });

  it("Debería devolver EL_NUMERO_ES_MENOR si texto es menor que el número para adivinar", () => {

    //Arrange
    const texto = "22";

    //Act
    const resultado = comprobarNumero(texto);

    //Assert
    expect(resultado).toBe(EL_NUMERO_ES_MENOR);
  });

  it ("Debería devolver GAME_OVER_MAXIMO_INTENTOS si se supera el número máximo de intentos", () => {
    //Arrange
    const texto = "30";

    const maximoIntentos = 5;
    vi.spyOn(modelo, "intentos", "get").mockReturnValue(maximoIntentos);

    // Act
    const resultado = comprobarNumero(texto);

    // Assert
    expect(resultado).toBe(GAME_OVER_MAXIMO_INTENTOS);
  });
 
  });
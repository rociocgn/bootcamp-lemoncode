/* ─── validarClave.spec.ts ─────────────────────────────────────────────────────
     Batería de tests para las funciones de validación de clave.
     Patrón: Arrange → Act → Assert */

import { describe, it, expect } from "vitest";
import {
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from "./helpers";
import { validarClave } from "./motor";

const commonPasswords = ["password", "123456", "qwerty", "monkey", "admin"];

// ── tieneMayusculasYMinusculas ────────────────────────────────────────────────
describe("tieneMayusculasYMinusculas", () => {
  it("debería ser válida si tiene mayúsculas y minúsculas", () => {
    // Arrange
    const clave = "HolaMundo";
    // Act
    const resultado = tieneMayusculasYMinusculas(clave);
    // Assert
    expect(resultado.esValida).toBe(true);
    expect(resultado.error).toBeUndefined();
  });

  it("debería ser inválida si solo tiene minúsculas", () => {
    // Arrange
    const clave = "holamundo";
    // Act
    const resultado = tieneMayusculasYMinusculas(clave);
    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave debe de tener mayúsculas y minúsculas");
  });

  it("debería ser inválida si solo tiene mayúsculas", () => {
    // Arrange
    const clave = "HOLAMUNDO";
    // Act
    const resultado = tieneMayusculasYMinusculas(clave);
    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave debe de tener mayúsculas y minúsculas");
  });
});

// ── tieneNumeros ──────────────────────────────────────────────────────────────
describe("tieneNumeros", () => {
  it("debería ser válida si contiene al menos un número", () => {
    // Arrange
    const clave = "HolaMundo1";
    // Act
    const resultado = tieneNumeros(clave);
    // Assert
    expect(resultado.esValida).toBe(true);
    expect(resultado.error).toBeUndefined();
  });

  it("debería ser inválida si no contiene ningún número", () => {
    // Arrange
    const clave = "HolaMundo";
    // Act
    const resultado = tieneNumeros(clave);
    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave debe de tener números");
  });
});

// ── tieneCaracteresEspeciales ─────────────────────────────────────────────────
describe("tieneCaracteresEspeciales", () => {
  it("debería ser válida si contiene un carácter especial", () => {
    // Arrange
    const clave = "HolaMundo1@";
    // Act
    const resultado = tieneCaracteresEspeciales(clave);
    // Assert
    expect(resultado.esValida).toBe(true);
    expect(resultado.error).toBeUndefined();
  });

  it("debería ser inválida si no contiene caracteres especiales", () => {
    // Arrange
    const clave = "HolaMundo1";
    // Act
    const resultado = tieneCaracteresEspeciales(clave);
    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave debe de tener caracteres especiales");
  });
});

// ── tieneLongitudMinima ───────────────────────────────────────────────────────
describe("tieneLongitudMinima", () => {
  it("debería ser válida si tiene exactamente 8 caracteres", () => {
    // Arrange
    const clave = "Hola123@";
    // Act
    const resultado = tieneLongitudMinima(clave);
    // Assert
    expect(resultado.esValida).toBe(true);
    expect(resultado.error).toBeUndefined();
  });

  it("debería ser válida si tiene más de 8 caracteres", () => {
    // Arrange
    const clave = "HolaMundo123@";
    // Act
    const resultado = tieneLongitudMinima(clave);
    // Assert
    expect(resultado.esValida).toBe(true);
  });

  it("debería ser inválida si tiene menos de 8 caracteres", () => {
    // Arrange
    const clave = "Ho1@";
    // Act
    const resultado = tieneLongitudMinima(clave);
    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave debe de tener una longitud mínima de 8 caracteres");
  });
});

// ── tieneNombreUsuario ────────────────────────────────────────────────────────
describe("tieneNombreUsuario", () => {
  it("debería ser válida si la clave no contiene el nombre de usuario", () => {
    // Arrange
    const nombreUsuario = "juangarcia";
    const clave = "Tr0ub4dor&3";
    // Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);
    // Assert
    expect(resultado.esValida).toBe(true);
    expect(resultado.error).toBeUndefined();
  });

  it("debería ser inválida si la clave contiene el nombre de usuario", () => {
    // Arrange
    const nombreUsuario = "juangarcia";
    const clave = "juangarcia123@A";
    // Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);
    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave no debe tener el nombre del usuario");
  });

  it("debería ser inválida aunque el nombre esté en mayúsculas en la clave", () => {
    // Arrange
    const nombreUsuario = "juangarcia";
    const clave = "JUANGARCIA123@A";
    // Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);
    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave no debe tener el nombre del usuario");
  });
});

// ── tienePalabrasComunes ──────────────────────────────────────────────────────
describe("tienePalabrasComunes", () => {
  it("debería ser válida si la clave no contiene palabras comunes", () => {
    // Arrange
    const clave = "Tr0ub4dor&3";
    // Act
    const resultado = tienePalabrasComunes(clave, commonPasswords);
    // Assert
    expect(resultado.esValida).toBe(true);
    expect(resultado.error).toBeUndefined();
  });

  it("debería ser inválida si la clave contiene una palabra común", () => {
    // Arrange
    const clave = "Monkey123@";
    // Act
    const resultado = tienePalabrasComunes(clave, commonPasswords);
    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave no debe de contener palabras comunes");
  });

  it("debería ser inválida aunque la palabra común esté en mayúsculas", () => {
    // Arrange
    const clave = "ADMIN123@A";
    // Act
    const resultado = tienePalabrasComunes(clave, commonPasswords);
    // Assert
    expect(resultado.esValida).toBe(false);
  });
});

// ── validarClave (integración) ────────────────────────────────────────────────
describe("validarClave", () => {
  it("debería devolver esValida true si la clave cumple todas las condiciones", () => {
    // Arrange
    const nombreUsuario = "juangarcia";
    const clave = "Tr0ub4dor&3";
    // Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);
    // Assert
    expect(resultado.esValida).toBe(true);
    expect(resultado.error).toBeUndefined();
  });

  it("debería devolver el error de longitud mínima primero si la clave es corta", () => {
    // Arrange
    const nombreUsuario = "juangarcia";
    const clave = "Ab1@";
    // Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);
    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave debe de tener una longitud mínima de 8 caracteres");
  });

  it("debería devolver error si la clave no tiene mayúsculas", () => {
    // Arrange
    const nombreUsuario = "juangarcia";
    const clave = "tr0ub4dor&3";
    // Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);
    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave debe de tener mayúsculas y minúsculas");
  });

  it("debería devolver error si la clave contiene el nombre de usuario", () => {
    // Arrange
    const nombreUsuario = "juangarcia";
    const clave = "Juangarcia1@";
    // Act
    const resultado = validarClave(nombreUsuario, clave, commonPasswords);
    // Assert
    expect(resultado.esValida).toBe(false);
    expect(resultado.error).toBe("La clave no debe tener el nombre del usuario");
  });
});
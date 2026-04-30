/* ─── Main ─────────────────────────────────────────────────────────────────────
 Punto de entrada: datos de prueba y ejecución. */

import { validarClave } from "./motor";
import { mostrarResultado } from "./ui";

const commonPasswords: string[] = [
  "password", "123456", "qwerty", "admin", "letmein", "welcome",
  "monkey", "sunshine", "password1", "123456789", "football", "iloveyou",
  "1234567", "123123", "12345678", "abc123", "qwerty123", "1q2w3e4r",
  "baseball", "password123", "superman", "987654321", "mypass", "trustno1",
  "hello123", "dragon", "1234", "555555", "loveme", "hello", "hockey",
  "letmein123", "welcome123", "mustang", "shadow", "12345", "passw0rd",
  "abcdef", "123abc", "football123", "master", "jordan23", "access",
  "flower", "qwertyuiop", "admin123", "iloveyou123", "welcome1",
  "monkey123", "sunshine1", "password12", "1234567890",
];

const nombreUsuario = "juangarcia";

// Casos de prueba: uno por cada tipo de error + uno válido
const casosDePrueba: string[] = [
  "Ab1@",                    // ❌ longitud mínima
  "abcdefg1@",               // ❌ sin mayúsculas
  "ABCDEFG1@",               // ❌ sin minúsculas
  "Abcdefgh@",               // ❌ sin números
  "Abcdefg1",                // ❌ sin caracteres especiales
  "juangarcia1@A",           // ❌ contiene nombre de usuario
  "Monkey123@",              // ❌ contiene palabra común
  "Tr0ub4dor&3",             // ✅ válida
];

console.log("=== VALIDADOR DE CLAVES ===");
console.log(`Usuario: ${nombreUsuario}`);

casosDePrueba.forEach((clave) => {
  const resultado = validarClave(nombreUsuario, clave, commonPasswords);
  mostrarResultado(clave, resultado);
});
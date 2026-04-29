// ─── index.ts ─────────────────────────────────────────────────────────────────
// Punto de entrada: define los productos de ejemplo y ejecuta el cálculo.

import { LineaTicket } from "./types";
import { calculaTicket } from "./calculaticket";

const productos: LineaTicket[] = [
  {
    producto: { nombre: "Legumbres", precio: 2, tipoIva: "general" },
    cantidad: 2,
  },
  {
    producto: { nombre: "Perfume", precio: 20, tipoIva: "general" },
    cantidad: 3,
  },
  {
    producto: { nombre: "Leche", precio: 1, tipoIva: "superreducidoC" },
    cantidad: 6,
  },
  {
    producto: { nombre: "Lasaña", precio: 5, tipoIva: "superreducidoA" },
    cantidad: 1,
  },
  // Productos extra para probar más tipos de IVA
  {
    producto: { nombre: "Libro de texto", precio: 12, tipoIva: "superreducidoB" },
    cantidad: 2,
  },
  {
    producto: { nombre: "Entrada museo", precio: 8, tipoIva: "reducido" },
    cantidad: 4,
  },
  {
    producto: { nombre: "Consulta médica", precio: 50, tipoIva: "sinIva" },
    cantidad: 1,
  },
];

const ticket = calculaTicket(productos);
console.log("=== TICKET FINAL ===");
console.log("\n--- Líneas ---");
ticket.lineas.forEach((l) =>
  console.log(
    `${l.nombre.padEnd(20)} x${l.cantidad}  sin IVA: ${l.precioSinIva.toFixed(2)} €  (${l.tipoIva})  con IVA: ${l.precioConIva.toFixed(2)} €`
  )
);
console.log("\n--- Totales ---");
console.log(`Total sin IVA : ${ticket.total.totalSinIva.toFixed(2)} €`);
console.log(`IVA           : ${ticket.total.totalIva.toFixed(2)} €`);
console.log(`Total con IVA : ${ticket.total.totalConIva.toFixed(2)} €`);
console.log("\n--- Desglose IVA ---");
ticket.desgloseIva.forEach((d) =>
  console.log(`  ${d.tipoIva.padEnd(16)}: ${d.cuantia.toFixed(2)} €`)
);
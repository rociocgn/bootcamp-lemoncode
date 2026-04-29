// ─── calculaTicket ────────────────────────────────────────────────────────────
// Función principal: orquesta las tres funciones de business para
// construir el TicketFinal completo.

import { LineaTicket, TicketFinal } from "./types";
import {
  calcularLineasTicket,
  calcularTotales,
  calcularDesgloseIva,
} from "./helpers";

export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => ({
  lineas: calcularLineasTicket(lineasTicket),
  total: calcularTotales(lineasTicket),
  desgloseIva: calcularDesgloseIva(lineasTicket),
});
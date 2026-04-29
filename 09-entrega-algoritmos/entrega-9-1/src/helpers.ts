// ─── Business / Helpers ───────────────────────────────────────────────────────
// Contiene toda la lógica de negocio separada de la entrada de datos
// y del punto de entrada principal.

import {
  LineaTicket,
  ResultadoLineaTicket,
  ResultadoTotalTicket,
  TipoIva,
  TotalPorTipoIva,
} from "./types";

// ── Helpers básicos ───────────────────────────────────────────────────────────

/** Devuelve el porcentaje de IVA (0-21) correspondiente a un tipo. */
export const obtenerPorcentajeIva = (tipoIva: TipoIva): number => {
  const porcentajes: Record<TipoIva, number> = {
    general: 21,
    reducido: 10,
    superreducidoA: 5,
    superreducidoB: 4,
    superreducidoC: 0,
    sinIva: 0,
  };
  return porcentajes[tipoIva];
};

/** Redondea un número a exactamente 2 decimales. */
export const redondear = (num: number): number => Number(num.toFixed(2));

/** Calcula el precio base (sin IVA) de una línea: precio unitario × cantidad. */
const calcularPrecioBase = (precio: number, cantidad: number): number =>
  precio * cantidad;

/** Aplica el IVA a un precio base y devuelve el precio final con IVA. */
const aplicarIva = (precioBase: number, porcentajeIva: number): number =>
  precioBase + (precioBase * porcentajeIva) / 100;

// ── Funciones de cálculo principales ─────────────────────────────────────────

/**
 * Transforma cada LineaTicket en su ResultadoLineaTicket con los
 * importes sin IVA y con IVA ya calculados y redondeados.
 */
export const calcularLineasTicket = (
  lineasTicket: LineaTicket[]
): ResultadoLineaTicket[] =>
  lineasTicket.map((linea) => {
    const precioBase = calcularPrecioBase(
      linea.producto.precio,
      linea.cantidad
    );
    const porcentajeIva = obtenerPorcentajeIva(linea.producto.tipoIva);
    const precioFinal = aplicarIva(precioBase, porcentajeIva);

    return {
      nombre: linea.producto.nombre,
      cantidad: linea.cantidad,
      precioSinIva: redondear(precioBase),
      tipoIva: linea.producto.tipoIva,
      precioConIva: redondear(precioFinal),
    };
  });

/**
 * Calcula los totales globales del ticket (sin IVA, con IVA e importe de IVA)
 * a partir del array de lineasTicket originales.
 */
export const calcularTotales = (
  lineasTicket: LineaTicket[]
): ResultadoTotalTicket => {
  const { totalSinIva, totalConIva } = lineasTicket.reduce(
    (acc, linea) => {
      const precioBase = calcularPrecioBase(
        linea.producto.precio,
        linea.cantidad
      );
      const porcentajeIva = obtenerPorcentajeIva(linea.producto.tipoIva);
      const precioFinal = aplicarIva(precioBase, porcentajeIva);

      acc.totalSinIva += precioBase;
      acc.totalConIva += precioFinal;
      return acc;
    },
    { totalSinIva: 0, totalConIva: 0 }
  );

  return {
    totalSinIva: redondear(totalSinIva),
    totalConIva: redondear(totalConIva),
    totalIva: redondear(totalConIva - totalSinIva),
  };
};

/**
 * Genera el desglose de IVA agrupado por tipo.
 * Solo aparecen los tipos de IVA que tienen al menos un producto.
 * La cuantia refleja la BASE imponible (precio sin IVA) de cada tipo.
 */
export const calcularDesgloseIva = (
  lineasTicket: LineaTicket[]
): TotalPorTipoIva[] => {
  const acumulado = lineasTicket.reduce(
    (acc, linea) => {
      const precioBase = calcularPrecioBase(
        linea.producto.precio,
        linea.cantidad
      );
      acc[linea.producto.tipoIva] += precioBase;
      return acc;
    },
    {
      general: 0,
      reducido: 0,
      superreducidoA: 0,
      superreducidoB: 0,
      superreducidoC: 0,
      sinIva: 0,
    } as Record<TipoIva, number>
  );

  return (Object.entries(acumulado) as [TipoIva, number][])
    .filter(([_, cuantia]) => cuantia > 0)
    .map(([tipoIva, cuantia]) => ({
      tipoIva,
      cuantia: redondear(cuantia),
    }));
};
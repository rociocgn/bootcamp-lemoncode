import { obtenerNombreBanco } from "./catalogoBancos";

export interface PartesIban {
  codigoPais: string;
  digitosControl: string;
  codigoBanco: string;
  codigoSucursal: string;
  digitoControlSucursal: string;
  numeroCuenta: string;
  nombreBanco: string;
}

export function extraerPartesIban(ibanNormalizado: string): PartesIban {
  const codigoPais = ibanNormalizado.slice(0, 2);
  const digitosControl = ibanNormalizado.slice(2, 4);
  const codigoBanco = ibanNormalizado.slice(4, 8);
  const codigoSucursal = ibanNormalizado.slice(8, 12);
  const digitoControlSucursal = ibanNormalizado.slice(12, 14);
  const numeroCuenta = ibanNormalizado.slice(14, 24);

  return {
    codigoPais,
    digitosControl,
    codigoBanco,
    codigoSucursal,
    digitoControlSucursal,
    numeroCuenta,
    nombreBanco: obtenerNombreBanco(codigoBanco),
  };
}
export interface InfoIban {
  original: string;
  normalizado: string;
  estaBienFormado: boolean;
  esValido: boolean;
  codigoPais: string;
  digitosControl: string;
  codigoBanco: string;
  nombreBanco: string;
  codigoSucursal: string;
  digitoControlSucursal: string;
  numeroCuenta: string;
}
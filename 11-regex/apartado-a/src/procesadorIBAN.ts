import { normalizarIban, estaBienFormadoIbanEspanol } from "./analizadorIBAN";
import { esValidoChecksumIban } from "./validadorIBAN";
import { extraerPartesIban } from "./extractorIBAN";
import { InfoIban } from "./tipos";

export function procesarIban(ibanOriginal: string): InfoIban {
  const normalizado = normalizarIban(ibanOriginal);
  const estaBienFormado = estaBienFormadoIbanEspanol(normalizado);
  const esValido = estaBienFormado && esValidoChecksumIban(normalizado);

  if (!estaBienFormado) {
    return {
      original: ibanOriginal,
      normalizado,
      estaBienFormado,
      esValido: false,
      codigoPais: "",
      digitosControl: "",
      codigoBanco: "",
      nombreBanco: "",
      codigoSucursal: "",
      digitoControlSucursal: "",
      numeroCuenta: "",
    };
  }

  const partes = extraerPartesIban(normalizado);

  return {
    original: ibanOriginal,
    normalizado,
    estaBienFormado,
    esValido,
    ...partes,
  };
}
import { procesarIban } from "./procesadorIBAN";
import { InfoIban } from "./tipos";

function pintarResultado(info: InfoIban): void {
  const contenedorResultado = document.getElementById("resultado") as HTMLDivElement;

  if (!info.estaBienFormado) {
    contenedorResultado.innerHTML = `
      <p class="error">❌ El IBAN no tiene un formato válido (debe ser ES + 22 dígitos).</p>
    `;
    return;
  }

  contenedorResultado.innerHTML = `
    <p><strong>IBAN normalizado:</strong> ${info.normalizado}</p>
    <p><strong>¿Bien formado?:</strong> ${info.estaBienFormado ? "✅ Sí" : "❌ No"}</p>
    <p><strong>¿Checksum válido?:</strong> ${info.esValido ? "✅ Sí" : "❌ No"}</p>
    <hr/>
    <p><strong>País:</strong> ${info.codigoPais}</p>
    <p><strong>Dígitos de control IBAN:</strong> ${info.digitosControl}</p>
    <p><strong>Banco:</strong> ${info.nombreBanco} (${info.codigoBanco})</p>
    <p><strong>Oficina:</strong> ${info.codigoSucursal}</p>
    <p><strong>Dígito de control (banco/oficina):</strong> ${info.digitoControlSucursal}</p>
    <p><strong>Número de cuenta:</strong> ${info.numeroCuenta}</p>
  `;
}

function configurarFormulario(): void {
  const formulario = document.getElementById("formulario-iban") as HTMLFormElement;
  const campoIban = document.getElementById("campo-iban") as HTMLInputElement;

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const info = procesarIban(campoIban.value);
    pintarResultado(info);
  });
}

document.addEventListener("DOMContentLoaded", configurarFormulario);
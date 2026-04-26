// 1. Definición de tipos e interfaces
type TipoIva =
  | "general"
  | "reducido"
  | "superreducidoA"
  | "superreducidoB"
  | "superreducidoC"
  | "sinIva";

interface Producto {
  nombre: string;
  precio: number;
  tipoIva: TipoIva;
}

interface LineaTicket {
  producto: Producto;
  cantidad: number;
}

interface ResultadoLineaTicket {
  nombre: string;
  cantidad: number;
  precioSinIva: number;
  tipoIva: TipoIva;
  precioConIva: number;
}

interface ResultadoTotalTicket {
  totalSinIva: number;
  totalConIva: number;
  totalIva: number;
}

interface TotalPorTipoIva {
  tipoIva: TipoIva;
  cuantia: number;
}

interface TicketFinal {
  lineas: ResultadoLineaTicket[];
  total: ResultadoTotalTicket;
  desgloseIva: TotalPorTipoIva[];
}

// 2. Datos de ejemplo
const productos: LineaTicket[] = [
  {
    producto: {
      nombre: "Legumbres",
      precio: 2,
      tipoIva: "general",
    },
    cantidad: 2,
  },
  {
    producto: {
      nombre: "Perfume",
      precio: 20,
      tipoIva: "general",
    },
    cantidad: 3,
  },
  {
    producto: {
      nombre: "Leche",
      precio: 1,
      tipoIva: "superreducidoC",
    },
    cantidad: 6,
  },
  {
    producto: {
      nombre: "Lasaña",
      precio: 5,
      tipoIva: "superreducidoA",
    },
    cantidad: 1,
  },
];


//3. Funciones auxiliares
const obtenerPorcentajeIva = (tipoIva: TipoIva): number => {

 switch (tipoIva) {
   case "general":
     return 21;

   case "reducido":
     return 10;

   case "superreducidoA":
     return 5;

   case "superreducidoB":
     return 4;

   case "superreducidoC":
   case "sinIva":
     return 0;

   default:
     return 0;
 }
};

const redondear = (num:number):number =>
 Number(num.toFixed(2));

// 4. Función principal para generar el ticket (Reduce)
const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {

 const resultado = lineasTicket.reduce(
   (acc, linea) => {

     const precioBase =
       linea.producto.precio *
       linea.cantidad;

     const porcentajeIva =
       obtenerPorcentajeIva(
         linea.producto.tipoIva
       );

     const precioFinal =
       precioBase + (precioBase * porcentajeIva) / 100;

     acc.lineas.push({
       nombre: linea.producto.nombre,
       cantidad: linea.cantidad,
       precioSinIva: redondear(precioBase),
       tipoIva: linea.producto.tipoIva,
       precioConIva: redondear(precioFinal),
     });

     acc.totalSinIva += precioBase;
     acc.totalConIva += precioFinal;

     acc.desglose[linea.producto.tipoIva] +=
       precioBase;

     return acc;
   },

   {
     lineas: [] as ResultadoLineaTicket[],
     totalSinIva: 0,
     totalConIva: 0,
     desglose: {
       general:0,
       reducido:0,
       superreducidoA:0,
       superreducidoB:0,
       superreducidoC:0,
       sinIva:0
     }
   }
 );

 return {
   lineas: resultado.lineas,

   total: {
     totalSinIva: redondear(
       resultado.totalSinIva
     ),

     totalConIva: redondear(
       resultado.totalConIva
     ),

     totalIva: redondear(
       resultado.totalConIva -
       resultado.totalSinIva
     ),
   },

   desgloseIva:
    Object.entries(resultado.desglose)
     .filter(
       ([_, cuantia]) => cuantia > 0
     )
     .map(([tipoIva, cuantia]) => ({
       tipoIva: tipoIva as TipoIva,
       cuantia: redondear(cuantia)
     }))
 };
};

// 5. Ejecución y resultado
console.log(calculaTicket(productos));
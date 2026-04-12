// ─── modelo.ts ────────────────────────────────────────────────────────────────

export interface Carta {
  idFoto: number;      // 0-5, identifica el tipo de carta (gatito, perrito…)
  imagen: string;      // emoji / URL de la imagen
  estaVuelta: boolean;
  encontrada: boolean;
}

export interface InfoCarta {
  idFoto: number;
  imagen: string;
}

export type EstadoPartida =
  | "PartidaNoIniciada"
  | "CeroCartasLevantadas"
  | "UnaCartaLevantada"
  | "DosCartasLevantadas"
  | "PartidaCompleta";

export interface Tablero {
  cartas: Carta[];
  estadoPartida: EstadoPartida;
  indiceCartaVolteadaA?: number;
  indiceCartaVolteadaB?: number;
}

// ─── Datos iniciales ──────────────────────────────────────────────────────────

export const infoCartas: InfoCarta[] = [
  { idFoto: 0, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png" },
  { idFoto: 1, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png" },
  { idFoto: 2, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png" },
  { idFoto: 3, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/4.png" },
  { idFoto: 4, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/5.png" },
  { idFoto: 5, imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png" },
];

// ─── Funciones de creación ────────────────────────────────────────────────────

export const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
  idFoto,
  imagen,
  estaVuelta: false,
  encontrada: false,
});

export const crearColeccionDeCartasInicial = (infos: InfoCarta[]): Carta[] => {
  // Duplicamos cada carta para tener dos de cada tipo
  return [...infos, ...infos].map((info) =>
    crearCartaInicial(info.idFoto, info.imagen)
  );
};

export const crearTableroInicial = (): Tablero => ({
  cartas: crearColeccionDeCartasInicial(infoCartas),
  estadoPartida: "PartidaNoIniciada",
});
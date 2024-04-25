export interface Startup  {
  id?:number;
  nombre: string;
  foto?: string
  descripcion: string;
  voted?: boolean
  opcion?: number
  totales_afirmativos?: number
};

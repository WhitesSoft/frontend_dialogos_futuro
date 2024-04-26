export interface Startup  {
  id?:number;
  nombre: string;
  foto?: string
  fecha?:string
  descripcion: string;
  voted?: boolean
  opcion?: number
  totales_afirmativos?: number,
  votos_totales?: any[]
};

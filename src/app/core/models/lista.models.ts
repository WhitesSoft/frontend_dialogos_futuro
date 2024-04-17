import { Inscrito } from "./inscrito.models";

export interface lista {
  id: number,
  codigo_qr: string,
  persona_id: number,
  Persona: Inscrito
}

import { Pipe, PipeTransform } from '@angular/core';
import { lista } from '../models/lista.models';

@Pipe({
  name: 'bands',
  standalone: true
})
export class BandsPipe implements PipeTransform {

  // transform(datos:lista[], search:string): lista[] {
  //   if(search !== ' '){     
  //     datos = datos.filter(c => (c.Persona.nombres.toUpperCase()).includes(search.toUpperCase())
  //   || ((c.codigo_qr).toUpperCase()).includes(search.toUpperCase()) || c.Persona.organizacion != null && ((c.Persona.organizacion).toUpperCase()).includes(search.toUpperCase())
  //   );
  //   }
  //   return datos;
  // }

  transform(datos: lista[], search: string): lista[] {
    if (search.trim() !== '') {
      datos = datos.filter(c => this.removerTildes(c.Persona.nombres.toUpperCase()).includes(this.removerTildes(search.toUpperCase()))
        || this.removerTildes(c.codigo_qr.toUpperCase()).includes(this.removerTildes(search.toUpperCase()))
        || (c.Persona.organizacion != null && this.removerTildes(c.Persona.organizacion.toUpperCase()).includes(this.removerTildes(search.toUpperCase())))
      );
    }
    return datos;
  }

  removerTildes(texto: string): string {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

}

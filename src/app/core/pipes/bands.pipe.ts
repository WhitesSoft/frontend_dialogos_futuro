import { Pipe, PipeTransform } from '@angular/core';
import { lista } from '../models/lista.models';

@Pipe({
  name: 'bands',
  standalone: true
})
export class BandsPipe implements PipeTransform {

  transform(datos:lista[], search:string): lista[] {
    if(search !== ' '){     
      datos = datos.filter(c => (c.Persona.nombres.toLocaleUpperCase()).includes(search.toLocaleUpperCase())
    || (c.codigo_qr.toLocaleUpperCase()).includes(search.toLocaleUpperCase()) || (c.Persona.organizacion.toLocaleUpperCase()).includes(search.toLocaleUpperCase())
    );
    }
    return datos;
  }

}

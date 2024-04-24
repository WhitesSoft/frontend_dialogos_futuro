import { Pipe, PipeTransform } from '@angular/core';
import { Inscrito } from '../models/inscrito.models';

@Pipe({
  name: 'inscritos',
  standalone: true
})
export class InscritosPipe implements PipeTransform {

  transform(datos:Inscrito[], search:string): Inscrito[] {
    if(search !== ' '){     
      datos = datos.filter(c => (c.nombres.toLocaleUpperCase()).includes(search.toLocaleUpperCase()))
    }
    return datos;
  }
}

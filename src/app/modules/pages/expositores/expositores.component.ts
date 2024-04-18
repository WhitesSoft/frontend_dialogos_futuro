import { Component } from '@angular/core';
import { Expositor } from '../../../core/models/expositor.models';
import { InscripcionService } from '../../services/inscripcion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expositores',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './expositores.component.html',
  styleUrl: './expositores.component.scss'
})
export class ExpositoresComponent {

  selectedEmpresa: string = '';
  expositores: Expositor[] = [
    {
      id: 1,
      autor: 'Juanito',
      tema: 'La  vida es asi',
      pais: 'Bolivia',
      descripcion: 'fdsajklfjdsafdfsadfas',
      bibliografia: 'SIUUUUUU'
    },
    {
      id: 2,
      autor: 'Juanito',
      tema: 'La  vida es asi',
      pais: 'Bolivia',
      descripcion: 'fdsajklfjdsafdfsadfas',
      bibliografia: 'SIUUUUUU'
    },
    {
      id: 3,
      autor: 'Juanito',
      tema: 'La  vida es asi',
      pais: 'Bolivia',
      descripcion: 'fdsajklfjdsafdfsadfas',
      bibliografia: 'SIUUUUUU'
    }
  ]

  constructor(
    private inscripcionService: InscripcionService
  ) { }

  selected(expositor?: number) {
    //this.selectedEmpresa = empresa;
    console.log('Empresa seleccionada:', expositor);
  }


}

import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Inscrito } from '../../../core/models/inscrito.models';
import { InscripcionService } from '../../services/inscripcion.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {


constructor(private inscritoService:InscripcionService){

}

ngOnInit(){
  this.inscritoService.getInscritos().subscribe(response => {
    this.inscritos = Object.values(response)
  }) 
}

  inscritos: Inscrito [] = [

  ]

}

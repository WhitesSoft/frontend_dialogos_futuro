import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Inscrito } from '../../../core/models/inscrito.models';
import { InscripcionService } from '../../services/inscripcion.service';
import { Router } from '@angular/router';
import { lista } from '../../../core/models/lista.models';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {


constructor(private inscritoService:InscripcionService, private router:Router){

}

ngOnInit(){
  this.inscritoService.getIdentificadores().subscribe(response => {
    this.inscritos = Object.values(response)
  })
}

modificar(id: number){
  this.router.navigate(['modificar-inscripcion/'+id])
}

  inscritos: lista [] = [

  ]

}

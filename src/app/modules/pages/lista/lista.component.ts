import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Inscrito } from '../../../core/models/inscrito.models';
import { InscripcionService } from '../../services/inscripcion.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InscritosPipe } from '../../../core/pipes/inscritos.pipe';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule, InscritosPipe],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {

  filter: string = ''
  inscritos: Inscrito[] = []

  constructor(
    private inscritoService: InscripcionService,
    private router: Router
  ) {  }


  ngOnInit() {
    this.inscritoService.getInscritos().subscribe(response => {
      this.inscritos = Object.values(response)
    })
  }

  modificar(id: number) {
    this.router.navigate(['modificar-inscripcion/' + id])
  }

}

import { Component } from '@angular/core';
import { Startup } from '../../../core/models/startup.models';
import { CommonModule } from '@angular/common';
import { InscripcionService } from '../../services/inscripcion.service';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.scss'
})
export class ResultadosComponent {

  startups: Startup[] = []

  constructor(
    private inscripcionService: InscripcionService
  ){}

  ngOnInit(){
    this.inscripcionService.getResultados().subscribe(
      data => this.startups = data
    )
  }

}

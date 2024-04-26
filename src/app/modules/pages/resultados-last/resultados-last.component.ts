import { Component } from '@angular/core';
import { Startup } from '../../../core/models/startup.models';
import { InscripcionService } from '../../services/inscripcion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultados-last',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './resultados-last.component.html',
  styleUrl: './resultados-last.component.scss'
})
export class ResultadosLastComponent {

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

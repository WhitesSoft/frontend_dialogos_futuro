import { Component } from '@angular/core';
import { Expositor } from '../../../core/models/expositor.models';
import { InscripcionService } from '../../services/inscripcion.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
  expositores: Expositor[] = []

  constructor(
    private inscripcionService: InscripcionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getExpositore()
  }

  getExpositore() {
    this.inscripcionService.getExpositores().subscribe(
      data => this.expositores = data
    )
  }

  selected(expositor?: number) {
    //this.selectedEmpresa = empresa;
    this.router.navigate([`profile-expositor/${expositor}`])
    console.log('Empresa seleccionada:', expositor);
  }


}

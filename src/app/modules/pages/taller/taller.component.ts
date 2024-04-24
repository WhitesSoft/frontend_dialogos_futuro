import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { InscripcionService } from '../../services/inscripcion.service';
import { Inscrito } from '../../../core/models/inscrito.models';


@Component({
  selector: 'app-taller',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './taller.component.html',
  styleUrl: './taller.component.scss'
})
export class TallerComponent {
  dataForm!: FormGroup

  constructor(
    private inscripcionService: InscripcionService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.dataForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      residencia: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      organizacion: new FormControl('', []),
      ci: new FormControl('', [Validators.required]),
      celular: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]),
    })
  }

  save() {
    let sendData: Inscrito = {
      nombres: this.dataForm.get('nombre')?.value,
      residencia: this.dataForm.get('residencia')?.value,
      correo: this.dataForm.get('correo')?.value,
      organizacion: this.dataForm.get('organizacion')?.value,
      ci: this.dataForm.get('ci')?.value,
      plan: 'taller',
      celular: this.dataForm.get('celular')?.value,
    }

    this.inscripcionService.addInscrito(sendData).subscribe(response => {
      this.toastrService.success('Manilla asignada:  ' + response.id, 'Exito', { timeOut: 3000, progressBar: true });
      this.dataForm.reset()
    }, err => {
      this.toastrService.error('Persona ya registrada', 'Error', { timeOut: 3000, progressBar: true });
    })
  }
}

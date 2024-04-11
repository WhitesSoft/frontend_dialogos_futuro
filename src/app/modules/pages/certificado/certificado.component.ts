import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { InscripcionService } from '../../services/inscripcion.service';


@Component({
  selector: 'app-certificado',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.scss'
})
export class CertificadoComponent {

  dataForm!: FormGroup

  constructor(
    private inscripcionService: InscripcionService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.dataForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      residencia: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      organizacion: new FormControl('', []),
      ci: new FormControl('', [Validators.required]),
      celular: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]),
    })
  }


  save() {
    let sendData = {
      nombres: this.dataForm.get('nombre')?.value,
      apellidos: this.dataForm.get('apellidos')?.value,
      residencia: this.dataForm.get('residencia')?.value,
      correo: this.dataForm.get('correo')?.value,
      organizacion: this.dataForm.get('organizacion')?.value,
      ci: this.dataForm.get('ci')?.value,
      plan: 'CERTIFICADO',
      celular: this.dataForm.get('celular')?.value,
    }

    this.inscripcionService.addInscrito(sendData).subscribe(response => {
      this.toastrService.success('Inscripcion exitosa', 'Exito', { timeOut: 3000, progressBar: true });
      console.log(response)
      this.dataForm.reset()
    })
  }
}

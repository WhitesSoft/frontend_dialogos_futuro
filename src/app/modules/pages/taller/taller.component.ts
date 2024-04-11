import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InscripcionService } from '../../services/inscripcion.service';
import { Inscrito } from '../../../core/models/inscrito.models';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-taller',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './taller.component.html',
  styleUrl: './taller.component.scss'
})
export class TallerComponent {
  dataForm!:FormGroup

  constructor(private inscripcionService:InscripcionService, private toastrService: ToastrService){}

  ngOnInit(){
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

  save(){
    let sendData:Inscrito = {
      nombres: this.dataForm.get('nombre')?.value,
      apellidos: this.dataForm.get('apellidos')?.value,
      residencia: this.dataForm.get('residencia')?.value,
      correo: this.dataForm.get('correo')?.value,
      organizacion: this.dataForm.get('organizacion')?.value,
      ci: this.dataForm.get('ci')?.value,
      plan: 'CERTIFICADO+TALLER',
      celular: this.dataForm.get('celular')?.value,
    }

    this.inscripcionService.addInscrito(sendData).subscribe(response => {
      this.toastrService.success('Inscripcion exitosa', 'Exito', { timeOut: 3000, progressBar: true });  
      console.log(response)
    })
  }
}

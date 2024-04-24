import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { InscripcionService } from '../../services/inscripcion.service';
import { Inscrito } from '../../../core/models/inscrito.models';


@Component({
  selector: 'app-gratuito',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './gratuito.component.html',
  styleUrl: './gratuito.component.scss'
})


export class GratuitoComponent {

  dataForm!: FormGroup

  constructor(
    private inscripcionService: InscripcionService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.dataForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      residencia: new FormControl(''),
      correo: new FormControl(''),
      organizacion: new FormControl(''),
      ci: new FormControl(''),
      celular: new FormControl(''),
    })
  }


  save() {
    let sendData: Inscrito = {
      nombres: (this.dataForm.get('nombre')?.value).toUpperCase(),
      residencia: this.dataForm.get('residencia')?.value,
      correo: this.dataForm.get('correo')?.value,
      organizacion: this.dataForm.get('organizacion')?.value,
      ci: this.dataForm.get('ci')?.value,
      plan: 'gratuito',
      celular: this.dataForm.get('celular')?.value,
    }

    this.inscripcionService.addInscrito(sendData).subscribe(response => {
      this.toastrService.success('Manilla asignada:  '+response.id, 'Exito', { timeOut: 3000, progressBar: true });
      console.log(response)
      this.dataForm.reset()
    },err => {
      this.toastrService.error("Error en el registro", 'Error', { timeOut: 3000, progressBar: true });
    }
  )
  }


}

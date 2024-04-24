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
      nombre: new FormControl('', []),
      residencia: new FormControl('', []),
      correo: new FormControl('', [Validators.email]),
      organizacion: new FormControl('', []),
      ci: new FormControl('', []),
      celular: new FormControl('', [Validators.pattern('[- +()0-9]+')]),
    })
  }


  save() {
    let sendData: Inscrito = {
      nombres: this.dataForm.get('nombre')?.value,
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
      this.toastrService.error('Persona ya registrada', 'Error', { timeOut: 3000, progressBar: true });
    }
  )
  }


}

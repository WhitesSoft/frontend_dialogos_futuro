import { Component } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InscripcionService } from '../../services/inscripcion.service';
import { Inscrito } from '../../../core/models/inscrito.models';


@Component({
  selector: 'app-plan-modificar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './plan-modificar.component.html',
  styleUrl: './plan-modificar.component.scss'
})
export class PlanModificarComponent {

  dataForm!: FormGroup

  constructor(
    private inscripcionService: InscripcionService,
    private toastrService: ToastrService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.dataForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      residencia: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      organizacion: new FormControl('', []),
      ci: new FormControl('', [Validators.required]),
      celular: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]),
      plan: new FormControl('', [Validators.required])
    })

    this.getInscrito()

  }

  getInscrito() {

    this.activateRoute.params.subscribe(params => {
      const id = params['id']
      console.log(id);
      this.inscripcionService.getInscrito(Number(id)).subscribe(
        data => {
console.log(data.plan)

          this.dataForm.get('nombre')?.setValue(data.nombres),
          this.dataForm.get('residencia')?.setValue(data.residencia),
          this.dataForm.get('correo')?.setValue(data.correo),
          this.dataForm.get('organizacion')?.setValue(data.organizacion),
          this.dataForm.get('ci')?.setValue(data.ci),
          this.dataForm.get('celular')?.setValue(data.celular),
          this.dataForm.get('plan')?.setValue(data.plan)
        },
        err => {
          console.log('no se puede traer uwu', err);
        }

      )
    })

  }

  save() {
    let sendData: Inscrito = {
      nombres: this.dataForm.get('nombre')?.value,
      residencia: this.dataForm.get('residencia')?.value,
      correo: this.dataForm.get('correo')?.value,
      organizacion: this.dataForm.get('organizacion')?.value,
      ci: this.dataForm.get('ci')?.value,
      plan: this.dataForm.get('plan')?.value,
      celular: this.dataForm.get('celular')?.value,
    }

    this.inscripcionService.addInscrito(sendData).subscribe(response => {
      this.toastrService.success('Inscripcion exitosa', 'Exito', { timeOut: 3000, progressBar: true });
      console.log(response)
    })
  }


}

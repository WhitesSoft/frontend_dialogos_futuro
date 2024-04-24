import { Component } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
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

  id:any

  constructor(
    private inscripcionService: InscripcionService,
    private toastrService: ToastrService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      residencia: new FormControl(''),
      correo: new FormControl(''),
      organizacion: new FormControl(''),
      ci: new FormControl('' ),
      celular: new FormControl(''),
      plan: new FormControl('')
    })

    this.getInscrito()

  }

  getInscrito() {

    this.activateRoute.params.subscribe(params => {
      this.id = params['id']
      this.inscripcionService.getInscrito(Number(this.id)).subscribe(
        data => {
          this.dataForm.get('nombre')?.setValue(data.nombres),
            this.dataForm.get('residencia')?.setValue(data.residencia),
            this.dataForm.get('correo')?.setValue(data.correo),
            this.dataForm.get('organizacion')?.setValue(data.organizacion),
            this.dataForm.get('ci')?.setValue(data.ci),
            this.dataForm.get('celular')?.setValue(data.celular),
            this.dataForm.get('plan')?.setValue(data.plan)
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

    this.inscripcionService.moodificarInscrito(this.id, sendData).subscribe(response => {
      this.toastrService.success('Modificacion exitosa', 'Exito', { timeOut: 3000, progressBar: true });
      this.router.navigate(['/lista-bands'])
    })
  }


}

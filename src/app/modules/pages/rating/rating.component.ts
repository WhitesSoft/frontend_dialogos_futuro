import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Startup } from '../../../core/models/startup.models';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { InscripcionService } from '../../services/inscripcion.service';

import moment from 'moment';
import { Encuesta } from '../../../core/models/encuesta.models';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {

  selectedEmpresa: string[] = [];
  isExpanded: boolean = false;
  liElements: HTMLLIElement[];
  startups: Startup[] = []
  encuesta: Encuesta[] = []
  encuesta2: Encuesta[] = []
  maxSelections = 2;
  selectedCount = 0;

  constructor(
    private inscripcionService: InscripcionService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngAfterViewInit() {
    this.liElements = Array.from(document.querySelectorAll('ul > li'));
  }

  ngOnInit() {
    this.inscripcionService.getStartups().subscribe(
      data => this.startups = data
    )
  }

  esDia24(): boolean {
    const fechaActual = moment().startOf('day')
    const fecha24Abril = moment('2024-04-24').startOf('day')
    return fechaActual.isSame(fecha24Abril, 'day')
  }

  esDia25(): boolean {
    const fechaActual = moment().startOf('day')
    const fecha25Abril = moment('2024-04-25').startOf('day')
    return fechaActual.isSame(fecha25Abril, 'day')
  }

  onEmpresaSelected(empresa: string) {
    this.selectedEmpresa.push(empresa)
  }

  enviarRespuestas() {
    const t = this.startups.filter(e => e.opcion !== undefined)
    if (t.length === this.startups.length) {
      this.startups.forEach(startup => {
        const encuesta: Encuesta = {
          startup_id: startup.id!,
          opcion: Number(startup.opcion)
        }
        this.encuesta2.push(encuesta)
      });

      console.log(this.encuesta2);


      const id = JSON.parse(sessionStorage.getItem('user')!).id
      this.inscripcionService.sendStartups(id, this.encuesta2).subscribe(
        data => {
          this.toastrService.success('Gracias por participar en la encuesta', 'Exito', { timeOut: 3000, progressBar: true });
        }
      )

      const qr = sessionStorage.getItem('qr')
      setTimeout(() => {
        this.router.navigate([`/profile/${qr}`]);
      }, 3000);
    } else {
      this.toastrService.error('Necesitas responder todas las opciones.', 'Error', { timeOut: 3000, progressBar: true });
    }
  }

  updateSelectedCount() {
    this.selectedCount = this.startups.filter(startup => startup.voted == true).length;
  }

  toggleCheckbox(index: number) {
    if (this.startups[index].voted) {
      this.selectedCount--;
    } else {
      if (this.selectedCount < this.maxSelections) {
        this.selectedCount++;
        this.onEmpresaSelected(this.startups[index].nombre)
      } else {
        this.startups[index].voted = false;
        return;
      }
    }
    this.startups[index].voted = !this.startups[index].voted;
  }

  toggleSlide() {

    if (this.selectedCount >= 1) {
      this.startups.forEach(e => {
        if (e.voted) {
          const nuevaStartup: Encuesta = {
            startup_id: e.id!,
            opcion: 1!
          };
          this.encuesta.push(nuevaStartup)
        }
      });

      const id = JSON.parse(sessionStorage.getItem('user')!).id
      this.inscripcionService.sendStartups(id, this.encuesta).subscribe(
        data => {
          this.toastrService.success('Gracias por participar en la encuesta', 'Exito', { timeOut: 3000, progressBar: true });
        }
      )

      const qr = sessionStorage.getItem('qr')
      setTimeout(() => {
        this.router.navigate([`/profile/${qr}`]);
      }, 3000);
    } else {
      this.toastrService.error('Necesitas seleccionar al menos un proyecto.', 'Error', { timeOut: 3000, progressBar: true });
    }
  }

}

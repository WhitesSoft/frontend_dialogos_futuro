import { CommonModule, DatePipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Startup } from '../../../core/models/startup.models';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { InscripcionService } from '../../services/inscripcion.service';
import { MomentModule } from 'ngx-moment';

import moment from 'moment';

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
  // startups: Startup[] = []
  maxSelections = 2;
  selectedCount = 0;

  @ViewChild('radioSi') radioSi!: ElementRef<HTMLInputElement>;
  @ViewChild('radioPodria') radioPodria!: ElementRef<HTMLInputElement>;
  @ViewChild('radioTodavia') radioTodavia!: ElementRef<HTMLInputElement>;
  @ViewChild('radioNo') radioNo!: ElementRef<HTMLInputElement>;


  constructor(
    private inscripcionService: InscripcionService,
    private toastrService: ToastrService,
    private router: Router
  ) {  }

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


  startups: Startup[] = [
    {
      id: 1,
      nombre: "TechCo",
      descripcion: "TechCo es una startup que se especializa en el desarrollo de software personalizado para empresas de todos los tamaños.",
      voted: false
    },
    {
      id: 2,
      nombre: "EcoEnergy",
      descripcion: "EcoEnergy es una startup que se dedica a la investigación y desarrollo de tecnologías renovables para la generación de energía limpia.",
      voted: false
    },
    {
      id: 3,
      nombre: "FoodHub",
      descripcion: "FoodHub es una startup que conecta a productores locales de alimentos con consumidores a través de una plataforma en línea.",
      voted: false
    },
    // Agrega más startups si lo deseas
  ];

  mostrarSeleccion() {
    if (this.radioSi.nativeElement.checked) {
      console.log('Siuuu');
    } else if (this.radioPodria.nativeElement.checked) {
      console.log('Podria');
    } else if (this.radioTodavia.nativeElement.checked) {
      console.log('Todavía paaa');
    } else if (this.radioNo.nativeElement.checked) {
      console.log('nega');
    } else {
      console.log('nada');
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
      } else {
        this.startups[index].voted = false;
        return;
      }
    }
    this.startups[index].voted = !this.startups[index].voted;
  }

  toggleSlide() {

    let startups: any[] = []
    this.startups.forEach(e => {
      if (e.voted) {
        startups.push(e.id)
      }
    });

    const id = JSON.parse(sessionStorage.getItem('user')!).id
    this.inscripcionService.saveStartups(id, startups).subscribe(
      data => {
        this.toastrService.success('Gracias por participar en la encuesta', 'Exito', { timeOut: 3000, progressBar: true });
      }
    )


    const qr = sessionStorage.getItem('qr')
    setTimeout(() => {
      this.router.navigate([`/profile/${qr}`]);
    }, 3000);
  }

}

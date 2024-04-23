import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Startup } from '../../../core/models/startup.models';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { InscripcionService } from '../../services/inscripcion.service';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {

  selectedEmpresa: string[] = [];
  isExpanded: boolean = false;
  liElements: HTMLLIElement[];
  startups: Startup[] = []

  constructor(
    private inscripcionService: InscripcionService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngAfterViewInit() {
    this.liElements = Array.from(document.querySelectorAll('ul > li'));
  }

  ngOnInit(){
    this.inscripcionService.getStartups().subscribe(
      data => this.startups = data
    )
  }

  onEmpresaSelected(empresa: string) {
    this.selectedEmpresa.push(empresa);
    console.log('Empresa seleccionada:', empresa);
  }

  // startups: Startup[] = [
  //   {
  //     id: 1,
  //     nombre: "TechCo",
  //     descripcion: "TechCo es una startup que se especializa en el desarrollo de software personalizado para empresas de todos los tamaños.",
  //     voted: false
  //   },
  //   {
  //     id: 2,
  //     nombre: "EcoEnergy",
  //     descripcion: "EcoEnergy es una startup que se dedica a la investigación y desarrollo de tecnologías renovables para la generación de energía limpia.",
  //     voted: false
  //   },
  //   {
  //     id: 3,
  //     nombre: "FoodHub",
  //     descripcion: "FoodHub es una startup que conecta a productores locales de alimentos con consumidores a través de una plataforma en línea.",
  //     voted: false
  //   },
  //   // Agrega más startups si lo deseas
  // ];


  maxSelections = 2;
  selectedCount = 0;

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
      if(e.voted){
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

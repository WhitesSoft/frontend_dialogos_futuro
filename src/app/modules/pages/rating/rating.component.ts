import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Startup } from '../../../core/models/startup.models';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {

  constructor(private toastrService: ToastrService, private router: Router){

  }

  selectedEmpresa: string[] = [];
  isExpanded: boolean = false;
  liElements: HTMLLIElement[];

  ngAfterViewInit() {
    this.liElements = Array.from(document.querySelectorAll('ul > li'));
  }

  onEmpresaSelected(empresa: string) {
    this.selectedEmpresa.push(empresa);
    console.log('Empresa seleccionada:', empresa);
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
    this.toastrService.success('Gracias por participar en la encuesta', 'Exito', { timeOut: 3000, progressBar: true });

    if (this.isExpanded) {
      this.liElements.forEach(li => {
        li.style.pointerEvents = 'none'; // Deshabilitar clics en los elementos li
      });
    } else {
      this.liElements.forEach(li => {
        li.style.pointerEvents = 'auto'; // Habilitar clics en los elementos li nuevamente
      });
    }
  
    setTimeout(() => {
      this.router.navigate(['/profile/5']);
    }, 3000); 
  }

    



}

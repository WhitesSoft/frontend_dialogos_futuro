import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {

  selectedEmpresa: string = '';
  isExpanded: boolean = false;
  liElements: HTMLLIElement[];

  ngAfterViewInit() {
    this.liElements = Array.from(document.querySelectorAll('ul > li'));
  }

  onEmpresaSelected(empresa: string) {
    this.selectedEmpresa = empresa;
    console.log('Empresa seleccionada:', empresa);
  }

  toggleSlide() {
    this.isExpanded = !this.isExpanded;
    if (this.isExpanded) {
      this.liElements.forEach(li => {
        li.style.pointerEvents = 'none'; // Deshabilitar clics en los elementos li
      });
    } else {
      this.liElements.forEach(li => {
        li.style.pointerEvents = 'auto'; // Habilitar clics en los elementos li nuevamente
      });
    }}

}

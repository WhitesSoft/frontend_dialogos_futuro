import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {


  lista:any = [
    {
      nombre: "Marco Cardozo",
      actividad: "Desarrollador FrontEnd",
      foto: "https://avatars.githubusercontent.com/u/110841722?v=4"
    },
    {
      nombre: "Juan Montero",
      actividad: "Desarrollador FrontEnd",
      foto: "https://avatars.githubusercontent.com/u/49206077?v=4"
    },
    {
      nombre: "Ronaldo Rua",
      actividad: "Desarrollador BackEnd",
      foto: "https://avatars.githubusercontent.com/u/111312783?v=4"
    },
    {
      nombre: "Ricardo Campos",
      actividad: "Desarrollador BackEnd",
      foto: "https://scontent.flpb1-2.fna.fbcdn.net/v/t1.6435-1/154887070_1573039276388907_3625918582512795750_n.jpg?stp=dst-jpg_p100x100&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=E6a-dRfBYvMAb4iPVQq&_nc_ht=scontent.flpb1-2.fna&oh=00_AfA-den2XOnIYrwEqJeYBKpy54PPCBO2heQmkJsE00VQJg&oe=664D4E18"
    }
  ]
}

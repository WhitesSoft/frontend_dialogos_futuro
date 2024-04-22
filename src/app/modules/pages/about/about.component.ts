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
    },
    {
      nombre: "Cristian Nieves",
      actividad: "Logistica",
      foto: "https://scontent.fvvi1-2.fna.fbcdn.net/v/t1.6435-9/166136837_1883504698471048_6200582570085422191_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Giax3SVkRd8Ab5TPomh&_nc_ht=scontent.fvvi1-2.fna&oh=00_AfC390Ep3L0xfzrnreiIlNDW3RcZaDUOt2O8-WHjEFc9nw&oe=664DC463"
    },
    {
      nombre: "Alvaro Castillo",
      actividad: "Logistica",
      foto: "https://scontent.fvvi1-1.fna.fbcdn.net/v/t39.30808-1/393497868_914206586802096_5089463014167466505_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ik_sjrkOF-8Ab6aX9Da&_nc_oc=AdgPX5nzoz-0BOqUUlDMBZylFD_wp_mSP4po_Lia4thWN93XXDH9ZVPJYiVpwR8xiuI&_nc_ht=scontent.fvvi1-1.fna&oh=00_AfAFGwvOKfOKXsMcSiNljK0Ca4S76iuJW7vGkvpB00HGxA&oe=662C3F33"
    }
    ,
    {
      nombre: "Pablo Tarifa",
      actividad: "Logistica",
      foto: "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg"
    }
  ]
}

import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Inscrito } from '../../../core/models/inscrito.models';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {

  inscritos: Inscrito [] = [
    {
      nombres: "Juan",
      apellidos: "Perez",
      residencia: "Calle 123",
      correo: "juan@example.com",
      organizacion: "Empresa ABC",
      ci: "1234567",
      plan: "Plan A",
      celular: "123456789"
  },
  {
      nombres: "María",
      apellidos: "Gomez",
      residencia: "Avenida XYZ",
      correo: "maria@example.com",
      organizacion: "Compañía XYZ",
      ci: "7654321",
      plan: "Plan B",
      celular: "987654321"
  }
  ]

}

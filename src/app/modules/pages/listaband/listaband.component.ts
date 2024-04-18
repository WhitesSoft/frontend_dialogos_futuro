import { Component } from '@angular/core';
import { InscripcionService } from '../../services/inscripcion.service';
import { lista } from '../../../core/models/lista.models';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { BandsPipe } from '../../../core/pipes/bands.pipe';

@Component({
  selector: 'app-listaband',
  standalone: true,
  imports: [CommonModule, FormsModule, BandsPipe],
  templateUrl: './listaband.component.html',
  styleUrl: './listaband.component.scss'
})
export class ListabandComponent {

  lista:lista[] = []
  filter:string = ''

  constructor(private inscripcionServ:InscripcionService, private toastrService: ToastrService){

  }



  ngOnInit(){
    this.getList();
  }

  getList(){
    this.inscripcionServ.getIdentificadores().subscribe( response => {
      this.lista = Object.values(response);
    })
  }

  liberarManilla(id:number){
    this.inscripcionServ.liberarManilla(id).subscribe(response => {
      this.toastrService.success('Liberacion exitosa', 'Exito', { timeOut: 3000, progressBar: true });
      this.getList();
    })
  }

}

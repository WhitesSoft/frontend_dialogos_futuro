import { Component } from '@angular/core';
import { InscripcionService } from '../../services/inscripcion.service';
import { ActivatedRoute } from '@angular/router';
import { Inscrito } from '../../../core/models/inscrito.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  inscrito: Inscrito

  constructor(
    private inscripcionService: InscripcionService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getInscrito()
  }
  getInscrito() {

    this.activateRoute.params.subscribe(params => {
      const id = params['id']
      console.log(id);
      this.inscripcionService.getInscrito(Number(id)).subscribe(
        data => {this.inscrito = data
          console.log(this.inscrito)
        },
        err => {
          console.log('no se puede traer uwu', err);
        }

      )
    })

  }


}

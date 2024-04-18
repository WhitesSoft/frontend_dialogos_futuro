import { Component } from '@angular/core';
import { Expositor } from '../../../core/models/expositor.models';
import { InscripcionService } from '../../services/inscripcion.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-expositor',
  standalone: true,
  imports: [],
  templateUrl: './profile-expositor.component.html',
  styleUrl: './profile-expositor.component.scss'
})
export class ProfileExpositorComponent {

  expositor: Expositor

  constructor(
    private inscripcionService: InscripcionService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getExpositor()
  }

  getExpositor() {

    this.activateRoute.params.subscribe(params => {
      const id = params['id']
      console.log(id);
      this.inscripcionService.getExpositor(id).subscribe(
        data => {
          this.expositor = data
          console.log(this.expositor)
        },
        err => {
          console.log('no se puede traer uwu', err);
        }
      )
    })

  }


}

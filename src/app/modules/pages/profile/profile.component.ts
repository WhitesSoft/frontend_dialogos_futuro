import { Component } from '@angular/core';
import { InscripcionService } from '../../services/inscripcion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Inscrito } from '../../../core/models/inscrito.models';
import { CommonModule } from '@angular/common';
import { NombrePipe } from '../../../core/pipes/nombre.pipe';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    NombrePipe
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  inscrito: Inscrito

  constructor(
    private inscripcionService: InscripcionService,
    private activateRoute: ActivatedRoute,
    private router:Router
  ) { }

  async ngOnInit() {
    await this.getInscrito()
  }
  async getInscrito() {

    this.activateRoute.params.subscribe(params => {
      const id = params['id']
      console.log(id);

      const body: any = {
        codigo_qr: id
      }

      this.inscripcionService.obtenerIdentificador(body).subscribe(
        data => {
          sessionStorage.setItem('qr', id)
          this.inscripcionService.saveUserToken(data)

          this.inscripcionService.getInscritoQr(id).subscribe(
            data => {
              this.inscrito = data
              this.inscripcionService.saveAdmin('user')
              this.inscripcionService.saveUserData(this.inscrito)
            },
            err => {
              console.log('Error obteniendo data', err);
            }
          )
        }, err => {
          //this.router.navigate(['/error'])
        }
      )
    })
  }


}

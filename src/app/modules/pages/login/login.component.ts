import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InscripcionService } from '../../services/inscripcion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private inscriptionService: InscripcionService, private router:Router){}

  loginData = {
    username: '',
    password: ''
  }

  login(){
    this.inscriptionService.login(this.loginData).subscribe(response => {
      sessionStorage.setItem('rol', "sociedad")
      this.inscriptionService.saveUserToken(response)
      this.router.navigate(['/admin'])
    })
  }

}

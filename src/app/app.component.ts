import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme.service';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NavbarComponent } from './modules/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, AngularSvgIconModule, NavbarComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  title = 'frontend_sceii';

  constructor(private router:Router){
    
  }

  openTab = 1;

  ngOnInit(): void {
     if(sessionStorage.getItem('currentTab')){
      this.openTab = Number(sessionStorage.getItem('currentTab'));
     }
  }



  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
    sessionStorage.setItem('currentTab', this.openTab.toString());
  }

}

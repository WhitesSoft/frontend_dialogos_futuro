import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, AngularSvgIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss', animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          opacity: 1,
          transform: 'translateY(0)',
          visibility: 'visible',
        }),
      ),
      state(
        'closed',
        style({
          opacity: 0,
          transform: 'translateY(-20px)',
          visibility: 'hidden',
        }),
      ),
      transition('open <=> closed', [animate('0.2s')]),

    ]),
  ],
})
export class NavbarComponent implements OnInit {

  public isOpen = false;

  public themeColors = [
    {
      name: 'base',
      code: '#e11d48',
    },
    {
      name: 'amarillo',
      code: '#f59e0b',
    },
    {
      name: 'verde',
      code: '#22c55e',
    },
    {
      name: 'azul',
      code: '#3b82f6',
    },
    {
      name: 'naranja',
      code: '#ea580c',
    },
    {
      name: 'rojo',
      code: '#cc0022',
    },
    {
      name: 'violeta',
      code: '#6d28d9',
    },
    {
      name: 'turquesa',
      code: '#40E0D0'
    }
  ];

   themeMode = ['light', 'dark'];

  constructor(
    public themeService: ThemeService
  ){

  }

  ngOnInit(): void {}

   toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  toggleThemeMode() {
    this.themeService.theme.update((theme) => {
      const mode = !this.themeService.isDark ? 'dark' : 'light';
      return { ...theme, mode: mode };
    });
  }

  toggleThemeColor(color: string) {
    this.themeService.theme.update((theme) => {
      return { ...theme, color: color };
    });
  }

}

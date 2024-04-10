import { trigger, state, style, animate, transition, ɵBrowserAnimationBuilder } from '@angular/animations';
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
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
export class AppComponent {
  title = 'frontend_sceii';
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

   toggleMobileMenu(): void {
    //this.menuService.showMobileMenu = true;
  }

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

import { Routes } from '@angular/router';
import { CertificadoComponent } from './modules/pages/certificado/certificado.component';
import { TallerComponent } from './modules/pages/taller/taller.component';
import { GratuitoComponent } from './modules/pages/gratuito/gratuito.component';
import { ListaComponent } from './modules/pages/lista/lista.component';

export const routes: Routes = [
  {
    path: "plan-gratuito",
    component: GratuitoComponent,
  },
  {
    path: "plan-certificado",
    component: CertificadoComponent,
  },
  {
    path: "plan-taller",
    component: TallerComponent,
  },
  {
    path: "lista",
    component: ListaComponent,
  },
];

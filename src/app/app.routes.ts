import { Routes } from '@angular/router';

import { ListaComponent } from './modules/pages/lista/lista.component';
import { GratuitoComponent } from './modules/pages/gratuito/gratuito.component';
import { CertificadoComponent } from './modules/pages/certificado/certificado.component';
import { TallerComponent } from './modules/pages/taller/taller.component';
import { PlanModificarComponent } from './modules/pages/plan-modificar/plan-modificar.component';
import { ProfileComponent } from './modules/pages/profile/profile.component';

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
  {
    path: "modificar-inscripcion/:id",
    component: PlanModificarComponent,
  },
  {
    path: "profile/:id",
    component: ProfileComponent,
  },

];

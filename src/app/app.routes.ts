import { Routes } from '@angular/router';

import { ListaComponent } from './modules/pages/lista/lista.component';
import { GratuitoComponent } from './modules/pages/agregaciones/gratuito/gratuito.component';
import { CertificadoComponent } from './modules/pages/agregaciones/certificado/certificado.component';
import { TallerComponent } from './modules/pages/agregaciones/taller/taller.component';
import { PlanModificarComponent } from './modules/pages/modificaciones/plan-modificar/plan-modificar.component';

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

];

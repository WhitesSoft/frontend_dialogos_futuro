import { Routes } from '@angular/router';

import { ListaComponent } from './modules/pages/lista/lista.component';
import { GratuitoComponent } from './modules/pages/gratuito/gratuito.component';
import { CertificadoComponent } from './modules/pages/certificado/certificado.component';
import { TallerComponent } from './modules/pages/taller/taller.component';
import { PlanModificarComponent } from './modules/pages/plan-modificar/plan-modificar.component';
import { ProfileComponent } from './modules/pages/profile/profile.component';
import { RatingComponent } from './modules/pages/rating/rating.component';
import { AdminComponent } from './modules/pages/admin/admin.component';
import { ListabandComponent } from './modules/pages/listaband/listaband.component';
import { ExpositoresComponent } from './modules/pages/expositores/expositores.component';
import { ProfileExpositorComponent } from './modules/pages/profile-expositor/profile-expositor.component';
import { LoginComponent } from './modules/pages/login/login.component';
import { ControladorGuard as guard } from './core/guards/controlador.guard';



export const routes: Routes = [
  {
    path: "plan-gratuito",
    component: GratuitoComponent,
    canActivate: [guard], data: { requiredRoles: ['sociedad'] }
  },
  {
    path: "plan-certificado",
    component: CertificadoComponent,
    canActivate: [guard], data: { requiredRoles: ['sociedad'] }
  },
  {
    path: "plan-taller",
    component: TallerComponent,
    canActivate: [guard], data: { requiredRoles: ['sociedad'] }
  },
  {
    path: "lista",
    component: ListaComponent,
    canActivate: [guard], data: { requiredRoles: ['sociedad'] }
  },
  {
    path: "modificar-inscripcion/:id",
    component: PlanModificarComponent,
    canActivate: [guard], data: { requiredRoles: ['sociedad'] }
  },
  {
    path: "profile/:id",
    component: ProfileComponent,
  },
  {
    path: "rating",
    component: RatingComponent,
    canActivate: [guard]
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [guard], data: { requiredRoles: ['sociedad'] }
  },
  {
    path: "lista-bands",
    component: ListabandComponent,
    canActivate: [guard], data: { requiredRoles: ['sociedad'] }
  },
  {
    path: "expositores",
    component: ExpositoresComponent,
    canActivate: [guard], data: { requiredRoles: ['user'] }
  },
  {
    path: "profile-expositor/:id",
    component: ProfileExpositorComponent,
    canActivate: [guard], data: { requiredRoles: ['user'] }
  },
  {
    path: "login",
    component: LoginComponent,
  },
];

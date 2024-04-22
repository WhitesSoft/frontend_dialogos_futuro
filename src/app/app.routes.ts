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
import { controladorGuard } from './core/guards/controlador.guard';
import { AboutComponent } from './modules/pages/about/about.component';


export const routes: Routes = [
  {
    path: "plan-gratuito",
    component: GratuitoComponent,
    canActivate: [controladorGuard], data: { requiredRoles: ['sociedad'] }
  },
  {
    path: "plan-certificado",
    component: CertificadoComponent,
    canActivate: [controladorGuard], data: { requiredRoles: ['sociedad'] }
  },
  {
    path: "plan-taller",
    component: TallerComponent,
    canActivate: [controladorGuard], data: { requiredRoles: ['sociedad'] }
  },
  {
    path: "lista",
    component: ListaComponent,
    canActivate: [controladorGuard], data: { requiredRoles: ['sociedad'] }
  },
  {
    path: "modificar-inscripcion/:id",
    component: PlanModificarComponent,
    canActivate: [controladorGuard], data: { requiredRoles: ['sociedad'] }
  },
  {
    path: "profile/:id",
    component: ProfileComponent,
  },
  {
    path: "rating",
    component: RatingComponent,
    canActivate: [controladorGuard]
  },
  {
    path: "admin",
    component: AdminComponent,
  },
  {
    path: "lista-bands",
    component: ListabandComponent,
    canActivate: [controladorGuard], data: { requiredRoles: ['sociedad'] }
  },
  {
    path: "expositores",
    component: ExpositoresComponent,
    canActivate: [controladorGuard]
  },
  {
    path: "profile-expositor/:id",
    component: ProfileExpositorComponent,
    canActivate: [controladorGuard]
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
];

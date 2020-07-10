import { Routes } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { LandingComponent } from './landing/landing.component';
import { ForumComponent } from './forum/forum.component';

export const BASE_ROUTE = '';

export const APP_ROUTES: Routes = [
  { path: 'inicio', component: LandingComponent, canActivate: [] },
  { path: 'foro', component: ForumComponent, canActivate: [] },
  { path: 'equipos', component: DevicesComponent, canActivate: [] },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

import { Routes } from '@angular/router';
import { LandingComponent } from './routed_components/landing/landing.component';

export const BASE_ROUTE = '';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent, canActivate: [] }
];

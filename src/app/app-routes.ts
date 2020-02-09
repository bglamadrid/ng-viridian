import { Routes } from '@angular/router';
import { DeviceCatalogComponent } from './routed_components/device-catalog/device-catalog.component';
import { LandingComponent } from './routed_components/landing/landing.component';
import { QuestionsAnswersComponent } from './routed_components/questions-answers/questions-answers.component';

export const BASE_ROUTE = '';

export const APP_ROUTES: Routes = [
  { path: 'inicio', component: LandingComponent, canActivate: [] },
  { path: 'foro', component: QuestionsAnswersComponent, canActivate: [] },
  { path: 'equipos', component: DeviceCatalogComponent, canActivate: [] },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

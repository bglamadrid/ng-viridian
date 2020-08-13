import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { SelectivePreloadingStrategyService } from 'src/app/selective-preloading-strategy.service';
import { DevicesComponent } from './routes/devices-catalog/devices.component';
import { LandingComponent } from './routes/landing/landing.component';
import { OnlineCoursesComponent } from './routes/online-courses/online-courses.component';
import { ForumComponent } from './routes/qa-forum/forum.component';

export interface AppRoute extends Route {
  data?: { matIcon: string, title: string };
}

export const APP_ROUTES: AppRoute[] = [
  {
    path: 'inicio',
    component: LandingComponent,
    data: { matIcon: 'home', title: 'Inicio' },
    canActivate: []
  },
  {
    path: 'foro',
    component: ForumComponent,
    data: { matIcon: 'question_answer', title: 'Preguntas y Respuestas' },
    canActivate: []
  },
  {
    path: 'equipos',
    component: DevicesComponent,
    data: { matIcon: 'devices', title: 'Equipos' },
    canActivate: []
  },
  {
    path: 'cursos',
    component: OnlineCoursesComponent,
    data: { matIcon: 'school', title: 'Clases TIC 2.0' },
    canActivate: []
  },
  {
    path: '', redirectTo: 'inicio', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    APP_ROUTES,
    { preloadingStrategy: SelectivePreloadingStrategyService }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

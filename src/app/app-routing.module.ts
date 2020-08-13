import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategyService } from 'src/app/selective-preloading-strategy.service';
import { DevicesComponent } from './routes/devices-catalog/devices.component';
import { LandingComponent } from './routes/landing/landing.component';
import { OnlineCoursesComponent } from './routes/online-courses/online-courses.component';
import { ForumComponent } from './routes/qa-forum/forum.component';

export const APP_ROUTES: Routes = [
  { path: 'inicio', component: LandingComponent, canActivate: [] },
  { path: 'foro', component: ForumComponent, canActivate: [] },
  { path: 'equipos', component: DevicesComponent, canActivate: [] },
  { path: 'cursos', component: OnlineCoursesComponent, canActivate: [] },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(
    APP_ROUTES,
    { preloadingStrategy: SelectivePreloadingStrategyService }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

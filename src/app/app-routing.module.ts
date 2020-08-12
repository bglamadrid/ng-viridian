import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategyService } from 'src/app/selective-preloading-strategy.service';
import { LandingComponent } from './routes/landing/landing.component';
import { ForumComponent } from './routes/qa-forum/forum.component';
import { DevicesComponent } from './routes/devices-catalog/devices.component';

export const APP_ROUTES: Routes = [
  { path: 'inicio', component: LandingComponent, canActivate: [] },
  { path: 'foro', component: ForumComponent, canActivate: [] },
  { path: 'equipos', component: DevicesComponent, canActivate: [] },
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

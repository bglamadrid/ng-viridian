import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from 'src/app/app-routes';
import { SelectivePreloadingStrategyService } from 'src/app/selective-preloading-strategy.service';

@NgModule({
  imports: [RouterModule.forRoot(
    APP_ROUTES,
    { preloadingStrategy: SelectivePreloadingStrategyService }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

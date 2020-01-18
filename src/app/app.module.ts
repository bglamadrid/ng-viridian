import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './routed_components/landing/landing.component';
import { SharedModule } from './shared/shared.module';
import { NavComponent } from './components/nav/nav.component';
import { QuestionsAnswersComponent } from './routed_components/questions-answers/questions-answers.component';
import { DeviceCatalogComponent } from './routed_components/device-catalog/device-catalog.component';
import { QuestionsGridComponent } from './routed_components/questions-answers/questions-grid/questions-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavComponent,
    QuestionsAnswersComponent,
    DeviceCatalogComponent,
    QuestionsGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

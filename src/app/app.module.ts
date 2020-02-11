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
import { DeviceCardComponent } from './routed_components/device-catalog/device-card/device-card.component';
import { DeviceFiltersCardComponent } from './routed_components/device-catalog/device-filters-card/device-filters-card.component';
import { NavHeaderComponent } from './components/nav/header/header.component';
import { CommonInMemoryService } from './services/in-memory/common.in-memory.service';
import { QuestionFiltersCardComponent } from './routed_components/questions-answers/question-filters-card/question-filters-card.component';
import { QuestionThreadCardComponent } from './routed_components/questions-answers/question-thread-card/question-thread-card.component';
import { DeviceDetailsCardComponent } from './routed_components/device-catalog/device-details-card/device-details-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavComponent,
    QuestionsAnswersComponent,
    DeviceCatalogComponent,
    QuestionsGridComponent,
    DeviceCardComponent,
    DeviceFiltersCardComponent,
    NavHeaderComponent,
    QuestionFiltersCardComponent,
    QuestionThreadCardComponent,
    DeviceDetailsCardComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    CommonInMemoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

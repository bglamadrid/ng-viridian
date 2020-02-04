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
import { DeviceCrudInMemoryService } from './services/in-memory/crud/device.crud.in-memory.service';
import { PersonProfileCrudInMemoryService } from './services/in-memory/crud/person-profile.crud.in-memory.service';
import { UserProfileCrudInMemoryService } from './services/in-memory/crud/user-profile.crud.in-memory.service';

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
    NavHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    SharedModule
  ],
  providers: [
    CommonInMemoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

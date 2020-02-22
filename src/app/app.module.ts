import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavHeaderComponent } from './components/nav/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { DeviceCardComponent } from './routed_components/device-catalog/device-card/device-card.component';
import { DeviceCatalogComponent } from './routed_components/device-catalog/device-catalog.component';
import { DeviceFiltersPanelComponent } from './routed_components/device-catalog/device-filters-panel/device-filters-panel.component';
import { LandingComponent } from './routed_components/landing/landing.component';
import { QuestionFiltersPanelComponent } from './routed_components/questions-answers/question-filters-panel/question-filters-panel.component';
import { QuestionsAnswersComponent } from './routed_components/questions-answers/questions-answers.component';
import { QuestionsGridComponent } from './routed_components/questions-answers/questions-grid/questions-grid.component';
import { CommonInMemoryService } from './services/in-memory/common.in-memory.service';
import { SharedModule } from './shared/shared.module';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { DeviceCrudInMemoryService } from './services/in-memory/crud/device.crud.in-memory.service';
import { QuestionCrudInMemoryService } from './services/in-memory/crud/question.crud.in-memory.service';
import { DeviceDialogComponent } from './dialogs/device-dialog/device-dialog.component';
import { UserProfileCrudInMemoryService } from './services/in-memory/crud/user-profile.crud.in-memory.service';
import { QuestionDialogComponent } from './dialogs/question-dialog/question-dialog.component';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavComponent,
    QuestionsAnswersComponent,
    DeviceCatalogComponent,
    QuestionsGridComponent,
    DeviceCardComponent,
    DeviceFiltersPanelComponent,
    NavHeaderComponent,
    QuestionFiltersPanelComponent,
    DeviceDialogComponent,
    QuestionDialogComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    CommonInMemoryService,
    DeviceCrudInMemoryService,
    QuestionCrudInMemoryService,
    UserProfileCrudInMemoryService
  ],
  entryComponents: [
    DeviceDialogComponent,
    QuestionDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataActionsComponent } from './components/data-actions/data-actions.component';
import { MatProgressSpinnerCenteredComponent } from './components/mat-spinner-centered/mat-spinner-centered.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { ConfirmationDialogComponent } from './dialogs/confirmation/confirmation.dialog.component';
import { UserProfileDialogComponent } from './dialogs/user-profile/user-profile.dialog.component';
import { MaterialModule } from './material/shared.material.module';

@NgModule({
  declarations: [
    MatProgressSpinnerCenteredComponent,
    DataActionsComponent,
    ConfirmationDialogComponent,
    PersonFormComponent,
    UserProfileDialogComponent
  ],
  entryComponents: [
    ConfirmationDialogComponent,
    UserProfileDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  exports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,

    DataActionsComponent,
    MatProgressSpinnerCenteredComponent,
    PersonFormComponent,
    ConfirmationDialogComponent,
    UserProfileDialogComponent
  ]
})
export class SharedModule { }

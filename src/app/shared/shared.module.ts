import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataActionsComponent } from './components/data-actions/data-actions.component';
import { MatProgressSpinnerCenteredComponent } from './components/mat-spinner-centered/mat-spinner-centered.component';
import { ConfirmationDialogComponent } from './dialogs/confirmation/confirmation.dialog.component';
import { MaterialModule } from './material/shared.material.module';

@NgModule({
  declarations: [
    MatProgressSpinnerCenteredComponent,
    DataActionsComponent,
    ConfirmationDialogComponent
  ],
  entryComponents: [
    ConfirmationDialogComponent
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
    ConfirmationDialogComponent
  ]
})
export class SharedModule { }

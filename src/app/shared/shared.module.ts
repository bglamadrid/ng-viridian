import { NgModule } from '@angular/core';
import { MatProgressSpinnerCenteredComponent } from './mat-spinner-centered/mat-spinner-centered.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation.dialog.component';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [
    MatProgressSpinnerCenteredComponent,
    ConfirmationDialogComponent
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  imports: [
    AngularMaterialModule
  ],
  exports: [
    AngularMaterialModule,
    MatProgressSpinnerCenteredComponent,
    ConfirmationDialogComponent
  ]
})
export class SharedModule { }

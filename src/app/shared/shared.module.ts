import { NgModule } from '@angular/core';
import { MatProgressSpinnerCenteredComponent } from './mat-spinner-centered/mat-spinner-centered.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation.dialog.component';
import { AngularMaterialModule } from './angular-material.module';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    MatProgressSpinnerCenteredComponent,
    ConfirmationDialogComponent,
    SafePipe
  ],
  imports: [
    AngularMaterialModule
  ],
  exports: [
    AngularMaterialModule,
    MatProgressSpinnerCenteredComponent,
    ConfirmationDialogComponent,
    SafePipe
  ]
})
export class SharedModule { }

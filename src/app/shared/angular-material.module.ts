import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

export const MATERIAL_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatTableModule
];

// apps may change this module
export const DATE_PROVIDER_IMPLEMENTATION = MatNativeDateModule;


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL_MODULES,
    DATE_PROVIDER_IMPLEMENTATION
  ],
  exports: [
    MATERIAL_MODULES,
    DATE_PROVIDER_IMPLEMENTATION
  ]
})
export class AngularMaterialModule { }

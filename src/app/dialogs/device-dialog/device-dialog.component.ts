import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatTable } from '@angular/material';
import { Observable } from 'rxjs';
import { DeviceCatalogService } from 'src/app/routed_components/device-catalog/device-catalog.service';
import { LBL_BRAND, LBL_NAME, LBL_SPECS, LBL_KEY, LBL_VALUE } from 'src/app/shared/i18/es/labels';
import { Descriptable } from 'src/models/Descriptable';
import { DeviceDialogData } from './DeviceDialogData';

@Component({
  selector: 'app-device-dialog',
  templateUrl: './device-dialog.component.html',
  styleUrls: [
    '../../../assets/styles/forms.sass',
    './device-dialog.component.sass'
  ]
})
export class DeviceDialogComponent
  implements OnInit {

  protected svc: DeviceCatalogService;

  public formGroup: FormGroup;
  public brands$: Observable<Descriptable[]>;

  @ViewChild('specsTable', { static: true }) public specsTable: MatTable<FormArray>;
  public tableColumns: string[];

  public get name() { return this.formGroup.get('name'); }
  public get brand() { return this.formGroup.get('brand'); }
  public get specs() { return this.formGroup.get('specs') as FormArray; }
  public get urls() { return this.formGroup.get('urls') as FormArray; }

  public get labelName(): string { return LBL_NAME; }
  public get labelBrand(): string { return LBL_BRAND; }
  public get labelSpecs(): string { return LBL_SPECS; }
  public get labelKey(): string { return LBL_KEY; }
  public get labelValue(): string { return LBL_VALUE; }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DeviceDialogData,
    protected fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      brand: [null, Validators.required],
      specs: this.fb.array([ this.fb.array(['', '']) ]),
      urls: this.fb.array([''], Validators.compose([Validators.minLength(1)]))
    });

    this.svc = this.data.svc;

    this.tableColumns = [ 'key', 'value', 'actions' ];
  }

  ngOnInit() {
    this.brands$ = this.svc.deviceBrands$;
  }

  public onClickAddSpec(): void {
    const specFormControl = this.fb.array(['', '']);
    this.specs.push(specFormControl);
    this.specsTable.renderRows();
  }

  public onClickDeleteSpec(index: number): void {
    this.specs.removeAt(index);
    this.specsTable.renderRows();
  }

  public onClickAddUrl(): void {
    const urlFormControl = this.fb.control('');
    this.urls.push(urlFormControl);
  }

  public onClickDeleteUrl(index: number): void {
    this.urls.removeAt(index);
  }

  public onSubmit() {
    alert('submit');
    alert(`formGroup.valid=${this.formGroup.valid}`);
    console.log(this.formGroup.value);
  }

}

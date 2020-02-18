import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatTable, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { DeviceCatalogService } from 'src/app/routed_components/device-catalog/device-catalog.service';
import { LBL_BRAND, LBL_NAME, LBL_SPECS, LBL_KEY, LBL_VALUE, LBL_TYPE, LBL_DESCRIPTION } from 'src/app/shared/i18/es/labels';
import { Descriptable } from 'src/models/Descriptable';
import { DeviceDialogData } from './DeviceDialogData';
import { Device } from 'src/models/entities/Device';
import { Image } from 'src/models/Image';
import { finalize } from 'rxjs/operators';

export const requiredTextInput = ['', Validators.required];

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
  protected deviceId: number;
  protected images: Image[];

  public submitting: boolean;
  public formGroup: FormGroup;
  public brands$: Observable<Descriptable[]>;
  public deviceTypes$: Observable<Descriptable[]>;

  @ViewChild('specsTable', { static: true }) public specsTable: MatTable<FormArray>;
  public specsTableColumns: string[];

  public get name() { return this.formGroup.get('name'); }
  public get brand() { return this.formGroup.get('brand'); }
  public get type() { return this.formGroup.get('type'); }
  public get description() { return this.formGroup.get('description'); }
  public get specs() { return this.formGroup.get('specs') as FormArray; }
  public get urls() { return this.formGroup.get('urls') as FormArray; }

  public get labelName(): string { return LBL_NAME; }
  public get labelBrand(): string { return LBL_BRAND; }
  public get labelType(): string { return LBL_TYPE; }
  public get labelDescription(): string { return LBL_DESCRIPTION; }
  public get labelSpecs(): string { return LBL_SPECS; }
  public get labelKey(): string { return LBL_KEY; }
  public get labelValue(): string { return LBL_VALUE; }

  public set device(dvc: Device) {
    this.deviceId = dvc.id;
    this.images = dvc.images ? dvc.images : [];
    this.name.setValue(dvc.name);
    this.brand.setValue(dvc.brand.id);
    this.type.setValue(dvc.deviceType.id);
    this.description.setValue(dvc.description);

    const specifications = [];
    for (const key in dvc.specifications) {
      if (dvc.specifications.hasOwnProperty(key)) {
        specifications.push([key, dvc.specifications[key]]);
      }
    }
    this.specs.setValue(specifications);
    this.urls.setValue(dvc.urls);
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) data: DeviceDialogData,
    protected self: MatDialogRef<DeviceDialogComponent>,
    protected fb: FormBuilder
  ) {
    this.submitting = false;
    this.formGroup = this.fb.group({
      name: requiredTextInput,
      brand: [null, Validators.required],
      type: [null, Validators.required],
      description: [''],
      specs: this.fb.array([ this.fb.array([requiredTextInput, requiredTextInput]) ], Validators.required),
      urls: this.fb.array([])
    });

    this.svc = data.svc;
    if (data.device) {
      this.device = data.device;
    } else {
      this.deviceId = 0;
      this.images = [];
    }

    this.specsTableColumns = [ 'key', 'value', 'actions' ];
  }

  ngOnInit() {
    this.brands$ = this.svc.deviceBrands$;
    this.deviceTypes$ = this.svc.deviceTypes$;
  }

  protected constructSpecifications(): { [key: string]: string } {
    const specifications = {};
    for (const c of this.specs.value) {
      specifications[c[0]] = c[1];
    }
    return specifications;
  }

  protected constructDevice(): Device {
    return {
      id: this.deviceId,
      name: this.name.value,
      description: this.description.value,
      brand: { id: this.brand.value },
      deviceType: { id: this.type.value },
      images: this.images,
      urls: [],
      specifications: this.constructSpecifications()
    };
  }

  public onClickAddSpec(): void {
    const specFormControl = this.fb.array([requiredTextInput, requiredTextInput]);
    this.specs.push(specFormControl);
    this.specsTable.renderRows();
  }

  public onClickDeleteSpec(index: number): void {
    this.specs.removeAt(index);
    this.specsTable.renderRows();
  }

  public onClickAddUrl(): void {
    const urlFormControl = this.fb.control('', Validators.required);
    this.urls.push(urlFormControl);
  }

  public onClickDeleteUrl(index: number): void {
    this.urls.removeAt(index);
  }

  public onSubmit() {
    this.submitting = true;
    setTimeout(() => {
      const dvc = this.constructDevice();
      const request = (!dvc.id) ? this.svc.insertDevice(dvc) : this.svc.updateDevice(dvc);
      request.pipe(
        finalize(
          () => {
            this.submitting = false;
          }
        )
      ).subscribe(
        (returnedDevice) => {
          this.self.close(returnedDevice);
        }
      );
    }, 2000);
  }

}

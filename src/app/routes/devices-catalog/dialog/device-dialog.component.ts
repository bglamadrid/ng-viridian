import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Descriptable } from 'src/data/models/Descriptable';
import { Device } from 'src/data/models/entities/Device';
import { Image } from 'src/data/models/Image';
import { LBL_BRAND, LBL_DESCRIPTION, LBL_KEY, LBL_NAME, LBL_SPECS, LBL_TYPE, LBL_VALUE } from 'src/text/es/labels';
import { DevicesService } from '../devices.service';
import { DeviceDialogData } from './DeviceDialogData';

const requiredTextInput = ['', Validators.required];

@Component({
  selector: 'app-device-dialog',
  templateUrl: './device-dialog.component.html',
  styleUrls: [ './device-dialog.component.css' ]
})
export class DeviceDialogComponent
  implements OnInit {

  protected deviceId: number;
  protected images: Image[];

  public submitting$: Observable<boolean>;
  public brands$: Observable<Descriptable[]>;
  public deviceFamilies$: Observable<Descriptable[]>;

  public formGroup: FormGroup;
  public get name(): FormControl { return this.formGroup.get('name') as FormControl; }
  public get brand(): FormControl { return this.formGroup.get('brand') as FormControl; }
  public get type(): FormControl { return this.formGroup.get('type') as FormControl; }
  public get description(): FormControl { return this.formGroup.get('description') as FormControl; }
  public get specs(): FormArray { return this.formGroup.get('specs') as FormArray; }
  public get urls(): FormArray { return this.formGroup.get('urls') as FormArray; }

  @ViewChild('specsTable', { static: true }) public specsTable: MatTable<FormArray>;
  public specsTableColumns: string[] = [ 'key', 'value', 'actions' ];
  @ViewChild('urlTable', { static: true }) public urlTable: MatTable<FormControl>;
  public urlTableColumns: string[] = [ 'address', 'actions' ];

  public dialogTitle: string;

  public get labelName(): string { return LBL_NAME; }
  public get labelBrand(): string { return LBL_BRAND; }
  public get labelType(): string { return LBL_TYPE; }
  public get labelDescription(): string { return LBL_DESCRIPTION; }
  public get labelSpecs(): string { return LBL_SPECS; }
  public get labelKey(): string { return LBL_KEY; }
  public get labelValue(): string { return LBL_VALUE; }

  constructor(
    @Inject(MAT_DIALOG_DATA) data: DeviceDialogData,
    protected service: DevicesService,
    protected dialog: MatDialogRef<DeviceDialogComponent>,
    protected formBuilder: FormBuilder
  ) {
    this.dialogTitle = ((data?.device?.id) ? 'Actualizar datos de' : 'Ingresar nuevo') + ' equipo';
    this.formGroup = this.formBuilder.group({
      name: requiredTextInput,
      brand: [null, Validators.required],
      type: [null, Validators.required],
      description: [''],
      specs: this.formBuilder.array([ this.formBuilder.array([requiredTextInput, requiredTextInput]) ], Validators.required),
      urls: this.formBuilder.array([])
    });

    if (data?.device) {
      this.load(data.device);
    } else {
      this.deviceId = 0;
      this.images = [];
    }
  }

  private specsAsFormArray(dvc: Device): FormArray {
    const controls = [];
    for (const key in dvc.specifications) {
      if (dvc.specifications.hasOwnProperty(key)) {
        const keyControl = this.formBuilder.control(key, Validators.required);
        const valueControl = this.formBuilder.control(dvc.specifications[key], Validators.required);
        controls.push(this.formBuilder.array([keyControl, valueControl]));
      }
    }
    return this.formBuilder.array(controls);
  }

  private urlsAsFormArray(dvc: Device): FormArray {
    const controls = [];
    for (const url of dvc.urls) {
      const control = this.formBuilder.control(url, Validators.required);
      controls.push(control);
    }
    return this.formBuilder.array(controls);
  }

  protected load(dvc: Device) {
    this.deviceId = (dvc.id ? dvc.id : 0);
    this.images = (dvc.images ? dvc.images : []);

    this.name.setValue(dvc.name);
    this.brand.setValue(dvc.brand.id);
    this.type.setValue(dvc.deviceFamily.id);
    this.description.setValue(dvc.description);

    const specificationsFormArray = this.specsAsFormArray(dvc);
    this.formGroup.setControl('specs', specificationsFormArray);

    const urlsFormArray = this.urlsAsFormArray(dvc);
    this.formGroup.setControl('urls', urlsFormArray);
  }

  ngOnInit() {
    this.brands$ = this.service.deviceBrands$;
    this.deviceFamilies$ = this.service.deviceFamilies$;
  }

  protected constructSpecifications(): { [key: string]: string } {
    const specifications = {};
    for (const c of this.specs.value) {
      specifications[c[0]] = c[1];
    }
    return specifications;
  }

  protected asItem(): Device {
    return Object.assign<Device, Partial<Device>>(
      new Device(),
      {
        id: this.deviceId,
        name: this.name.value,
        description: this.description.value,
        brand: { id: this.brand.value },
        deviceFamily: { id: this.type.value },
        images: this.images,
        urls: [],
        specifications: this.constructSpecifications()
      }
    );
  }

  public onClickAddSpec(): void {
    const specFormControl = this.formBuilder.array([requiredTextInput, requiredTextInput]);
    this.specs.push(specFormControl);
    this.specsTable.renderRows();
  }

  public onClickDeleteSpec(index: number): void {
    this.specs.removeAt(index);
    this.specsTable.renderRows();
  }

  public onClickAddUrl(): void {
    const urlFormControl = this.formBuilder.control('', Validators.required);
    this.urls.push(urlFormControl);
    this.urlTable.renderRows();
  }

  public onClickDeleteUrl(index: number): void {
    this.urls.removeAt(index);
    this.urlTable.renderRows();
  }

  public onSubmit() {
    const dvc = this.asItem();
    this.service.insertDevice(dvc).subscribe(
      (returnedDevice) => {
        this.dialog.close(returnedDevice);
      }
    );
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Device } from 'src/models/entities/Device';
import { Observable } from 'rxjs';
import { Descriptable } from 'src/models/Descriptable';
import { DeviceCatalogService } from '../device-catalog.service';
import { LBL_UPDATE, LBL_DEVICE_FILTERS, LBL_NAME, LBL_BRAND, LBL_TYPE } from 'src/app/shared/i18/es/labels';

@Component({
  selector: 'app-device-filters-card',
  templateUrl: './device-filters-card.component.html',
  styleUrls: ['./device-filters-card.component.sass']
})
export class DeviceFiltersCardComponent
  implements OnInit {

  public filterForm: FormGroup;
  public brands$: Observable<Descriptable[]>;
  public types$: Observable<Descriptable[]>;

  public get name() { return this.filterForm.get('name') as FormControl; }
  public get brand() { return this.filterForm.get('brand') as FormControl; }
  public get type() { return this.filterForm.get('type') as FormControl; }

  public get labelName(): string { return LBL_NAME; }
  public get labelBrand(): string { return LBL_BRAND; }
  public get labelType(): string { return LBL_TYPE; }
  public get labelDeviceFilters(): string { return LBL_DEVICE_FILTERS; }
  public get labelUpdateFilters(): string { return LBL_UPDATE; }

  @Input() public set deviceFilters(dvc: Device) {
    if (dvc.brand) {
      this.brand.setValue(dvc.brand.id);
    }
    if (dvc.deviceType) {
      this.type.setValue(dvc.deviceType.id);
    }
  }

  constructor(
    protected fb: FormBuilder,
    protected svc: DeviceCatalogService
  ) {
    this.filterForm = this.fb.group({
      name: [''],
      brand: [null],
      type: [null]
    });
  }

  ngOnInit() {
    this.brands$ = this.svc.deviceBrands;
    this.types$ = this.svc.deviceTypes;
  }

}

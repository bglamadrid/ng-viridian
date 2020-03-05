import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Device } from 'src/models/entities/Device';
import { Observable } from 'rxjs';
import { Descriptable } from 'src/models/Descriptable';
import { DeviceCatalogService } from '../devices.service';
import { LBL_UPDATE, LBL_DEVICE_FILTERS, LBL_NAME, LBL_BRAND, LBL_TYPE, LBL_NO_FILTER } from 'src/text/es/labels';
import { DeviceFilters } from '../DeviceFilters';

@Component({
  selector: 'app-device-filters-panel',
  templateUrl: './device-filters-panel.component.html',
  styleUrls: [
    '../../../assets/styles/filters-panel.sass',
    './device-filters-panel.component.sass'
  ]
})
export class DeviceFiltersPanelComponent
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
  public get labelOmitFilter(): string { return LBL_NO_FILTER; }

  @Input() public set deviceFilters(dvc: Device) {
    if (dvc.name) {
      this.name.setValue(dvc.name);
    }
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

  ngOnInit(): void {
    this.brands$ = this.svc.deviceBrands$;
    this.types$ = this.svc.deviceTypes$;
  }

  public submitFilters(): void {
    const filters: Partial<DeviceFilters> = {};
    if (this.name.value) { filters.name = this.name.value; }
    if (this.brand.value) { filters.brand = { id: this.brand.value }; }
    if (this.type.value) { filters.deviceType = { id: this.type.value }; }

    if (JSON.stringify(this.svc.filters) !== JSON.stringify(filters)) {
      this.svc.filters = filters;
      this.svc.reloadDevices();
    }
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Descriptable } from 'src/data/models/Descriptable';
import { Device } from 'src/data/models/entities/Device';
import { LBL_BRAND, LBL_NAME, LBL_NO_FILTER, LBL_TYPE, LBL_UPDATE } from 'src/text/es/labels';
import { TTL_DEVICE_FILTERS } from 'src/text/es/titles';
import { DeviceFilters } from '../DeviceFilters';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-device-filters-panel',
  templateUrl: './device-filters-panel.component.html',
  styleUrls: [ './device-filters-panel.component.css' ]
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
  public get labelDeviceFilters(): string { return TTL_DEVICE_FILTERS; }
  public get labelUpdateFilters(): string { return LBL_UPDATE; }
  public get labelOmitFilter(): string { return LBL_NO_FILTER; }

  @Input() public set deviceFilters(dvc: Device) {
    if (dvc.name) {
      this.name.setValue(dvc.name);
    }
    if (dvc.brand) {
      this.brand.setValue(dvc.brand.id);
    }
    if (dvc.deviceFamily) {
      this.type.setValue(dvc.deviceFamily.id);
    }
  }

  constructor(
    protected fb: FormBuilder,
    protected svc: DevicesService
  ) {
    this.filterForm = this.fb.group({
      name: [''],
      brand: [null],
      type: [null]
    });
  }

  ngOnInit(): void {
    this.brands$ = this.svc.deviceBrands$;
    this.types$ = this.svc.deviceFamilies$;
  }

  public submitFilters(): void {
    const filters: Partial<DeviceFilters> = {};
    if (this.name.value) { filters.name = this.name.value; }
    if (this.brand.value) { filters.brand = { id: this.brand.value }; }
    if (this.type.value) { filters.deviceFamily = { id: this.type.value }; }

    if (JSON.stringify(this.svc.filters) !== JSON.stringify(filters)) {
      this.svc.filters = filters;
      this.svc.reloadDevices();
    }
  }

}

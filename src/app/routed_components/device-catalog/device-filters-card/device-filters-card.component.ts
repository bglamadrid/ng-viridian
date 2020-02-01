import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Device } from 'src/models/Device';
import { Observable } from 'rxjs';
import { Descriptable } from 'src/models/Descriptable';
import { DeviceCatalogService } from '../device-catalog.service';

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

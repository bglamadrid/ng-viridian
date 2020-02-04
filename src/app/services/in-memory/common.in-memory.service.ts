import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Descriptable } from 'src/models/Descriptable';
import { CommonService } from '../.common.service';
import { MOCK_DEVICE_BRANDS, MOCK_DEVICE_TYPES } from './crud/data/mock-devices';

@Injectable()
export class CommonInMemoryService
  implements CommonService {

  protected deviceTypes: Descriptable[];
  protected deviceBrands: Descriptable[];

  constructor() {
    this.deviceBrands = MOCK_DEVICE_BRANDS;
    this.deviceTypes = MOCK_DEVICE_TYPES;
  }

  public loadDeviceTypes(): Observable<Descriptable[]> {
    return of(this.deviceTypes);
  }

  public loadDeviceBrands(): Observable<Descriptable[]> {
    return of(this.deviceBrands);
  }

}

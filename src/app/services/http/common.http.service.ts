import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Descriptable } from 'src/models/Descriptable';
import { CommonService } from '../.common.service';
import { HttpService } from './.http.service';

@Injectable()
export class CommonHttpService
  extends HttpService
  implements CommonService {

  constructor(
    protected http: HttpClient
  ) {
    super();
  }

  public loadDeviceTypes(): Observable<Descriptable[]> {
    return this.http.get<Descriptable[]>(
      `${this.apiURL}/device_types`
    );
  }

  public loadDeviceBrands(): Observable<Descriptable[]> {
    return this.http.get<Descriptable[]>(
      `${this.apiURL}/device_brands`
    );
  }
}

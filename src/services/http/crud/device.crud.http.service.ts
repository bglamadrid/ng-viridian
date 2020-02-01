import { CrudHttpService } from './.crud.http.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from 'src/models/Device';
import { Observable } from 'rxjs';
import { Descriptable } from 'src/models/Descriptable';

@Injectable({ providedIn: 'root' })
export class DeviceCrudHttpService
  extends CrudHttpService<Device> {

  protected entityURI = 'device';
  protected entitiesURI = 'devices';

  constructor(
    protected http: HttpClient
  ) {
    super();
  }

  public loadTypes(): Observable<Descriptable[]> {
    return this.http.get<Descriptable[]>(
      `${this.apiURL}/device_types`
    );
  }

  public loadBrands(): Observable<Descriptable[]> {
    return this.http.get<Descriptable[]>(
      `${this.apiURL}/device_brands`
    );
  }

}

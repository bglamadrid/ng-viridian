import { CrudHttpService } from './.crud.http.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from 'src/models/entities/Device';
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
}

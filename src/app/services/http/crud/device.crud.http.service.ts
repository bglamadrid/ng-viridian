import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from 'src/models/entities/Device';
import { CrudHttpService } from './.crud.http.service';

@Injectable()
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

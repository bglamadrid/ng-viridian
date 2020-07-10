import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from 'src/data/models/entities/Device';
import { HttpDataService } from './.http.data.service';

@Injectable()
export class DevicesHttpDataService
  extends HttpDataService<Device> {

  protected entityURI = 'device';
  protected entitiesURI = 'devices';

  constructor(
    protected http: HttpClient
  ) {
    super();
  }
}

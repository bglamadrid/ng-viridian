import { CrudHttpService } from './.crud.http.service';
import { Injectable } from '@angular/core';
import { Brandable } from 'src/models/Brandable';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DeviceCrudHttpService
  extends CrudHttpService<Brandable> {

  protected entityURI = 'device';
  protected entitiesURI = 'devices';

  constructor(
    protected http: HttpClient
  ) {
    super();
  }

}

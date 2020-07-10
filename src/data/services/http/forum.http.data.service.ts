import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from 'src/data/models/entities/Device';
import { HttpDataService } from './.http.data.service';

@Injectable()
export class ForumHttpDataService
  extends HttpDataService<Device> {

  protected entityURI = 'forum';
  protected entitiesURI = 'forum';

  constructor(
    protected http: HttpClient
  ) {
    super();
  }
}

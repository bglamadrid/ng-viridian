import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Descriptable } from 'src/data/models/Descriptable';
import { CommonDataService } from '../common-data.service.interface';
import { HttpMessengerService } from './.http-messenger.service';

@Injectable()
export class CommonDataHttpService
  extends HttpMessengerService
  implements CommonDataService {

  public get deviceTypes$() {
    return this.http.get<Descriptable[]>(
      `${this.apiURL}/device_types`
    );
  }

  public get deviceBrands$() {
    return this.http.get<Descriptable[]>(
      `${this.apiURL}/device_brands`
    );
  }

  constructor(
    protected http: HttpClient
  ) {
    super();
  }
}

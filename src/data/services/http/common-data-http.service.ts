import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Descriptable } from 'src/data/models/Descriptable';
import { CommonDataIService } from '../common-data.iservice';
import { HttpMessengerService } from './http-messenger.abstract-service';

@Injectable()
export class CommonDataHttpService
  extends HttpMessengerService
  implements CommonDataIService {

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

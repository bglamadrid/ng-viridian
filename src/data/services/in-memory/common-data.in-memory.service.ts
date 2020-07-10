import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Descriptable } from 'src/data/models/Descriptable';
import { CommonDataService } from '../common-data.service.interface';

export const MOCK_DEVICE_TYPES: Descriptable[] = [
  { id: 1, name: 'Computadores' },
  { id: 2, name: 'Notebooks' },
  { id: 3, name: 'Monitores' },
  { id: 4, name: 'Piezas' },
  { id: 5, name: 'Periféricos' },
  { id: 6, name: 'Accesorios' }
];

export const MOCK_DEVICE_BRANDS: Descriptable[] = [
  { id: 1, name: 'Lenovo' },
  { id: 2, name: 'ASUS' }
];

@Injectable()
export class CommonInMemoryDataService
  implements CommonDataService {

  public deviceTypes$: Observable<Descriptable[]>;
  public deviceBrands$: Observable<Descriptable[]>;

  constructor() {
    this.deviceTypes$ = of(MOCK_DEVICE_TYPES);
    this.deviceBrands$ = of(MOCK_DEVICE_BRANDS);
  }
}

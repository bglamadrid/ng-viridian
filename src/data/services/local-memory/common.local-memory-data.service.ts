import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Descriptable } from 'src/data/models/Descriptable';
import { CommonDataIService } from '../common-data.iservice';

export const MOCK_DEVICE_FAMILIES: Descriptable[] = [
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
  implements CommonDataIService {

  public deviceFamilies$: Observable<Descriptable[]>;
  public deviceBrands$: Observable<Descriptable[]>;

  constructor() {
    this.deviceFamilies$ = of(MOCK_DEVICE_FAMILIES);
    this.deviceBrands$ = of(MOCK_DEVICE_BRANDS);
  }
}

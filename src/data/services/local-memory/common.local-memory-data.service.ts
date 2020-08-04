import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Descriptable } from 'src/data/models/Descriptable';
import { CommonDataIService } from '../common-data.iservice';

export const MOCK_DEVICE_FAMILIES: Descriptable[] = [
  { id: 1, name: '2017 Portátiles ultra portables' },
  { id: 2, name: '2017 Portátiles gráficos' },
  { id: 3, name: '2017 Portátiles convertible no detachable con HDD ó SSD' },
  { id: 4, name: '2019 Portátiles ultra portables'  },
  { id: 5, name: '2019 Portátiles gráficos' },
];

export const MOCK_DEVICE_BRANDS: Descriptable[] = [
  { id: 1, name: 'Lenovo' },
  { id: 2, name: 'Acer' },
  { id: 3, name: 'HP' }
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

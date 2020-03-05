import { Observable, of } from 'rxjs';
import { Descriptable } from '../models/Descriptable';

export interface CommonDataService {
  deviceTypes$: Observable<Descriptable[]>;
  deviceBrands$: Observable<Descriptable[]>;
}

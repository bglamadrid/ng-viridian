import { Observable } from 'rxjs';
import { Descriptable } from 'src/data/models/Descriptable';

export interface CommonDataIService {
  deviceTypes$: Observable<Descriptable[]>;
  deviceBrands$: Observable<Descriptable[]>;
}

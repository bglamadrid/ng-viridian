import { Observable } from 'rxjs';
import { Descriptable } from 'src/data/models/Descriptable';

export interface CommonDataIService {
  deviceFamilies$: Observable<Descriptable[]>;
  deviceBrands$: Observable<Descriptable[]>;
}

import { Observable } from 'rxjs';
import { Descriptable } from '../models/Descriptable';

export interface CommonService {

  loadDeviceTypes(): Observable<Descriptable[]>;
  loadDeviceBrands(): Observable<Descriptable[]>;
}

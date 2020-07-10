import { Descriptable } from 'src/data/models/Descriptable';

export interface DeviceFilters {
  name: string;
  brand: Partial<Descriptable>;
  deviceType: Partial<Descriptable>;
}

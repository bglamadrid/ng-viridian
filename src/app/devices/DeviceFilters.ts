import { Descriptable } from 'src/models/Descriptable';

export interface DeviceFilters {
  name: string;
  brand: Partial<Descriptable>;
  deviceType: Partial<Descriptable>;
}

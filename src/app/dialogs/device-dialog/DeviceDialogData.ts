import { Device } from 'src/models/entities/Device';
import { DeviceCatalogService } from 'src/app/routed_components/device-catalog/device-catalog.service';

export interface DeviceDialogData {
  svc: DeviceCatalogService;
  device: Device;
}

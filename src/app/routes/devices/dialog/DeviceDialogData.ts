import { Device } from 'src/data/models/entities/Device';
import { DeviceCatalogService } from 'src/app/routes/devices/devices.service';

export interface DeviceDialogData {
  svc: DeviceCatalogService;
  device: Device;
}

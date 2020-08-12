import { Device } from 'src/data/models/entities/Device';
import { DevicesService } from 'src/app/routes/devices-catalog/devices.service';

export interface DeviceDialogData {
  svc: DevicesService;
  device: Device;
}

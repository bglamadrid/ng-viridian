import { Injectable } from '@angular/core';
import { Device } from 'src/models/entities/Device';
import { MOCK_DEVICES } from './data/mock-devices';
import { CrudInMemoryService } from './.crud.in-memory.service';

@Injectable({ providedIn: 'root' })
export class DeviceCrudInMemoryService
  extends CrudInMemoryService<Device> {

  constructor() {
    super();
    this.items = MOCK_DEVICES;
  }
}

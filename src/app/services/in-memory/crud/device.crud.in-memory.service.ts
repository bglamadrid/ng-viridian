import { Injectable } from '@angular/core';
import { Device } from 'src/models/entities/Device';
import { CrudInMemoryService } from './.crud.in-memory.service';
import { MOCK_DEVICES } from './data/mock-devices';

@Injectable()
export class DeviceCrudInMemoryService
  extends CrudInMemoryService<Device> {

  constructor() {
    super();
    this.items = MOCK_DEVICES.map(d => Object.assign(new Device(), d));
  }
}

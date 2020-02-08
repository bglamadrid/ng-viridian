import { Injectable } from '@angular/core';
import { Device } from 'src/models/entities/Device';
import { CrudInMemoryService } from './.crud.in-memory.service';
import { MOCK_DEVICES } from './data/mock-devices';

@Injectable()
export class DeviceCrudInMemoryService
  extends CrudInMemoryService<Device> {

  constructor() {
    super();
    this.items = MOCK_DEVICES;
  }

  protected filterItems(filter: Partial<Device>): Set<Device> {
    const uniqueItems = new Set<Device>();
    for (const property in filter) {
      if (property !== 'id' && property in filter) {
        const itemsMatchingProperty = this.items.filter(it => filter[property] === it[property]);
        for (const item of itemsMatchingProperty) {
          uniqueItems.add(item);
        }
      }
    }
    return uniqueItems;
  }
}

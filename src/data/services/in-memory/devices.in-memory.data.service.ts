import { Injectable } from '@angular/core';
import { Device } from 'src/data/models/entities/Device';
import { InMemoryDataService } from './.in-memory.data.service';

export const MOCK_DEVICES: Partial<Device>[] = [
  {
    id: 1,
    name: 'Lenovo IdeaPad L340 (81LK0009CL)',
    description: 'Manteniendo la frescura y el poder de la serie IdeaPad',
    urls: [],
    brand: { id: 1, name: 'Lenovo' },
    images: [
      { width: 750, height: 555, url: 'https://home.ripley.cl/store/Attachment/WOP/D113/2000375197631/2000375197631-3.jpg' }
    ],
    deviceType: { id: 2, name: 'Notebooks' },
    specifications: { Procesador: 'Intel Core i5' }
  },
  {
    id: 2,
    name: 'ASUS Zenbook Pro 15 UX581GV-H2001T',
    description: null,
    urls: [],
    brand: { id: 2, name: 'ASUS' },
    images: [
      { width: 1500, height: 1500, url: 'assets/img/8129265_1.jpg' }
    ],
    deviceType: { id: 2, name: 'Notebooks' },
    specifications: { Procesador: 'Intel Core i3' }
  }
];


@Injectable()
export class DevicesInMemoryDataService
  extends InMemoryDataService<Device> {

  constructor() {
    super();
    this.items = MOCK_DEVICES.map(d => Object.assign(new Device(), d));
  }
}

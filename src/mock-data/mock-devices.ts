import { Device } from 'src/models/Device';

export const MOCK_DEVICES: Device[] = [
  {
    id: 1,
    name: 'Lenovo IdeaPad L340 (81LK0009CL)',
    description: 'Manteniendo la frescura y el poder de la serie IdeaPad',
    urls: [],
    brand: { id: 1, name: 'Lenovo' },
    images: [
      { width: 750, height: 555, url: 'https://home.ripley.cl/store/Attachment/WOP/D113/2000375197631/2000375197631-3.jpg' }
    ],
    deviceType: { id: 1, name: 'Computadores' },
    specifications: {}
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
    deviceType: { id: 1, name: 'Computadores' },
    specifications: {}
  }
];

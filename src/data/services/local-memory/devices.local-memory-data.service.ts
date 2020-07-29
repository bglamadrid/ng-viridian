import { Injectable } from '@angular/core';
import { Device } from 'src/data/models/entities/Device';
import { EntityLocalMemoryDataService } from './local-memory-data.abstract-service';

export const MOCK_DEVICES: Partial<Device>[] = [
  {
    id: 1,
    name: 'Acer Aspire ES13',
    description: '',
    urls: [],
    brand: { id: 2, name: 'Acer' },
    images: [
      { width: 500, height: 500, url: 'https://d9hhrg4mnvzow.cloudfront.net/reviews.netnow.cl/aspire-es13/331d5e9f-es1-red.jpg' },
      { width: 500, height: 500, url: 'https://d9hhrg4mnvzow.cloudfront.net/reviews.netnow.cl/aspire-es13/32290537-es1.jpg' }
    ],
    deviceFamily: { id: 1, name: '2017 Portátiles ultra portables' },
    specifications: {
      Procesador: 'Intel Pentium 4200N (4 Núcleos)',
      Almacenamiento: '500GB HDD',
      RAM: '4GB',
      Pantalla: '13,3" LED Acer Comfyview',
      TarjetaVideo: 'Integrada',
      Puertos: '2xUSB2.0 + 1xUSB3.0',
      TipoBateria: '3 Celdas',
      Bluetooth: 'Si',
      CamaraWeb: 'Acer Crystal Eye HD',
      Peso: '1,586 Kg',
      Dimensiones: '327 x 21 x 228 mm'
    }
  },
  {
    id: 2,
    name: 'HP Pavilion 14',
    description: '',
    urls: [],
    brand: { id: 3, name: 'HP' },
    images: [
      { width: 1000, height: 671, url: 'https://www.notebookcheck.net/fileadmin/Notebooks/HP/Pavilion_14-al003ng/HP_Pavilion_14_general1.jpg' }
    ],
    deviceFamily: { id: 1, name: '2017 Portátiles ultra portables' },
    specifications: {
      Procesador: 'Intel Pentium 4405U (2 Núcleos)',
      Almacenamiento: '500GB HDD',
      RAM: '4GB',
      Pantalla: '14"',
      TarjetaVideo: 'Integrada',
      Puertos: '2xUSB2.0 + 1xUSB3.0',
      TipoBateria: '3 Celdas',
      Bluetooth: 'Si',
      CamaraWeb: 'Integrada',
      Peso: '1,586 Kg'
    }
  },
  {
    id: 3,
    name: 'Acer Aspire F15',
    description: '',
    urls: [],
    brand: { id: 2, name: 'Acer' },
    images: [
      { width: 1616, height: 1200, url: 'https://www.notebookcheck.net/fileadmin/_processed_/csm_case_5_808e766844.jpg' },
      { width: 800, height: 600, url: 'https://www.notebookcheck.net/uploads/tx_nbc2/AcerAspire_F5-573G__3__01.JPG' }
    ],
    deviceFamily: { id: 2, name: '2017 Portátiles gráficos' },
    specifications: {
      Procesador: 'Intel Celeron 3955U (2 Núcleos)',
      Almacenamiento: '500GB HDD',
      RAM: '4GB',
      Pantalla: '15,6"',
      TarjetaVideo: 'nVidia GeForce 2GB/1GHz',
      Puertos: '2xUSB2.0 + 1xUSB3.0',
      TipoBateria: '4 Celdas',
      Bluetooth: 'Si',
      CamaraWeb: 'Integrada',
      Peso: '2,20 Kg',
      Dimensiones: '381 x 28 x 256 mm'
    }
  },
  {
    id: 4,
    name: 'HP 250 G4',
    description: '',
    urls: [],
    brand: { id: 3, name: 'HP' },
    images: [
      { width: 573, height: 430, url: 'https://gearopen.com/wp-content/uploads/2016/09/250-g40.jpg' },
      { width: 1600, height: 1200, url: 'https://www.notebookcheck.net/fileadmin/Notebooks/HP/250_G4_T6P08ES/4zu3_HP_250_G4.jpg' }
    ],
    deviceFamily: { id: 2, name: '2017 Portátiles gráficos' },
    specifications: {
      Procesador: 'Intel Celeron 3955U (2 Núcleos)',
      Almacenamiento: '500GB HDD',
      RAM: '4GB',
      Pantalla: '15,6"',
      TarjetaVideo: 'AMD Radeon R5 430 2GB/1GHz',
      Puertos: '2xUSB2.0 + 1xUSB3.0',
      TipoBateria: '4 Celdas',
      Bluetooth: 'Si',
      CamaraWeb: 'Acer Crystal Eye HD',
      Peso: '2,20 Kg',
      Dimensiones: '381 x 28 x 256 mm'
    }
  },
  {
    id: 5,
    name: 'Acer Aspire R13',
    description: '',
    urls: [],
    brand: { id: 2, name: 'Acer' },
    images: [
      { width: 1600, height: 1200, url: 'https://www.notebookcheck.net/fileadmin/Notebooks/Acer/Aspire_R13/4zu3_aceraspirer13.jpg' },
      { width: 1280, height: 1024, url: 'https://www.notebookcheck.net/uploads/tx_nbc2/AcerAspireR7-371T__1__02.jpg' }
    ],
    deviceFamily: { id: 3, name: '2017 Portátiles convertible no detachable con HDD ó SSD' },
    specifications: {
      Procesador: 'Intel Celeron 3955U (2 Núcleos)',
      Almacenamiento: '128GB SSD',
      RAM: '4GB',
      Pantalla: '13,3" LED Touchscreen',
      TarjetaVideo: 'Integrada',
      Puertos: '2xUSB2.0 + 1xUSB3.0',
      TipoBateria: '4 Celdas',
      Bluetooth: 'Si',
      CamaraWeb: 'Acer Crystal Eye HD',
      Peso: '1,586 Kg',
      Dimensiones: '328 x 20 x 228 mm'
    }
  },
  {
    id: 6,
    name: 'Lenovo Yoga 710',
    description: '',
    urls: [],
    brand: { id: 1, name: 'Lenovo' },
    images: [
      { width: 2560, height: 1600, url: 'https://i1.wp.com/www.gottabemobile.com/wp-content/uploads/2016/02/YOGA-710-11-inch-in-silver_laptop-mode.jpg' },
      { width: 2560, height: 1600, url: 'https://images.techhive.com/images/article/2016/02/lenovo_yoga_710_11-inch_silver_stand_mode-100645948-orig.jpg' }
    ],
    deviceFamily: { id: 3, name: '2017 Portátiles convertible no detachable con HDD ó SSD' },
    specifications: {
      Procesador: 'Intel Pentium 4405U (2 Núcleos)',
      Almacenamiento: '500GB HDD',
      RAM: '4GB',
      Pantalla: '14" LED Touchscreen"',
      TarjetaVideo: 'Integrada',
      Puertos: '2xUSB2.0 + 1xUSB3.0',
      TipoBateria: '2 Celdas',
      Bluetooth: 'Si',
      CamaraWeb: 'Acer Crystal Eye HD',
      Peso: '1,73 Kg',
      Dimensiones: '328 x 20 x 228 mm'
    }
  },
  {
    id: 7,
    name: 'Acer Aspire 1',
    description: '',
    urls: [
      'http://www.mercadopublico.cl/CMII/Archivos/AttchPC.aspx?file=G9moE3Of1jobqVFGNuLPCUekRqkyVHKnk0iU3SZ5VslmxcecMI8x6AeIYD+Ztf+W'
    ],
    brand: { id: 1, name: 'Lenovo' },
    images: [
      { width: 2560, height: 1600, url: 'https://i1.wp.com/www.gottabemobile.com/wp-content/uploads/2016/02/YOGA-710-11-inch-in-silver_laptop-mode.jpg' },
      { width: 2560, height: 1600, url: 'https://images.techhive.com/images/article/2016/02/lenovo_yoga_710_11-inch_silver_stand_mode-100645948-orig.jpg' }
    ],
    deviceFamily: { id: 4, name: '2019 Portátiles ultra portables' },
    specifications: {
      Procesador: 'Intel Pentium N5000 (4 Núcleos)',
      Almacenamiento: '500GB HDD',
      RAM: '4GB',
      Pantalla: '14"',
      TarjetaVideo: 'Integrada',
      Puertos: '2xUSB2.0 + 1xUSB3.0',
      TipoBateria: '2 Celdas',
      Bluetooth: 'Si',
      CamaraWeb: 'Acer Crystal Eye HD',
      Peso: '1,487 Kg',
      Dimensiones: '343 x 18 x 245 mm'
    }
  }
];


@Injectable()
export class DevicesInMemoryDataService
  extends EntityLocalMemoryDataService<Device> {

  constructor() {
    super();
    this.items = MOCK_DEVICES.map(d => Object.assign(new Device(), d));
  }
}

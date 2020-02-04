import { AbstractEntity } from '../AbstractEntity';
import { Descriptable } from '../Descriptable';
import { Documentable } from '../Documentable';
import { Image } from '../Image';
import { Device } from './Device';

export class ComputerPart
  extends AbstractEntity
  implements Documentable, Device {

  id: number;
  brand: Descriptable;
  images: Image[];
  name: string;
  description: string;
  urls: string[];
  deviceType: Descriptable;
  specifications: { [key: string]: string; };

  public partType: Descriptable;
}

import { Marketable } from './Marketable';
import { Descriptable } from './Descriptable';
import { Image } from './Image';

export abstract class Device
  implements Marketable {

  id: string | number;
  name: string;
  description: string;
  brand: Descriptable;
  images: Image[];
  urls: string[];

  public deviceType: Descriptable;
  public specifications: { [key: string]: string };
}

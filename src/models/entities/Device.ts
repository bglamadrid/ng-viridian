import { Marketable } from '../Marketable';
import { Descriptable } from '../Descriptable';
import { Image } from '../Image';

export class Device
  implements Marketable {

  id: number;
  name: string;
  description: string;
  brand: Descriptable;
  images: Image[];
  urls: string[];

  public deviceType: Descriptable;
  public specifications: { [key: string]: string };
}

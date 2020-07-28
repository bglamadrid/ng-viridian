import { Marketable } from '../Marketable';
import { Descriptable } from '../Descriptable';
import { Image } from '../Image';

export class Device
  implements Marketable {

  id: number;
  name: string;
  description: string;
  brand: Partial<Descriptable>;
  images: Image[];
  urls: string[];

  public deviceFamily: Partial<Descriptable>;
  public specifications: { [key: string]: string };
}

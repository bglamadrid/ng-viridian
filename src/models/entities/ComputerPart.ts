import { AbstractEntity } from '../AbstractEntity';
import { Descriptable } from '../Descriptable';
import { Documentable } from '../Documentable';
import { Marketable } from '../Brandable';
import { Image } from '../Image';

export class ComputerPart
  extends AbstractEntity
  implements Marketable, Documentable {

  brand: Descriptable;
  images: Image[];
  public name: string;
  public description?: string;
  public urls: string[];
  public partType: Partial<Descriptable>;
  public specifications: { [key: string]: string };
}

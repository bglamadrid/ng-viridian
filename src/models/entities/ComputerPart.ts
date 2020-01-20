import { AbstractEntity } from '../AbstractEntity';
import { Descriptable } from '../Descriptable';
import { Documentable } from '../Documentable';
import { Brandable } from '../Brandable';

export class ComputerPart
  extends AbstractEntity
  implements Brandable, Documentable {

  brand: Descriptable;
  public name: string;
  public description?: string;
  public urls: string[];
  public partType: Partial<Descriptable>;
  public specifications: { [key: string]: string };
}

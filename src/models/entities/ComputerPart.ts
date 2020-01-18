import { Descriptable } from '../Descriptable';
import { Documentable } from '../Documentable';
import { AbstractEntity } from '../AbstractEntity';

export class ComputerPart
  extends AbstractEntity
  implements Documentable {
  urls: string[];
  public partType: Partial<Descriptable>;
  public brand?: Partial<Descriptable>;
  public specifications: { [key: string]: string };
}

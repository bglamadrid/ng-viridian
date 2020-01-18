import { AbstractEntity } from '../AbstractEntity';
import { Descriptable } from '../Descriptable';
import { Documentable } from '../Documentable';

export class ComputerPart
  extends AbstractEntity
  implements Documentable {

  public name: string;
  public description?: string;
  public urls: string[];
  public partType: Partial<Descriptable>;
  public specifications: { [key: string]: string };
}

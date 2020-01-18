import { Descriptable } from '../Descriptable';
import { ComputerPart } from './ComputerPart';
import { Documentable } from '../Documentable';
import { Ownable } from '../Ownable';
import { AbstractEntity } from '../AbstractEntity';
import { UserProfile } from './UserProfile';

export class Computer
  extends AbstractEntity
  implements Documentable, Ownable {
  urls: string[];
  owner: Partial<UserProfile>;
  owners: Partial<UserProfile>[];
  public parts: ComputerPart[];
  public lastCheckDate?: Date;
  public brand?: Descriptable;
}

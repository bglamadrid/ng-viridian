import { ComputerPart } from './ComputerPart';
import { Ownable } from '../Ownable';
import { AbstractEntity } from '../AbstractEntity';
import { UserProfile } from './UserProfile';
import { Brandable } from '../Brandable';
import { Descriptable } from '../Descriptable';

export class Computer
  extends AbstractEntity
  implements Brandable, Ownable {

  owner: Partial<UserProfile>;
  brand: Descriptable;
  description?: string;
  public name: string;
  public urls: string[];
  public parts: ComputerPart[];
  public lastCheckDate?: Date;
}

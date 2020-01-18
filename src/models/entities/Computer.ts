import { ComputerPart } from './ComputerPart';
import { Ownable } from '../Ownable';
import { AbstractEntity } from '../AbstractEntity';
import { UserProfile } from './UserProfile';

export class Computer
  extends AbstractEntity
  implements Ownable {

  public name: string;
  public urls: string[];
  public owner: Partial<UserProfile>;
  public parts: ComputerPart[];
  public lastCheckDate?: Date;
}

import { ComputerPart } from './ComputerPart';
import { Ownable } from '../Ownable';
import { AbstractEntity } from '../AbstractEntity';
import { UserProfile } from './UserProfile';
import { Marketable } from '../Brandable';
import { Descriptable } from '../Descriptable';
import { Image } from '../Image';

export class Computer
  extends AbstractEntity
  implements Marketable, Ownable {

  owner: Partial<UserProfile>;
  brand: Descriptable;
  images: Image[];
  description?: string;
  public name: string;
  public urls: string[];
  public parts: ComputerPart[];
  public lastCheckDate?: Date;
}

import { ComputerPart } from './ComputerPart';
import { Ownable } from '../Ownable';
import { AbstractEntity } from '../AbstractEntity';
import { UserProfile } from './UserProfile';
import { Image } from '../Image';
import { Device } from '../Device';
import { Descriptable } from '../Descriptable';

export class Computer
  extends AbstractEntity
  implements Ownable, Device {

  name: string;
  description: string;
  brand: Descriptable;
  owner: Partial<UserProfile>;
  images: Image[];
  urls: string[];
  owners?: Partial<UserProfile>[];
  deviceType: Descriptable;
  specifications: { [key: string]: string; };

  public parts: ComputerPart[];
  public lastCheckDate?: Date;
}

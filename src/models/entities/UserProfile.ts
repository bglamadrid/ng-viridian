import { PersonProfile } from './PersonProfile';
import { AbstractEntity } from '../AbstractEntity';

export class UserProfile
  extends AbstractEntity {
  public name: string;
  public registrationDate?: string;
  public password?: string;
  public person?: PersonProfile;
}

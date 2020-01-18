import { AbstractEntity } from '../AbstractEntity';
import { Ownable } from '../Ownable';
import { UserProfile } from './UserProfile';
import { PersonProfile } from './PersonProfile';
import { TimeRestricted } from '../TimeRestricted';

export class Answer
  extends AbstractEntity
  implements Ownable, TimeRestricted {
  owner: Partial<UserProfile>;
  date: Date;
  public content: string;
  public votes: number;
  public accepted: boolean;
}

import { AbstractEntity } from '../AbstractEntity';
import { Answer } from './Answer';
import { Ownable } from '../Ownable';
import { Computer } from './Computer';
import { TimeRestricted } from '../TimeRestricted';
import { UserProfile } from './UserProfile';

export class Question
  extends AbstractEntity
  implements Ownable, TimeRestricted {
  owner: Partial<UserProfile>;
  date: Date;
  public title: string;
  public content: string;
  public answers: Answer[];
  public computer?: Computer;
}

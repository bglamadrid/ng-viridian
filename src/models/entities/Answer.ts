import { AbstractEntity } from '../AbstractEntity';
import { UserProfile } from './UserProfile';
import { TimeBound } from '../TimeBound';

export class Answer
  extends AbstractEntity
  implements TimeBound {

  author: Partial<UserProfile>;
  date: Date;
  public content: string;
  public votes: number;
  public accepted: boolean;
}

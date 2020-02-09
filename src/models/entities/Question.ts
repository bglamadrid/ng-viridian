import { AbstractEntity } from '../AbstractEntity';
import { TimeBound } from '../TimeBound';
import { Answer } from './Answer';
import { UserProfile } from './UserProfile';

export class Question
  extends AbstractEntity
  implements TimeBound {

  date: Date;
  public author: Partial<UserProfile>;
  public title: string;
  public content: string;
  public answers: Answer[];
}

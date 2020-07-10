import { AbstractEntity } from '../AbstractEntity';
import { TimeBound } from '../TimeBound';

export class QuestionItem
  extends AbstractEntity
  implements TimeBound {

  date: Date;
  public title: string;
  public content: string;
  public answersCount: number;
  public ownerId: number;
  public ownerName: string;
}

import { AbstractEntity } from '../AbstractEntity';
import { TimeRestricted } from '../TimeRestricted';

export class QuestionItem extends AbstractEntity
  implements TimeRestricted {
  date: Date;
  public title: string;
  public content: string;
  public answersCount: number;
  public ownerId: number;
  public ownerName: string;
}

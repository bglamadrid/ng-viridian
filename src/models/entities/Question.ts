import { formatDate } from '@angular/common';
import { AbstractEntity } from '../AbstractEntity';
import { TimeBound } from '../TimeBound';
import { Answer } from './Answer';
import { UserProfile } from './UserProfile';

export class Question
  extends AbstractEntity
  implements TimeBound  {

  id: number;
  date: Date;
  public author: Partial<UserProfile>;
  public title: string;
  public content: string;
  public answers: Answer[];

  public get answersCount(): number { return this.answers ? this.answers.length : 0; }
  public get properDate(): string { return formatDate(this.date, 'YYYY/MM/DD', 'es'); }
}

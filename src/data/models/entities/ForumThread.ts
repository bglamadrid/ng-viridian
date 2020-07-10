import { formatDate } from '@angular/common';
import { AbstractEntity } from '../AbstractEntity';
import { TimeBound } from '../TimeBound';
import { ForumThreadReply } from './ForumThreadReply';
import { UserProfile } from './UserProfile';

export class ForumThread
  extends AbstractEntity
  implements TimeBound  {

  id: number;
  date: Date;
  public author: Partial<UserProfile>;
  public title: string;
  public content: string;
  public answers: ForumThreadReply[];

  public get answersCount(): number { return this.answers ? this.answers.length : 0; }
  public get properDate(): string { return formatDate(this.date, 'YYYY/MM/DD', 'es'); }
}

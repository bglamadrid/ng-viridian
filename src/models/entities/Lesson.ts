import { AbstractEntity } from '../AbstractEntity';
import { UserProfile } from './UserProfile';

export class Lesson
  extends AbstractEntity {

  id: number;
  date: Date;
  public author: Partial<UserProfile>;
  public title: string;
  public content: string;
}

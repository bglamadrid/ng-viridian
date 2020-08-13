import { AbstractEntity } from '../AbstractEntity';
import { UserProfile } from './UserProfile';
import { Image } from '../Image';

export class OnlineCourse
  extends AbstractEntity {

  id: number;
  date: Date;
  public author: Partial<UserProfile>;
  public title: string;
  public resume: string;
  public content: string;
  public images: Partial<Image>[];
}

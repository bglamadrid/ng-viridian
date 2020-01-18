import { AbstractEntity } from '../AbstractEntity';

export class Session
  extends AbstractEntity {
  public uniqueHash: string;
  public loginDateTime?: string;
}

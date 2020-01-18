import { AbstractEntity } from './AbstractEntity';

export interface Descriptable
  extends AbstractEntity {
  name: string;
  description?: string;
}

import { AbstractEntity } from './AbstractEntity';

export interface Documentable
  extends AbstractEntity {
  urls: string[];
}

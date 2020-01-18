import { AbstractEntity } from './AbstractEntity';

/**
 * An element that can be described, and for instance, has been given a name.
 */
export interface Descriptable
  extends AbstractEntity {

  name: string;
  description?: string;
}

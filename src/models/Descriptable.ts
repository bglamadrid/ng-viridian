import { AbstractEntity } from './AbstractEntity';

/**
 * An element that can be described, and for instance, has been given a name.
 * Sometimes its description may just be its name.
 */
export interface Descriptable
  extends AbstractEntity {

  name: string;
  description?: string;
}

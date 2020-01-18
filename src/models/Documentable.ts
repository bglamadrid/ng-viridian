import { Descriptable } from './Descriptable';

/**
 * An element that can be documented and be found info about on the internet.
 */
export interface Documentable
  extends Descriptable {

  urls: string[];
}

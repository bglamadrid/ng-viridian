import { Descriptable } from './Descriptable';
import { Image } from './Image';

/**
 * An element that can be documented and be found info about on the internet.
 */
export interface Documentable
  extends Descriptable {

  images: Image[];
  urls: string[];
}

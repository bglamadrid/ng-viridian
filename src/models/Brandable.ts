import { Descriptable } from './Descriptable';
import { Documentable } from './Documentable';

export interface Brandable
  extends Documentable {

  brand: Descriptable;
}

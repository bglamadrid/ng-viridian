import { Descriptable } from './Descriptable';
import { Documentable } from './Documentable';
import { Image } from './Image';

export interface Marketable
  extends Documentable {

  brand: Partial<Descriptable>;
}

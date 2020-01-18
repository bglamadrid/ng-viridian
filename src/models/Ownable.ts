import { Descriptable } from './Descriptable';
import { UserProfile } from './entities/UserProfile';
import { Documentable } from './Documentable';

/**
 * An element that can be property of someone and have an history of owners.
 * Can be branded as well.
 */
export interface Ownable
  extends Documentable {

  owner: Partial<UserProfile>;
  owners?: Partial<UserProfile>[];
  brand?: Descriptable;
}

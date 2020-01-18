import { UserProfile } from './entities/UserProfile';

export interface Ownable {
  owner: Partial<UserProfile>;
  owners?: Partial<UserProfile>[];
}

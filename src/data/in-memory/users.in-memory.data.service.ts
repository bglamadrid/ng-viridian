import { Injectable } from '@angular/core';
import { UserProfile } from 'src/models/entities/UserProfile';
import { InMemoryDataService } from './.in-memory.data.service';

export const MOCK_USERS: Partial<UserProfile>[] = [
  {
    id: 1,
    name: 'Elias58'
  },
  {
    id: 2,
    name: 'Fulano24'
  },
  {
    id: 3,
    name: 'SalonAniki'
  }
];

@Injectable()
export class UsersInMemoryDataService
  extends InMemoryDataService<UserProfile> {

  constructor() {
    super();
    this.items = MOCK_USERS.map(u => Object.assign(new UserProfile(), u));
  }
}

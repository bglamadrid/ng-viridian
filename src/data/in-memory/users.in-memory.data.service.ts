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
  },
  {
    id: 4,
    name: 'CarlosBaeza'
  },
  {
    id: 5,
    name: 'ElNotario'
  },
  {
    id: 6,
    name: 'SrMuerte'
  },
  {
    id: 7,
    name: 'PabloAguilar'
  },
  {
    id: 8,
    name: 'ERisas99'
  },
  {
    id: 9,
    name: 'CabezaDeRadio'
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

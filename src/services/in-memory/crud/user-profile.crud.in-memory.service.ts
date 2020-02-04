import { Injectable } from '@angular/core';
import { UserProfile } from 'src/models/entities/UserProfile';
import { MOCK_USERS } from './data/mock-users';
import { CrudInMemoryService } from './.crud.in-memory.service';

@Injectable({ providedIn: 'root' })
export class UserProfileCrudInMemoryService
  extends CrudInMemoryService<UserProfile> {

  constructor() {
    super();
    this.items = MOCK_USERS;
  }
}

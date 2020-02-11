import { Injectable } from '@angular/core';
import { UserProfile } from 'src/models/entities/UserProfile';
import { CrudInMemoryService } from './.crud.in-memory.service';
import { MOCK_USERS } from './data/mock-users';

@Injectable()
export class UserProfileCrudInMemoryService
  extends CrudInMemoryService<UserProfile> {

  constructor() {
    super();
    this.items = MOCK_USERS.map(u => Object.assign(new UserProfile(), u));
  }
}

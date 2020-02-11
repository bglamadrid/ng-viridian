import { Injectable } from '@angular/core';
import { PersonProfile } from 'src/models/entities/PersonProfile';
import { CrudInMemoryService } from './.crud.in-memory.service';
import { MOCK_PEOPLE } from './data/mock-people';

@Injectable()
export class PersonProfileCrudInMemoryService
  extends CrudInMemoryService<PersonProfile> {

  constructor() {
    super();
    this.items = MOCK_PEOPLE.map(p => Object.assign(new PersonProfile(), p));
  }
}

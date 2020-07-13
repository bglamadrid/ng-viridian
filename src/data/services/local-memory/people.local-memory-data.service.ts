import { Injectable } from '@angular/core';
import { PersonProfile } from 'src/data/models/entities/PersonProfile';
import { EntityLocalMemoryDataService } from './local-memory-data.abstract-service';

export const MOCK_PEOPLE: Partial<PersonProfile>[] = [

];

@Injectable()
export class PeopleInMemoryDataService
  extends EntityLocalMemoryDataService<PersonProfile> {

  constructor() {
    super();
    this.items = MOCK_PEOPLE.map(p => Object.assign(new PersonProfile(), p));
  }
}

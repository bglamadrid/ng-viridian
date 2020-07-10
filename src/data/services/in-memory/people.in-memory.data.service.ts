import { Injectable } from '@angular/core';
import { PersonProfile } from 'src/data/models/entities/PersonProfile';
import { InMemoryDataService } from './.in-memory.data.service';

export const MOCK_PEOPLE: Partial<PersonProfile>[] = [

];

@Injectable()
export class PeopleInMemoryDataService
  extends InMemoryDataService<PersonProfile> {

  constructor() {
    super();
    this.items = MOCK_PEOPLE.map(p => Object.assign(new PersonProfile(), p));
  }
}

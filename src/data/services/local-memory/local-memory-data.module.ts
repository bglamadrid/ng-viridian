import { NgModule } from '@angular/core';
import { DATA_INJECTION_TOKENS } from '../data-injection-tokens';
import { CommonInMemoryDataService } from './common.local-memory-data.service';
import { DevicesInMemoryDataService } from './devices.local-memory-data.service';
import { ForumInMemoryDataService } from './forum.local-memory-data.service';
import { OnlineCoursesInMemoryDataService } from './online-courses.local-memory-data.service';
import { PeopleInMemoryDataService } from './people.local-memory-data.service';
import { UsersInMemoryDataService } from './users.local-memory-data.service';

@NgModule({
  providers: [
    { provide: DATA_INJECTION_TOKENS.common, useClass: CommonInMemoryDataService },
    { provide: DATA_INJECTION_TOKENS.devices, useClass: DevicesInMemoryDataService },
    { provide: DATA_INJECTION_TOKENS.forum, useClass: ForumInMemoryDataService },
    { provide: DATA_INJECTION_TOKENS.people, useClass: PeopleInMemoryDataService },
    { provide: DATA_INJECTION_TOKENS.lessons, useClass: OnlineCoursesInMemoryDataService },
    { provide: DATA_INJECTION_TOKENS.users, useClass: UsersInMemoryDataService }
  ]
})
export class DataModule { }

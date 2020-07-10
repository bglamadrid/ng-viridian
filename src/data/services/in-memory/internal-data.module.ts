import { NgModule } from '@angular/core';
import { CommonInMemoryDataService } from './common-data.in-memory.service';
import { DevicesInMemoryDataService } from './devices.in-memory.data.service';
import { ForumInMemoryDataService } from './forum.in-memory.data.service';
import { PeopleInMemoryDataService } from './people.in-memory.data.service';
import { UsersInMemoryDataService } from './users.in-memory.data.service';
import { SERVICE_ALIASES } from '../service-aliases';
import { LessonsInMemoryDataService } from './lessons.in-memory.data.service';



@NgModule({
  providers: [
    { provide: SERVICE_ALIASES.common, useClass: CommonInMemoryDataService },
    { provide: SERVICE_ALIASES.devices, useClass: DevicesInMemoryDataService },
    { provide: SERVICE_ALIASES.forum, useClass: ForumInMemoryDataService },
    { provide: SERVICE_ALIASES.people, useClass: PeopleInMemoryDataService },
    { provide: SERVICE_ALIASES.lessons, useClass: LessonsInMemoryDataService },
    { provide: SERVICE_ALIASES.users, useClass: UsersInMemoryDataService }
  ]
})
export class DataModule { }

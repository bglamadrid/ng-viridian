import { NgModule } from '@angular/core';
import { CommonInMemoryDataService } from './in-memory/common-data.in-memory.service';
import { DevicesInMemoryDataService } from './in-memory/devices.in-memory.data.service';
import { ForumInMemoryDataService } from './in-memory/forum.in-memory.data.service';
import { PeopleInMemoryDataService } from './in-memory/people.in-memory.data.service';
import { UsersInMemoryDataService } from './in-memory/users.in-memory.data.service';
import { SERVICE_ALIASES } from './service-aliases';



@NgModule({
  providers: [
    { provide: SERVICE_ALIASES.common, useClass: CommonInMemoryDataService },
    { provide: SERVICE_ALIASES.devices, useClass: DevicesInMemoryDataService },
    { provide: SERVICE_ALIASES.forum, useClass: ForumInMemoryDataService },
    { provide: SERVICE_ALIASES.people, useClass: PeopleInMemoryDataService },
    { provide: SERVICE_ALIASES.users, useClass: UsersInMemoryDataService }
  ]
})
export class DataModule { }

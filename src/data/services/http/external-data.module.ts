import { NgModule } from '@angular/core';
import { CommonDataHttpService } from './common-data.http.service';
import { DevicesHttpDataService } from './devices.http.data.service';
import { PeopleHttpDataService } from './people.http.data.service';
import { UsersHttpDataService } from './users.http.data.service';
import { ForumHttpDataService } from './forum.http.data.service';
import { SERVICE_ALIASES } from '../service-aliases';

@NgModule({
  providers: [
    { provide: SERVICE_ALIASES.common, useClass: CommonDataHttpService },
    { provide: SERVICE_ALIASES.devices, useClass: DevicesHttpDataService },
    { provide: SERVICE_ALIASES.forum, useClass: ForumHttpDataService },
    { provide: SERVICE_ALIASES.people, useClass: PeopleHttpDataService },
    // { provide: SERVICE_ALIASES.lessons, useClass: undefined },
    { provide: SERVICE_ALIASES.users, useClass: UsersHttpDataService },
  ]
})
export class DataModule { }

import { NgModule } from '@angular/core';
import { CommonDataHttpService } from './common-data-http.service';
import { DevicesHttpDataService } from './devices.http-data.service';
import { PeopleHttpDataService } from './people.http-data.service';
import { UsersHttpDataService } from './users.http-data.service';
import { ForumHttpDataService } from './forum.http-data.service';
import { DATA_INJECTION_TOKENS } from '../data-injection-tokens';

@NgModule({
  providers: [
    { provide: DATA_INJECTION_TOKENS.common, useClass: CommonDataHttpService },
    { provide: DATA_INJECTION_TOKENS.devices, useClass: DevicesHttpDataService },
    { provide: DATA_INJECTION_TOKENS.forum, useClass: ForumHttpDataService },
    { provide: DATA_INJECTION_TOKENS.people, useClass: PeopleHttpDataService },
    // { provide: SERVICE_ALIASES.lessons, useClass: undefined },
    { provide: DATA_INJECTION_TOKENS.users, useClass: UsersHttpDataService },
  ]
})
export class DataModule { }

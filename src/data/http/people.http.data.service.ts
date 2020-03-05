import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { PersonProfile } from 'src/models/entities/PersonProfile';
import { Session } from 'src/models/entities/Session';
import { HttpDataService } from './.http.data.service';

@Injectable()
export class PeopleHttpDataService
  extends HttpDataService<PersonProfile> {

  protected entityURI = 'person';
  protected entitiesURI = 'people';

  constructor(
    protected http: HttpClient
  ) {
    super();
  }

  public queryPersonFromSession(ssn: Session): Observable<PersonProfile> {
    return this.http.get<PersonProfile>(
      this.apiURL,
      this.httpParamsOf({
        session: ssn.uniqueHash
      })
    ).pipe(
      retry(2)
    );
  }
}

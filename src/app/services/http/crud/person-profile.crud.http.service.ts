import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { PersonProfile } from 'src/models/entities/PersonProfile';
import { Session } from 'src/models/entities/Session';
import { CrudHttpService } from './.crud.http.service';

@Injectable()
export class PersonProfileCrudHttpService
  extends CrudHttpService<PersonProfile> {

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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from 'src/models/entities/Session';
import { PersonProfile } from 'src/models/entities/PersonProfile';
import { retry } from 'rxjs/operators';
import { CrudHttpService } from './.crud.http.service';

@Injectable({ providedIn: 'root' })
export class PersonHttpService extends CrudHttpService<PersonProfile> {
  protected entityURI = 'person';
  protected entitiesURI = 'people';

  constructor(
    protected http: HttpClient
  ) {
    super(http);
  }

  public queryPersonFromSession(ssn: Session): Observable<PersonProfile> {
    return this.http.get<PersonProfile>(
      this.baseURI,
      this.httpParamsOf({
        session: ssn.uniqueHash
      })
    ).pipe(
      retry(2)
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from 'src/models/entities/Session';
import { BaseHttpService } from './.http.service';

@Injectable({ providedIn: 'root' })
export class SessionsHttpService extends BaseHttpService {

  protected baseURI = this.baseURI + '/sessions';

  constructor(
    protected http: HttpClient
  ) {
    super();
  }

  public openSession(details: any): Observable<Session> {
    return this.http.post<Session>(
      this.baseURI + '/open',
      details
    );
  }

  public validateSession(ssn: Session): Observable<boolean> {
    return this.http.post<boolean>(
      this.baseURI + '/validate',
      ssn
    );
  }

  public terminateSession(ssn: Session): Observable<boolean> {
    return this.http.post<boolean>(
      this.baseURI + '/terminate',
      ssn
    );
  }
}

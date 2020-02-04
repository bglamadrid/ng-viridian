import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from 'src/models/entities/Session';
import { HttpService } from './.http.service';

@Injectable()
export class SessionsHttpService
  extends HttpService {

  private svcURI = `${this.apiURL}/sessions`;

  constructor(
    protected http: HttpClient
  ) {
    super();
  }

  public openSession(details: any): Observable<Session> {
    return this.http.post<Session>(
      `${this.svcURI}/open`,
      details
    );
  }

  public validateSession(ssn: Session): Observable<boolean> {
    return this.http.post<boolean>(
      `${this.svcURI}/validate`,
      ssn
    );
  }

  public terminateSession(ssn: Session): Observable<boolean> {
    return this.http.post<boolean>(
      `${this.svcURI}/terminate`,
      ssn
    );
  }
}

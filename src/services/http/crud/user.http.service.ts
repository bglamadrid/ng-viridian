import { Injectable } from '@angular/core';
import { CrudHttpService } from 'src/services/http/crud/.crud.http.service';
import { HttpClient } from '@angular/common/http';
import { UserProfile } from 'src/models/entities/UserProfile';

@Injectable({ providedIn: 'root' })
export class UserHttpService extends CrudHttpService<UserProfile> {
  protected entityURI = 'user';
  protected entitiesURI = 'users';

  constructor(
    protected http: HttpClient
  ) {
    super(http);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudHttpService } from 'src/app/services/http/crud/.crud.http.service';
import { UserProfile } from 'src/models/entities/UserProfile';

@Injectable()
export class UserProfileCrudHttpService
  extends CrudHttpService<UserProfile> {

  protected entityURI = 'user';
  protected entitiesURI = 'users';

  constructor(
    protected http: HttpClient
  ) {
    super();
  }
}

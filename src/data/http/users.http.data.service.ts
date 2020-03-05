import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpDataService } from 'src/data/http/.http.data.service';
import { UserProfile } from 'src/models/entities/UserProfile';

@Injectable()
export class UsersHttpDataService
  extends HttpDataService<UserProfile> {

  protected entityURI = 'user';
  protected entitiesURI = 'users';

  constructor(
    protected http: HttpClient
  ) {
    super();
  }
}

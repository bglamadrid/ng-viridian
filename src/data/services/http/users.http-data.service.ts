import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpDataService } from './http-data.abstract-service';
import { UserProfile } from 'src/data/models/entities/UserProfile';

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

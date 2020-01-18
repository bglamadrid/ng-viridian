import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { BaseHttpService } from '../.http.service';

@Injectable({ providedIn: 'root' })
export abstract class CrudHttpService<T> extends BaseHttpService {
  /** URI for the singular entity over whose/which these CRUD methods would act upon */
  protected entityURI: string;
  /** URI for the many entities over whose/which these CRUD methods would act upon */
  protected entitiesURI: string;

  constructor(
    protected http: HttpClient
  ) {
    super();
  }

  public loadById(id: number): Observable<T[]> {
    return this.http.get<T[]>(
      `${this.baseURI}/${this.entityURI}/${id}`
    ).pipe(
      retry(2)
    );
  }

  public loadAll(): Observable<T[]> {
    return this.http.get<T[]>(
      `${this.baseURI}/${this.entitiesURI}`
    );
  }

  public create(emp: T): Observable<T> {
    return this.http.post<T>(
      this.baseURI,
      emp
    );
  }

  public update(emp: T, id: number): Observable<T> {
    return this.http.put<T>(
      `${this.baseURI}/${this.entityURI}/${id}`,
      emp
    );
  }

  public deleteById(id: number): Observable<boolean> {
    return this.http.delete<boolean>(
      `${this.baseURI}/${this.entityURI}/${id}`,
    );
  }
}

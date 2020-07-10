import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from 'src/data/services/data.service.interface';
import { AbstractEntity } from 'src/data/models/AbstractEntity';
import { HttpMessengerService } from './.http-messenger.service';

/**
 * Observables-based service that sends HTTP requests to Create/Read/Update/Delete (CRUD) entities.
 * * Uses the 'correct' HTTP methods for CRUD 'POST/GET/PUT/DELETE'
 * * Only requires implementing two strings
 */
export abstract class HttpDataService<T extends AbstractEntity>
  extends HttpMessengerService
  implements DataService<AbstractEntity> {

  /** Adverb for the singular entity over whose/which the CRUD methods would act upon e.g. 'person' */
  protected abstract entityURI: string;
  /** Adverb for the plural entities over whose/which the CRUD methods would act upon e.g. 'people' */
  protected abstract entitiesURI: string;

  public create(emp: T): Observable<T> {
    return this.http.post<T>(
      `${this.apiURL}/${this.entityURI}`,
      emp
    );
  }

  public readById(id: number): Observable<T> {
    return this.http.get<T>(
      `${this.apiURL}/${this.entityURI}/${id}`
    );
  }

  public readAll(): Observable<T[]> {
    return this.http.get<T[]>(
      `${this.apiURL}/${this.entitiesURI}`
    );
  }

  public readFiltered(f: T): Observable<T[]> {
    return this.http.get<T[]>(
      `${this.apiURL}/${this.entitiesURI}`,
      this.httpParamsOf(f)
    );
  }

  public update(emp: T, id: number): Observable<T> {
    return this.http.put<T>(
      `${this.apiURL}/${this.entityURI}/${id}`,
      emp
    );
  }

  public deleteById(id: number): Observable<boolean> {
    return this.http.delete<boolean>(
      `${this.apiURL}/${this.entityURI}/${id}`,
    );
  }

  /**
   * Syntactic sugar: create a wrapper object with HttpParams.
   * The returned object may be used to include actual HTTP Parameters on any request fired up by an HttpClient.
   */
  protected httpParamsOf(object: any): { params: HttpParams } {
    return {
      params: new HttpParams({ fromObject: object })
    };
  }
}

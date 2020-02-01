import { Observable } from 'rxjs';
import { HttpService } from '../.http.service';
import { AbstractEntity } from 'src/models/AbstractEntity';

/**
 * Transactional service that Creates/Reads/Updates/Deletes entities.
 * This is a verbose abstraction which main features are:
 * * Uses the HTTP methods that are standard for each CRUD operation.
 * * Only requires an URI name for both plural and singular methods to enable them.
 */
export abstract class CrudHttpService<T extends AbstractEntity>
  extends HttpService {

  /** Adverb for the singular entity over whose/which the CRUD methods would act upon e.g. 'person' */
  protected abstract entityURI: string;
  /** Adverb for the plural entities over whose/which the CRUD methods would act upon e.g. 'people' */
  protected abstract entitiesURI: string;

  public loadById(id: number): Observable<T[]> {
    return this.http.get<T[]>(
      `${this.apiURL}/${this.entityURI}/${id}`
    );
  }

  public loadAll(): Observable<T[]> {
    return this.http.get<T[]>(
      `${this.apiURL}/${this.entitiesURI}`
    );
  }

  public create(emp: T): Observable<T> {
    return this.http.post<T>(
      `${this.apiURL}/${this.entityURI}`,
      emp
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
}

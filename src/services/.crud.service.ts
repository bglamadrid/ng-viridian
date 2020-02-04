import { CrudInMemoryService } from './in-memory/crud/.crud.in-memory.service';
import { Observable } from 'rxjs';

export interface CrudService<T> {

  loadById(id: number | string): Observable<T>;
  loadAll(): Observable<T[]>;
  create(emp: T): Observable<T>;
  update(emp: T, id: number | string): Observable<T>;
  deleteById(id: number | string): Observable<boolean>;
}

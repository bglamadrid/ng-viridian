import { CrudService } from '../../.crud.service';
import { AbstractEntity } from 'src/models/AbstractEntity';
import { Observable, of } from 'rxjs';

export abstract class CrudInMemoryService<T extends AbstractEntity>
  implements CrudService<AbstractEntity> {

  protected items: T[];

  protected filterItems(filter: Partial<T>): Set<T> {
    const uniqueItems = new Set<T>();
    for (const property in filter) {
      if (property !== 'id' && property in filter) {
        const itemsMatchingProperty = this.items.filter(it => filter[property] === it[property]);
        for (const item of itemsMatchingProperty) {
          uniqueItems.add(item);
        }
      }
    }
    return uniqueItems;
  }

  public create(d: T): Observable<T> {
    if (!!d.id) {
      const devicesById = this.items.sort((a, b) => ((a.id as number) - (b.id as number)));
      const highestId = devicesById[this.items.length - 1].id as number;
      d.id = highestId + 1;
      this.items.push(d);
      return of(d);
    }
    return of(null);
  }

  public readById(id: number): Observable<T> {
    return of(this.items.find(d => d.id === id));
  }

  public readAll(): Observable<T[]> {
    return of(this.items);
  }

  public readFiltered(filter: T): Observable<T[]> {
    return of([...this.filterItems(filter)]);
  }

  public update(d: T, id: number): Observable<T> {
    if (!!id && !!d.id) {
      const indexInDb = this.items.findIndex(dv => dv.id === id);
      if (indexInDb !== -1) {
        this.items[indexInDb] = d;
        return of(d);
      }
    }
    return of(null);
  }

  public deleteById(id: number): Observable<boolean> {
    if (!!id) {
      const indexInDb = this.items.findIndex(dv => dv.id === id);
      const exists = (indexInDb !== -1);
      if (exists) {
        this.items.splice(indexInDb, 1);
      }
      return of(exists);
    }
    return of(false);
  }
}

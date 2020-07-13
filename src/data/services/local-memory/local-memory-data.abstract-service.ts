import { EntityDataIService } from '../entity.data.iservice';
import { AbstractEntity } from 'src/data/models/AbstractEntity';
import { Observable, of } from 'rxjs';

export abstract class EntityLocalMemoryDataService<T extends AbstractEntity>
  implements EntityDataIService<AbstractEntity> {

  protected items: T[];

  protected filterItems(filter: any): Set<T> {
    let matchingItems = this.items;
    for (const propName in filter) {
      if (filter.hasOwnProperty(propName) && propName !== 'id') {
        const propValue = filter[propName];
        if (typeof propValue === 'string') {
          matchingItems = matchingItems.filter(it => propName in it && (it[propName] as string).toUpperCase().includes(propValue.toUpperCase()) );
        } else if (typeof propValue === 'number') {
          matchingItems = matchingItems.filter(it => propName in it && it[propName] === propValue);
        } else if (typeof propValue === 'object') {
          if (propValue instanceof Date) {
            matchingItems = matchingItems.filter(it => propName in it && it[propName].toString() === propValue.toString());
          } else if ('id' in propValue) {
            matchingItems = matchingItems.filter(it => propName in it && (it[propName] as AbstractEntity).id === propValue.id);
          }
        }
      }
    }

    const uniqueItems = new Set<T>();
    for (const item of matchingItems) {
      uniqueItems.add(item);
    }
    return uniqueItems;
  }

  public create(d: T): Observable<T> {
    if (!d.id) {
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

  public readFiltered(filter: any): Observable<T[]> {
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

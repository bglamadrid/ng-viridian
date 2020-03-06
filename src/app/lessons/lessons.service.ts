import { Inject, Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DataService } from 'src/data/data.service.interface';
import { SERVICE_ALIASES } from 'src/data/service-aliases';
import { Lesson } from 'src/models/entities/Lesson';
import { DeviceFilters } from '../devices/DeviceFilters';

@Injectable()
export class LessonsService {

  protected lessonsArray: Lesson[];
  public lessonsSource: Subject<Lesson[]>;
  public filters: Partial<DeviceFilters>;

  public get lessons(): Lesson[] {
    return this.lessonsArray;
  }
  public set lessons(lessons: Lesson[]) {
    this.lessonsArray = lessons;
    this.lessonsSource.next(lessons);
  }

  constructor(
    @Inject(SERVICE_ALIASES.lessons) protected data: DataService<Lesson>
  ) {
    this.lessonsArray = [];
    this.lessonsSource = new BehaviorSubject(this.lessonsArray);
    this.filters = {};
  }

  public reloadLessons(): void {

    const noFilters: boolean = (JSON.stringify(this.filters) === '{}');
    const query: Observable<Lesson[]> = noFilters ? this.data.readAll() : this.data.readFiltered(this.filters);

    query.pipe(
      catchError(err => []),
      retry(1)
    ).subscribe(
      (items: Lesson[]) => {
        if (items) {
          this.lessons = items;
        }
      }
    );
  }
}

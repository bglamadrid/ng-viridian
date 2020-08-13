import { Inject, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { OnlineCourse } from 'src/data/models/entities/OnlineCourse';
import { DATA_INJECTION_TOKENS } from 'src/data/services/data-injection-tokens';
import { EntityDataIService } from 'src/data/services/entity.data.iservice';

@Injectable({ providedIn: 'root' })
export class OnlineCoursesService
  implements OnDestroy {

  protected coursesArray: OnlineCourse[] = [];

  protected coursesSource: Subject<OnlineCourse[]> = new BehaviorSubject(this.coursesArray);

  public courses$: Observable<OnlineCourse[]> = this.coursesSource.asObservable();

  constructor(
    @Inject(DATA_INJECTION_TOKENS.lessons) protected data: EntityDataIService<OnlineCourse>
  ) { }

  ngOnDestroy(): void {
    this.coursesSource.complete();
  }

  public reloadCourses(): void {

    this.data.readAll().pipe(
      retry(1),
      catchError(() => of([])),
    ).subscribe(
      (items: OnlineCourse[]) => {
        if (items) {
          this.coursesArray = items;
          this.coursesSource.next(this.coursesArray);
        }
      }
    );
  }
}

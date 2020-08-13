import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OnlineCourse } from 'src/data/models/entities/OnlineCourse';
import { OnlineCoursesService } from './online-courses.service';
import { startWith, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-online-courses',
  templateUrl: './online-courses.component.html',
  styleUrls: ['./online-courses.component.css']
})
export class OnlineCoursesComponent
  implements OnInit {

  public courses$: Observable<OnlineCourse[]>;
  public loading$: Observable<boolean>;

  constructor(
    protected service: OnlineCoursesService
  ) {
    this.courses$ = this.service.courses$.pipe();
    this.loading$ = this.courses$.pipe(startWith(true), mapTo(false));
  }

  ngOnInit(): void {
    this.service.reloadCourses();
  }

}

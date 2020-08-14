import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { mapTo, startWith } from 'rxjs/operators';
import { OnlineCourse } from 'src/data/models/entities/OnlineCourse';
import { OnlineCourseDialogComponent } from './dialog/online-course-dialog.component';
import { OnlineCourseDialogData } from './dialog/OnlineCourseDialogData';
import { OnlineCoursesService } from './online-courses.service';

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
    protected service: OnlineCoursesService,
    protected dialogService: MatDialog
  ) {
    this.courses$ = this.service.courses$.pipe();
    this.loading$ = this.courses$.pipe(startWith(true), mapTo(false));
  }

  ngOnInit(): void {
    this.service.reloadCourses();
  }

  public onClickView(c: OnlineCourse): void {
    const dialogData: OnlineCourseDialogData = {
      onlineCourse: c
    };

    this.dialogService.open(
      OnlineCourseDialogComponent,
      {
        width: '40rem',
        data: dialogData
      }
    );
  }

}
